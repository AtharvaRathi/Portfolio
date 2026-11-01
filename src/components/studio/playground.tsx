"use client";
import { useState } from "react";
import {
  ArrowRight,
  RotateCcw,
  Play,
  Check,
  Search,
  ShieldCheck,
} from "lucide-react";
import {
  advanceDelivery,
  newDelivery,
  retrieve,
  sampleDocs,
  codeSamples,
} from "@/lib/playground";

export function Playground() {
  const [tab, setTab] = useState("webhooks");
  const [job, setJob] = useState(newDelivery);
  const [failures, setFailures] = useState(2);
  const [query, setQuery] = useState(
    "What happens when webhook delivery fails?",
  );
  const [results, setResults] = useState<ReturnType<typeof retrieve> | null>(
    null,
  );
  const [sample, setSample] = useState<keyof typeof codeSamples>("sql");
  const [scanned, setScanned] = useState(false);
  return (
    <section id="playground" className="section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / ENGINEERING PLAYGROUND</p>
          <h2>
            Understand it.
            <br />
            <span className="muted">Then break it.</span>
          </h2>
        </div>
        <p>
          Small, hands-on explorations of the ideas behind my work. Change an
          input. Follow what happens.
        </p>
      </div>
      <div className="lab">
        <div className="lab-tabs" role="tablist" aria-label="Engineering demos">
          {[
            ["webhooks", "01", "Reliable delivery"],
            ["retrieval", "02", "Evidence retrieval"],
            ["security", "03", "Safer code"],
          ].map(([id, n, label]) => (
            <button
              key={id}
              role="tab"
              id={`tab-${id}`}
              aria-controls="lab-panel"
              aria-selected={tab === id}
              tabIndex={tab === id ? 0 : -1}
              onKeyDown={(e) => {
                const ids = ["webhooks", "retrieval", "security"];
                let next = ids.indexOf(id);
                if (e.key === "ArrowRight") next = (next + 1) % 3;
                else if (e.key === "ArrowLeft") next = (next + 2) % 3;
                else if (e.key === "Home") next = 0;
                else if (e.key === "End") next = 2;
                else return;
                e.preventDefault();
                setTab(ids[next]);
                document.getElementById(`tab-${ids[next]}`)?.focus();
              }}
              onClick={() => setTab(id)}
            >
              <span>{n}</span>
              {label}
            </button>
          ))}
        </div>
        <div
          id="lab-panel"
          role="tabpanel"
          aria-labelledby={`tab-${tab}`}
          className="lab-body"
        >
          {tab === "webhooks" && (
            <>
              <div>
                <span className="badge">Interactive simulation</span>
                <h3>A failed request isn’t the end.</h3>
                <p>
                  Walk an event through a queue, retries, and a dead-letter
                  queue. Time advances virtually; no requests leave your
                  browser.
                </p>
                <label className="field-label" htmlFor="failures">
                  Destination behavior
                </label>
                <select
                  id="failures"
                  value={failures}
                  disabled={job.attempt > 0}
                  onChange={(e) => setFailures(Number(e.target.value))}
                >
                  <option value={0}>Healthy — deliver immediately</option>
                  <option value={2}>Recover after two failures</option>
                  <option value={99}>Always fail — exhaust retries</option>
                </select>
                <div className="button-row">
                  <button
                    className="primary"
                    disabled={["delivered", "dead-letter"].includes(job.state)}
                    onClick={() => setJob((j) => advanceDelivery(j, failures))}
                  >
                    <Play size={15} />
                    {job.attempt ? "Advance retry" : "Dispatch event"}
                  </button>
                  <button
                    className="secondary"
                    onClick={() => setJob(newDelivery())}
                  >
                    <RotateCcw size={15} />
                    Reset
                  </button>
                </div>
                {job.state === "dead-letter" && (
                  <button
                    className="text-button"
                    onClick={() => {
                      setFailures(0);
                      setJob({
                        ...newDelivery(),
                        log: [
                          "0s · Operator replayed event; destination recovered",
                        ],
                      });
                    }}
                  >
                    Recover destination & replay <ArrowRight size={15} />
                  </button>
                )}
              </div>
              <div className="terminal-card">
                <div className="terminal-head">
                  <span>delivery.trace</span>
                  <span
                    className={`status ${job.state === "delivered" ? "success" : ""}`}
                  >
                    {job.state}
                  </span>
                </div>
                <div className="flow-mini">
                  <span>QUEUE</span>
                  <ArrowRight size={14} />
                  <span>WORKER</span>
                  <ArrowRight size={14} />
                  <span>
                    {job.state === "dead-letter" ? "DLQ" : "ENDPOINT"}
                  </span>
                </div>
                <ol aria-live="polite" className="trace">
                  {job.log.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ol>
                <div className="terminal-foot">
                  Attempt {job.attempt}/4 <span>Virtual time {job.time}s</span>
                </div>
              </div>
            </>
          )}
          {tab === "retrieval" && (
            <>
              <div>
                <span className="badge">Local keyword retrieval</span>
                <h3>See the evidence behind an answer.</h3>
                <p>
                  This free demonstration ranks three sample documents by
                  keyword overlap. It illustrates retrieval and source
                  inspection; it does not run embeddings or an LLM.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setResults(retrieve(query));
                  }}
                >
                  <label htmlFor="retrieval-query" className="field-label">
                    Ask the sample collection
                  </label>
                  <input
                    id="retrieval-query"
                    value={query}
                    maxLength={300}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button className="primary" disabled={!query.trim()}>
                    <Search size={16} />
                    Retrieve evidence
                  </button>
                </form>
              </div>
              <div className="evidence-results" aria-live="polite">
                {results === null ? (
                  <>
                    <p className="eyebrow">3 DOCUMENTS / READY TO SEARCH</p>
                    {sampleDocs.map((d) => (
                      <details key={d.id}>
                        <summary>
                          {d.id} · {d.title}
                        </summary>
                        <p>{d.text}</p>
                      </details>
                    ))}
                  </>
                ) : results.length ? (
                  <>
                    <p className="eyebrow">RETRIEVE → RANK → INSPECT</p>
                    <h4>Best matching passage</h4>
                    <p>{results[0].text}</p>
                    {results.map((d) => (
                      <details key={d.id}>
                        <summary>
                          {d.id} · {d.title} · {d.score} matched terms
                        </summary>
                        <p>{d.text}</p>
                      </details>
                    ))}
                  </>
                ) : (
                  <p>
                    No supporting evidence in this collection. Try “video”,
                    “webhook retries”, or “semantic search”.
                  </p>
                )}
              </div>
            </>
          )}
          {tab === "security" && (
            <>
              <div>
                <span className="badge">Curated learning examples</span>
                <h3>Small patterns. Significant consequences.</h3>
                <p>
                  Inspect common Python security pitfalls and safer
                  alternatives. This is a rule-based teaching demo, not a
                  security audit or an AI scanner.
                </p>
                <label className="field-label" htmlFor="code-sample">
                  Choose a pattern
                </label>
                <select
                  id="code-sample"
                  value={sample}
                  onChange={(e) => {
                    setSample(e.target.value as keyof typeof codeSamples);
                    setScanned(false);
                  }}
                >
                  {Object.entries(codeSamples).map(([key, s]) => (
                    <option key={key} value={key}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <button className="primary" onClick={() => setScanned(true)}>
                  <ShieldCheck size={16} />
                  Inspect pattern
                </button>
              </div>
              <div className="code-example">
                <p className="eyebrow">PYTHON / BEFORE</p>
                <pre>{codeSamples[sample].unsafe}</pre>
                {scanned && (
                  <div aria-live="polite">
                    <p>{codeSamples[sample].issue}</p>
                    <p className="eyebrow">
                      <Check size={14} /> SAFER ALTERNATIVE
                    </p>
                    <pre>{codeSamples[sample].fixed}</pre>
                    <p className="small">{codeSamples[sample].action}</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
