const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const assert = require("node:assert/strict");
const ts = require("typescript");
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, ...args) {
  return resolve.call(
    this,
    request.startsWith("@/")
      ? path.resolve(__dirname, "../src", request.slice(2))
      : request,
    ...args,
  );
};
require.extensions[".ts"] = (module, filename) =>
  module._compile(
    ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
    }).outputText,
    filename,
  );
const {
  advanceDelivery,
  newDelivery,
  retrieve,
} = require("../src/lib/playground.ts");
const { answerFromPortfolio } = require("../src/lib/assistant.ts");
const { projects, notes } = require("../src/data/editorial.ts");
assert.equal(advanceDelivery(newDelivery(), 0).state, "delivered");
let job = newDelivery();
for (let i = 0; i < 3; i++) job = advanceDelivery(job, 2);
assert.equal(job.state, "delivered");
assert.equal(job.time, 3);
job = newDelivery();
for (let i = 0; i < 4; i++) job = advanceDelivery(job, 99);
assert.equal(job.state, "dead-letter");
assert.equal(job.time, 7);
assert.deepEqual(advanceDelivery(job, 0), job);
assert.equal(retrieve("webhook retries")[0].id, "DOC-01");
assert.equal(retrieve("unicorn astronomy").length, 0);
assert.equal(retrieve("   ").length, 0);
assert.match(
  answerFromPortfolio("Give me the quick intro").answer,
  /April 2027/,
);
assert.match(
  answerFromPortfolio("What roles are you looking for?").answer,
  /onsite/i,
);
assert.match(
  answerFromPortfolio("Explain VStream architecture").answer,
  /Ollama/,
);
assert.match(
  answerFromPortfolio("What are its tradeoffs?", "vstream").answer,
  /fresh/i,
);
assert.match(
  answerFromPortfolio("What is your salary?").answer,
  /verified answer/,
);
assert.equal(new Set(projects.map((p) => p.slug)).size, projects.length);
for (const n of notes) assert.ok(projects.some((p) => p.slug === n.project));
console.log(
  "Core checks passed: delivery recovery/exhaustion, retrieval/no-evidence, assistant context, content routes.",
);
const { mentionsTechnology } = require("../src/lib/evidence.ts");
assert.equal(mentionsTechnology("MongoDB", "Go"), false);
assert.equal(mentionsTechnology("Go / Redis", "Go"), true);
assert.equal(mentionsTechnology("C++ / FAISS", "C++"), true);
assert.equal(mentionsTechnology("JavaScript", "Java"), false);
assert.equal(mentionsTechnology("YOLOv8", "YOLO"), false);
console.log("Technology evidence boundary checks passed.");

// New projects must remain discoverable in every relevant portfolio surface.
const { projectsForFilter } = require("../src/lib/projects.ts");
const { buildSystemPrompt } = require("../src/lib/portfolio-context.ts");
for (const slug of ["cryptavision", "rtp-udp-streaming"]) {
  assert.ok(
    projects.some((p) => p.slug === slug && p.caseStudy.validation.length),
  );
  assert.ok(projectsForFilter("Selected").some((p) => p.slug === slug));
  assert.ok(
    projectsForFilter("Systems & networking").some((p) => p.slug === slug),
  );
  assert.ok(projectsForFilter("All").some((p) => p.slug === slug));
  assert.ok(notes.some((n) => n.project === slug));
}
assert.equal(projectsForFilter("All").length, 14);
assert.equal(projectsForFilter("Selected", true).length, projects.length);
assert.ok(
  projectsForFilter("Computer vision").some((p) => p.slug === "cryptavision"),
);
assert.ok(
  !projectsForFilter("Computer vision").some(
    (p) => p.slug === "rtp-udp-streaming",
  ),
);
assert.ok(
  !projectsForFilter("Computer vision").some((p) => p.slug === "heatwatch"),
);
for (const question of [
  "Explain Custom RTP UDP Video Streaming Server",
  "How does the RTP/UDP server work?",
  "Tell me about the packet analyzer",
]) {
  const response = answerFromPortfolio(question);
  assert.ok(
    response.sources.some((s) => s.href === "/projects/rtp-udp-streaming"),
  );
  assert.match(response.answer, /libpcap/);
}
assert.match(
  answerFromPortfolio("Is CryptaVision production ready?").answer,
  /does not implement zero-knowledge proofs/,
);
assert.match(
  answerFromPortfolio("Can CryptaVision reconstruct faces?").answer,
  /trained FaceVAE weights/,
);
assert.match(
  answerFromPortfolio("Does the RTP/UDP project support video playback?")
    .answer,
  /without codec/,
);
assert.match(
  answerFromPortfolio("Explain its architecture", undefined, [
    { role: "user", content: "Tell me about CryptaVision" },
  ]).answer,
  /9-byte/,
);
assert.match(
  answerFromPortfolio("What are your latest projects?").answer,
  /CryptaVision/,
);
assert.match(
  answerFromPortfolio("What are your latest projects?").answer,
  /RTP/,
);
const prompt = buildSystemPrompt();
assert.match(prompt, /CryptaVision/);
assert.match(prompt, /64-packet/);
assert.match(prompt, /zero-knowledge proofs/);
console.log(
  "New project discovery, categories, aliases, scope, conversation, and model-context checks passed.",
);
