import { portfolioData } from "./portfolio";

export const slugs = portfolioData.projects.map((project) => project.slug);
export type CaseStudy = {
  problem: string;
  approach: string;
  flow: string[];
  tradeoff: string;
  next: string;
  evidence: string;
  validation?: string[];
  sourceFiles?: { label: string; path: string }[];
};
const details: Record<string, CaseStudy> = {
  cryptavision: {
    problem:
      "A monitoring dashboard often needs scene activity rather than identifiable raw footage. CryptaVision explores separating everyday semantic monitoring from a protected facial-evidence workflow.",
    approach:
      "A GStreamer tee feeds separate inference branches. Stream A extracts YOLOv8 pose keypoints and CLIP scene embeddings; Stream B extracts 128-dimensional FaceVAE latents for TenSEAL CKKS encryption. A custom C++ sink frames both payload types over TCP using a 9-byte CRYP header. The asynchronous receiver routes metadata to FastAPI SSE/WebSocket consumers and ciphertext to an in-memory latent store. The Next.js dashboard shows skeletons, subject counts, inference timings, and frame-driven feed health.",
    flow: [
      "Video / GStreamer",
      "Pose + CLIP / face latents",
      "Native framed TCP",
      "FastAPI ingest",
      "SSE dashboard / latent store",
    ],
    tradeoff:
      "The semantic monitoring path has a documented working local demo. The forensic path still needs shared CKKS key provisioning, trained FaceVAE weights, and reliable face detection on Apple Silicon before end-to-end reconstruction can be validated. Stream A metadata is cleartext in the development transport and can reveal sensitive information. The implementation encrypts latents; it does not implement zero-knowledge proofs or demonstrate cloud-side homomorphic analytics.",
    next: "Unify edge and forensic key contexts, supply compatible trained reconstruction weights, and validate the complete encrypted path before hardening authentication, transport, and persistence.",
    evidence:
      "Reviewed against the current README, GStreamer/AI pipeline, C++ TCP sink, asynchronous receiver, and crypto engine. The repository documents a live semantic dashboard recording and a focused 20-test regression selection on macOS/Apple Silicon. This is a development prototype; those checks do not establish forensic reconstruction or production security.",
    validation: [
      "Repository-documented demo: local video → edge inference → native TCP → FastAPI SSE → visible skeletons, counts, embeddings, and advancing frames.",
      "The documented 20-test selection covers process cleanup, source resolution, segment-based looping, native packet delivery, and semantic-output compatibility; it is not a full-suite claim.",
      "Forensic reconstruction, hardened deployment, and cross-platform performance remain unvalidated in the documented workflow.",
    ],
    sourceFiles: [
      {
        label: "Inference and dual-stream processing",
        path: "pipeline/ai_engine.py",
      },
      {
        label: "Native TCP packet sink",
        path: "plugins/crypta_network_sink.cpp",
      },
      {
        label: "Asynchronous ingest and latent store",
        path: "cloud/tcp_receiver.py",
      },
      { label: "CKKS latent encryption", path: "crypto_engine.py" },
      {
        label: "Local validation and limitations",
        path: "README.md#validation",
      },
    ],
  },
  "rtp-udp-streaming": {
    problem:
      "Real-time transport must keep making progress when datagrams arrive late, out of order, or malformed. This project exposes packet encoding, receiver resource limits, and independent telemetry directly through C++ and POSIX APIs.",
    approach:
      "The transmitter serializes a 12-byte RTP header explicitly and sends up to 1400 payload bytes per UDP datagram with 33 ms pacing. The receiver uses recvmsg with MSG_TRUNC detection, validates RTP lengths and fields, and reorders packets in a bounded 64-packet window. A 500 ms gap timeout and resynchronization policy prevent indefinite waiting. A separate libpcap analyzer filters traffic and parses link-layer, IPv4, UDP, and RTP headers to report loss estimates, payload throughput, and interarrival jitter.",
    flow: [
      "Binary media payload",
      "RTP byte encoding",
      "Paced UDP datagrams",
      "Validate + bounded reorder",
      "Output file / passive telemetry",
    ],
    tradeoff:
      "Bounded buffering favors memory limits and forward progress over recovering missing data; lost or discarded payload cannot be reconstructed. The implementation uses binary chunks with simulated media timing, without codec encoding/decoding, video playback, RTCP, retransmission, congestion control, or SRTP. Telemetry is intended for a single controlled stream; source/SSRC isolation and RTP timestamp rollover handling remain future work.",
    next: "Add per-source/SSRC isolation and timestamp rollover handling, then validate on the target Embedded Linux hardware with controlled loss and reordering.",
    evidence:
      "Reviewed against the current hardened README, RTP header encoder/parser, receiver, and passive analyzer. The README records Release and sanitizer-enabled Debug test passes on macOS/Apple Silicon, plus a byte-identical 2 MiB loopback demo. That loss-free run is not a delivery guarantee, maximum-throughput benchmark, or Embedded Linux validation.",
    validation: [
      "Repository-documented 2 MiB loopback transfer with byte-for-byte input/output comparison and managed process teardown.",
      "Header tests cover exact wire bytes, malformed lengths, extensions, padding, and sequence arithmetic. Loopback/offline-capture tests cover truncation, reordering, duplicates, wraparound, timeouts, shutdown, and parsing.",
      "Release and AddressSanitizer/UndefinedBehaviorSanitizer Debug test passes are documented for macOS/Apple Silicon; board-specific Embedded Linux validation remains a next step.",
    ],
    sourceFiles: [
      {
        label: "Explicit RTP wire format and packet validation",
        path: "include/rtp_header.hpp",
      },
      { label: "Paced UDP transmitter", path: "src/server.cpp" },
      { label: "Bounded jitter-buffer receiver", path: "src/client.cpp" },
      { label: "Passive packet analyzer", path: "src/analyzer.cpp" },
      {
        label: "Loopback and offline capture regressions",
        path: "tests/test_pipeline.py",
      },
    ],
  },
  semanticedge: {
    problem:
      "Video archives contain repetitive footage, yet finding a particular event still requires manual review. Sending every frame to a cloud model adds bandwidth and indexing overhead.",
    approach:
      "The edge pipeline detects and tracks objects with YOLOv8 and ByteTrack. SigLIP embeds candidate frames; a FAISS-backed context firewall compares them with a baseline. Novel events go to Qdrant and become searchable from a React dashboard using natural language.",
    flow: [
      "Video stream",
      "Detect & track",
      "Novelty filter",
      "Qdrant index",
      "Text search",
    ],
    tradeoff:
      "A higher similarity threshold retains more frames, while a lower threshold can discard meaningful but visually familiar events. The threshold needs evaluation against representative footage, not just bandwidth savings.",
    next: "Evaluate event recall alongside ingestion volume across lighting changes, crowded scenes, and camera movement.",
    evidence:
      "The repository documents 768-dimensional SigLIP embeddings, FAISS novelty filtering, and ONNX text/vision encoders. This overview follows that implementation; performance claims are not independently benchmarked here.",
  },
  vstream: {
    problem:
      "A slow vision-language model can stall live video if capture, inference, and display share one blocking path.",
    approach:
      "C++/OpenCV frame differencing selects motion regions. The full frame retains environmental context, with a bounding box marking activity. Background Ollama inference generates descriptions while FastAPI streams frames and telemetry to a Next.js dashboard over WebSockets.",
    flow: [
      "Camera / file",
      "OpenCV filter",
      "Async Ollama",
      "WebSocket",
      "Dashboard",
    ],
    tradeoff:
      "Dropping redundant work keeps the display responsive, but limits how often scenes receive fresh descriptions. A smooth video feed does not imply that the model describes every frame.",
    next: "Measure capture-to-display and capture-to-description latency separately, including behavior under sustained motion.",
    evidence:
      "The current repository describes motion filtering, local Ollama models, inference cooldowns, and description deduplication. It differs from the earlier Qwen-VL/token-pruning résumé description.",
  },
  "webhook-engine": {
    problem:
      "External endpoints fail, time out, or slow down. Delivering events synchronously couples your application to someone else’s availability.",
    approach:
      "A Go API accepts delivery work into Redis queues. Worker pools and channels handle concurrent delivery. Failed attempts use exponential backoff; exhausted deliveries move to a dead-letter queue for investigation.",
    flow: [
      "Accept event",
      "Redis queue",
      "Go workers",
      "Retry / deliver",
      "Dead-letter queue",
    ],
    tradeoff:
      "Retries improve resilience but can produce duplicate deliveries. Idempotency, retry budgets, and visibility into exhausted jobs are essential design considerations, rather than an exactly-once guarantee.",
    next: "Extend failure testing to worker crashes and duplicate events, and measure queue age as well as throughput.",
    evidence:
      "The public repository includes API, queue, worker, and model packages plus a Dockerfile. The delivery architecture is also described in the résumé. The playground is an educational simulation, not a production load test.",
  },
  "adaptive-rag": {
    problem:
      "A single retrieval pass may miss exact identifiers, return irrelevant evidence, or produce an answer unsupported by its sources.",
    approach:
      "LangGraph routes questions to hybrid FAISS/BM25 retrieval, web search, or a direct answer. Retrieved documents are graded, weak queries can be rewritten, and generated answers are checked for grounding and usefulness before returning citations.",
    flow: [
      "Route query",
      "Hybrid retrieve",
      "Grade evidence",
      "Generate",
      "Reflect / retry",
    ],
    tradeoff:
      "Every grading or rewriting step adds latency and model calls. Bounded retries and explicit fallback paths matter as much as the quality of individual prompts.",
    next: "Build a fixed evaluation set containing answerable, ambiguous, and unanswerable questions to compare faithfulness and latency.",
    evidence:
      "The repository provides a Streamlit interface, source inspection, a CLI, and graph-node modules. The local playground illustrates retrieval using keyword scoring, not the full hosted LLM pipeline.",
  },
};
const additional: Record<
  string,
  Pick<CaseStudy, "problem" | "flow" | "tradeoff" | "next">
> = {
  "restricted-zone-monitoring": {
    problem:
      "A single image cannot describe how someone moves through a restricted area. This research project explores whether temporal trajectories add useful information beyond static classifiers.",
    flow: [
      "Video",
      "YOLO / ByteTrack",
      "Trajectory features",
      "Static / temporal models",
      "Track-aware evaluation",
    ],
    tradeoff:
      "Heuristic labels provide a starting point, but are not independently verified ground truth. Track-aware evaluation helps avoid treating correlated frames as independent evidence.",
    next: "Review label quality and compare static and temporal approaches under the same evaluation protocol.",
  },
  contextshield: {
    problem:
      "AI development tools can send more source context than a task needs. A local proxy creates a place to inspect and trim that context before forwarding requests.",
    flow: [
      "Developer tool",
      "FastAPI proxy",
      "AST context trimming",
      "Model provider",
      "SSE / telemetry",
    ],
    tradeoff:
      "Trimming code can reduce context volume but may remove dependencies a model needs. Compatibility with provider request formats and streaming responses also needs careful handling.",
    next: "Compare original and trimmed context on a fixed set of code tasks, measuring answer quality alongside context size.",
  },
  heatwatch: {
    problem:
      "Weather, alerts, and advisories are separate concerns that still need to form a coherent dashboard. HeatWatch explores those boundaries with both monolithic and microservice deployments.",
    flow: [
      "React dashboard",
      "Nginx gateway",
      "Weather / alert services",
      "MongoDB",
      "Dashboard analytics",
    ],
    tradeoff:
      "Service separation introduces deployment and coordination overhead. A monolith is simpler to operate; the repository offers both approaches. Mock-data fallback supports demonstrations but is not live weather evidence.",
    next: "Exercise upstream weather failures and make the provenance and freshness of displayed data clear.",
  },
  "text-to-sql": {
    problem:
      "People may know the business question they want to ask without knowing the database schema or SQL. This prototype connects natural-language questions to inspectable queries and visual results.",
    flow: [
      "Question",
      "Schema retrieval",
      "SQL generation",
      "Parsing / guardrails",
      "Plotly results",
    ],
    tradeoff:
      "Syntactically valid SQL can still answer the wrong question. Guardrails and visible query editing help inspection, but do not establish correctness or production readiness.",
    next: "Evaluate schema ambiguity, unsafe requests, and incorrect joins with a reproducible question set.",
  },
  smartspace: {
    problem:
      "Coworking administration brings together authenticated users, persistent office data, and browser workflows. SmartSpace organizes those concerns in a full-stack application.",
    flow: [
      "Next.js interface",
      "NextAuth identity",
      "Application workflow",
      "Prisma data access",
    ],
    tradeoff:
      "Authentication establishes identity; authorization still needs to be checked for each operation. Data consistency is an important consideration when multiple users act on shared resources.",
    next: "Document supported office workflows and check permission boundaries for each user journey.",
  },
  "study-planner": {
    problem:
      "Study planning is fragmented across tasks, calendars, timers, and notes. Alpha combines these into one application with recurring sessions and productivity views.",
    flow: [
      "Calendar / tasks",
      "JWT authentication",
      "Express API",
      "MongoDB",
      "Productivity analytics",
    ],
    tradeoff:
      "Recurring schedules and timers introduce time-zone and state-management edge cases. Productivity summaries can describe activity, but should not be presented as proof of learning outcomes.",
    next: "Check recurring sessions, interrupted timers, and calendar behavior across time zones.",
  },
  "sql-50": {
    problem:
      "Solving SQL exercises is easier when syntax, execution order, and progress are available together. This study guide packages those learning aids around the SQL 50 plan.",
    flow: [
      "Concept cards",
      "Syntax lookup",
      "Execution-order explanation",
      "Problem tracker",
    ],
    tradeoff:
      "A guided explanation complements practice but does not replace running queries against real data. PostgreSQL-specific syntax also differs from other SQL dialects.",
    next: "Add representative datasets and edge-case explanations alongside the existing learning material.",
  },
  yieldwise: {
    problem:
      "Agricultural planning involves location, soil, crop choices, and costs. YieldWise explores an interface that brings these inputs together for accessible planning demonstrations.",
    flow: [
      "Location / language",
      "Soil guidance",
      "Crop exploration",
      "Cost / profit calculator",
    ],
    tradeoff:
      "The repository uses demonstration data and simulated recommendations. These flows illustrate the product concept and should not be treated as validated agricultural advice or yield predictions.",
    next: "Identify trustworthy data sources and evaluation requirements before replacing the simulated recommendations.",
  },
};
for (const [slug, detail] of Object.entries(additional)) {
  const project = portfolioData.projects.find(
    (project) => project.slug === slug,
  )!;
  details[slug] = {
    ...detail,
    approach: project.description,
    evidence:
      "Based on the public repository inventory and project documentation. Suggested evaluations are future work, not reported benchmark results.",
  };
}
export const projects = portfolioData.projects.map((p) => ({
  ...p,
  caseStudy: details[p.slug] || {
    problem: `This project explores practical workflows in ${p.category.toLowerCase()}.`,
    approach: p.description,
    flow: [
      p.techStack[0],
      p.techStack[1],
      p.techStack[2],
      "User workflow",
    ].filter(Boolean),
    tradeoff:
      "The public repository is the source of implementation detail. Deployment readiness, benchmark results, and individual team contributions require further documentation.",
    next: "Document representative user journeys, limitations, and reproducible checks as the project develops.",
    evidence:
      "Overview based on the public repository inventory and documentation. No unverified performance or ownership claims are included.",
  },
}));
export const notes = [
  {
    slug: "separating-monitoring-from-evidence",
    title: "Separate monitoring from evidence",
    subtitle:
      "What two video streams change about the data a dashboard needs to see.",
    tag: "Edge AI / Privacy",
    minutes: 4,
    project: "cryptavision",
    sections: [
      [
        "Start with the operator’s question",
        "A monitoring view can answer how many people are present or where they are moving using pose skeletons and counts. CryptaVision’s semantic branch produces YOLOv8 keypoints and CLIP scene embeddings at the edge, then renders metadata in a Next.js dashboard. Keeping raw frames out of that canvas changes the information exposed in the primary monitoring workflow.",
      ],
      [
        "Give each stream its own job",
        "The GStreamer tee feeds separate queued inference branches. Stream A carries semantic JSON; Stream B prepares face latents for TenSEAL CKKS encryption. Both use the native TCP sink, whose 9-byte header identifies the magic value, payload length, and type. The cloud receiver reads framed payloads before routing metadata to subscribers and ciphertext to the latent store.",
      ],
      [
        "Encryption has a scope",
        "Encrypted latents protect those numeric values, while cleartext pose, scene embeddings, and face metadata can still reveal information. The repository name includes Zero-Knowledge, but the implementation does not use a zero-knowledge proof protocol. It also does not demonstrate cloud-side homomorphic computation. Those distinctions define the current privacy boundary more precisely than a broad security label.",
      ],
      [
        "Validate the whole evidence path",
        "The local semantic dashboard is documented working. Recovering meaningful facial evidence still needs matching edge/forensic CKKS contexts, trained FaceVAE weights, and a reliable detector on the selected device. A functioning monitoring interface is therefore one validation milestone; reconstruction and production hardening remain separate work.",
      ],
    ],
  },
  {
    slug: "a-jitter-buffer-needs-a-bound",
    title: "A jitter buffer needs a bound",
    subtitle:
      "How a UDP receiver chooses between waiting, memory, and forward progress.",
    tag: "C++ / Networking",
    minutes: 4,
    project: "rtp-udp-streaming",
    sections: [
      [
        "Put bytes on the wire deliberately",
        "The RTP transmitter encodes its 12-byte fixed header with shifts and masks rather than sending a C++ struct. This makes packet layout independent of host padding, bitfield allocation, and endianness. Each datagram carries up to 1400 binary payload bytes; timestamps and pacing simulate media timing rather than a codec-specific playback pipeline.",
      ],
      [
        "Treat each received datagram as untrusted input",
        "The receiver uses recvmsg to detect truncation before parsing RTP. The shared parser checks the version, configured payload type, CSRC lengths, extension lengths, and padding. A valid fixed header does not by itself establish that the rest of the packet fits inside the received buffer.",
      ],
      [
        "Choose a policy for gaps",
        "The receiver writes contiguous payload immediately and retains future packets in a 64-packet reorder window. A missing sequence is skipped after 500 ms. A packet beyond the configured window clears pending data and resynchronizes the receiver. These limits bound memory and waiting, while accepting that discarded bytes cannot be recovered without an additional reliability mechanism.",
      ],
      [
        "Observe the network separately",
        "The libpcap analyzer watches traffic independently of the sender and receiver. It reports sequence-gap loss estimates, payload throughput, and interarrival jitter. Duplicate arrivals and mixed SSRCs can distort its simple single-stream model; offline throughput reflects replay processing speed. The documented loss-free loopback comparison demonstrates that run’s byte integrity, not a general UDP delivery guarantee.",
      ],
    ],
  },

  {
    slug: "video-has-two-clocks",
    title: "A live video system has two clocks",
    subtitle:
      "Why smooth playback and fresh model output are different engineering problems.",
    tag: "Computer vision",
    minutes: 4,
    project: "vstream",
    sections: [
      [
        "Capture and interpretation move at different speeds",
        "A camera produces a continuous stream. A vision-language model performs much heavier work per request. VStream’s documented design separates those two paths: video can continue to arrive while a description is being generated. This distinction is central to understanding what “real-time” means in an AI video application.",
      ],
      [
        "Filter before expensive inference",
        "The OpenCV motion filter uses frame differencing to identify activity. A bounding box highlights the region while preserving the full scene. That reduces unnecessary model calls without forcing the model to interpret an isolated crop. Motion detection still has limitations: lighting shifts and camera motion can generate activity that is not a meaningful event.",
      ],
      [
        "Keep the queue bounded",
        "The repository uses a busy flag and a cooldown to avoid piling up inference requests. This favors recent observations over processing every frame. The tradeoff is explicit: some intermediate events may not receive a separate model description. A bounded queue is a product decision about freshness, not just a speed trick.",
      ],
      [
        "Measure both clocks",
        "A useful evaluation would report capture-to-display latency separately from capture-to-description latency. It should also count dropped work, repeated descriptions, and behavior during continuous motion. These are suggested evaluation dimensions, not additional benchmark results for VStream.",
      ],
    ],
  },
  {
    slug: "retrieval-needs-an-exit",
    title: "A retrieval loop needs an exit",
    subtitle:
      "Routing, evidence checks, and the cost of asking a model to try again.",
    tag: "Agentic RAG",
    minutes: 4,
    project: "adaptive-rag",
    sections: [
      [
        "Retrieval is a decision",
        "The adaptive RAG repository routes between local retrieval, web search, and direct answers. Questions do not all need the same path. An exact technical identifier benefits from lexical matching, while a paraphrased concept may benefit from semantic retrieval. Combining FAISS and BM25 gives the system two different ways to find evidence.",
      ],
      [
        "Relevant documents are not the same as grounded answers",
        "Document grading asks whether evidence belongs in the context. Answer reflection asks whether the output is supported by that context and addresses the question. These checks occur at different points and catch different classes of failure. Neither is a proof that an answer is correct.",
      ],
      [
        "Recovery must be bounded",
        "Query rewriting can recover a missed concept, but a loop without limits may consume time and tokens without improving evidence. The repository documents retry limits and web-search fallback. An explicit “insufficient evidence” outcome is preferable to manufacturing a confident answer.",
      ],
      [
        "Make the path inspectable",
        "The Streamlit interface exposes graph transitions and retrieved sources. This gives a reviewer something concrete to inspect when an answer is weak. A future evaluation should compare quality and latency across a fixed set of questions rather than judge the system on one impressive example.",
      ],
    ],
  },
  {
    slug: "retries-are-a-policy",
    title: "Retries are a policy, not a loop",
    subtitle:
      "What a webhook system must decide after the first delivery fails.",
    tag: "Backend systems",
    minutes: 3,
    project: "webhook-engine",
    sections: [
      [
        "A queue creates breathing room",
        "The webhook project separates acceptance from delivery with Redis and Go workers. This lets the application accept work without waiting for every external destination. It also introduces a responsibility: queued work needs a lifecycle that operators can understand.",
      ],
      [
        "Backoff changes the shape of failure",
        "Immediate retries can amplify an outage. Exponential backoff spaces attempts farther apart, giving the destination time to recover. Production designs often consider jitter too, to avoid synchronized clients retrying at once. Jitter is a general extension to consider, not an implementation claim about this repository.",
      ],
      [
        "Exhaustion is a real state",
        "A dead-letter queue makes exhausted work visible rather than retrying forever. Investigation and replay need care: the receiver may already have processed an earlier attempt even if the sender never received its acknowledgement. Idempotency is therefore a separate concern from retries.",
      ],
      [
        "Try the failure path",
        "The portfolio’s browser simulation lets you change destination behavior, step through retries, and replay a dead-lettered event. Its virtual clock teaches the delivery policy; it does not measure the throughput of the Go service.",
      ],
    ],
  },
];
