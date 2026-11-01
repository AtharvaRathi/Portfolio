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
assert.equal(new Set(projects.map((p) => p.slug)).size, 12);
for (const n of notes) assert.ok(projects.some((p) => p.slug === n.project));
console.log(
  "Core checks passed: delivery recovery/exhaustion, retrieval/no-evidence, assistant context, content routes.",
);
const {mentionsTechnology}=require('../src/lib/evidence.ts');
assert.equal(mentionsTechnology('MongoDB','Go'),false);
assert.equal(mentionsTechnology('Go / Redis','Go'),true);
assert.equal(mentionsTechnology('C++ / FAISS','C++'),true);
assert.equal(mentionsTechnology('JavaScript','Java'),false);
assert.equal(mentionsTechnology('YOLOv8','YOLO'),false);
console.log('Technology evidence boundary checks passed.');
