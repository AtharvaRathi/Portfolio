import { portfolioData } from "./portfolio";

export const slugs = [
  "semanticedge",
  "vstream",
  "webhook-engine",
  "adaptive-rag",
  "restricted-zone-monitoring",
  "contextshield",
  "heatwatch",
  "text-to-sql",
  "smartspace",
  "study-planner",
  "sql-50",
  "yieldwise",
];
export type CaseStudy = {
  problem: string;
  approach: string;
  flow: string[];
  tradeoff: string;
  next: string;
  evidence: string;
};
const details: Record<string, CaseStudy> = {
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
  const project = portfolioData.projects[slugs.indexOf(slug)];
  details[slug] = {
    ...detail,
    approach: project.description,
    evidence:
      "Based on the public repository inventory and project documentation. Suggested evaluations are future work, not reported benchmark results.",
  };
}
export const projects = portfolioData.projects.map((p, i) => ({
  ...p,
  slug: slugs[i],
  caseStudy: details[slugs[i]] || {
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
