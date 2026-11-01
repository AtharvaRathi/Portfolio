export type Delivery = {
  attempt: number;
  time: number;
  state: "queued" | "retry" | "delivered" | "dead-letter";
  log: string[];
};
export const newDelivery = (): Delivery => ({
  attempt: 0,
  time: 0,
  state: "queued",
  log: ["0s · Event accepted into the queue"],
});
export function advanceDelivery(job: Delivery, failures: number): Delivery {
  if (job.state === "delivered" || job.state === "dead-letter") return job;
  const attempt = job.attempt + 1;
  const time = job.time + (job.attempt ? 2 ** (job.attempt - 1) : 0);
  const state =
    attempt > failures ? "delivered" : attempt >= 4 ? "dead-letter" : "retry";
  return {
    attempt,
    time,
    state,
    log: [
      ...job.log,
      `${time}s · Attempt ${attempt}: ${state === "delivered" ? "200 OK — delivered" : state === "dead-letter" ? "503 — retry budget exhausted; moved to DLQ" : `503 — retry in ${2 ** (attempt - 1)}s`}`,
    ],
  };
}
export const sampleDocs = [
  {
    id: "DOC-01",
    title: "Delivery policy",
    text: "Webhook delivery retries failed requests with exponential backoff. After four attempts, exhausted events enter a dead-letter queue for inspection and replay.",
  },
  {
    id: "DOC-02",
    title: "Video processing",
    text: "VStream uses OpenCV motion detection to filter video frames. Ollama generates scene descriptions asynchronously. WebSockets stream video and telemetry to a dashboard.",
  },
  {
    id: "DOC-03",
    title: "Semantic retrieval",
    text: "SemanticEdge embeds video frames with SigLIP and stores novel events in Qdrant. Text queries retrieve visually related events through vector similarity.",
  },
];
const stop = new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "in",
  "to",
  "of",
  "is",
  "it",
  "how",
  "what",
  "does",
  "do",
  "with",
  "for",
  "are",
  "can",
  "me",
  "about",
]);
export function retrieve(query: string) {
  const terms = Array.from(
    new Set(query.toLowerCase().match(/[a-z0-9]+/g) || []),
  ).filter((t) => !stop.has(t));
  return sampleDocs
    .map((d) => ({
      ...d,
      score: terms.filter((t) =>
        (d.title + " " + d.text).toLowerCase().includes(t),
      ).length,
    }))
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score);
}
export const codeSamples = {
  sql: {
    label: "SQL query",
    unsafe:
      'query = "SELECT * FROM users WHERE name = \'" + name + "\'"\ncursor.execute(query)',
    fixed: 'cursor.execute("SELECT * FROM users WHERE name = %s", (name,))',
    issue: "String concatenation puts untrusted input into SQL syntax.",
    action:
      "Use parameterized queries. Placeholder syntax depends on your database driver.",
  },
  shell: {
    label: "Shell command",
    unsafe: 'subprocess.run("convert " + filename, shell=True)',
    fixed: 'subprocess.run(["convert", filename], check=True)',
    issue: "shell=True lets the shell interpret input as command syntax.",
    action:
      "Pass an argument list without a shell, and validate accepted filenames and options.",
  },
  eval: {
    label: "Dynamic evaluation",
    unsafe: "result = eval(user_input)",
    fixed: "result = json.loads(user_input)",
    issue: "Evaluating user-controlled text can execute arbitrary Python code.",
    action:
      "If the expected input is JSON, parse it as JSON and validate its schema.",
  },
};
