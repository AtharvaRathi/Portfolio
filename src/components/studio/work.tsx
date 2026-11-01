"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import { mentionsTechnology } from "@/lib/evidence";
import { projects } from "@/data/editorial";
import { AskButton } from "./shell";
export function WorkGallery() {
  const [filter, setFilter] = useState("Selected");
  const [all, setAll] = useState(false);
  const groups = ["Selected", "AI & ML", "Computer vision", "Backend", "All"];
  const visible = projects
    .filter(
      (p) =>
        filter === "Selected" ||
        filter === "All" ||
        (filter === "Computer vision"
          ? /vision|video|zone|heatwatch/i.test(p.name)
          : filter === "AI & ML"
            ? /rag|sql|contextshield|semantic|vstream|yield/i.test(p.slug)
            : /webhook|smartspace|planner|sql/i.test(p.slug)),
    )
    .slice(0, all || filter !== "Selected" ? 12 : 4);
  return (
    <section id="work" className="section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2>
            Ideas made
            <br />
            <span className="muted">into working systems.</span>
          </h2>
        </div>
        <p>
          From understanding video to delivering events reliably. Explore the
          architecture, decisions, and source behind each build.
        </p>
      </div>
      <div className="filter-row" aria-label="Filter projects">
        {groups.map((g) => (
          <button
            key={g}
            aria-pressed={filter === g}
            onClick={() => setFilter(g)}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((p) => (
          <article className="project-card" key={p.slug}>
            <Link className="project-image" href={`/projects/${p.slug}`}>
              <Image
                src={p.image}
                alt=""
                fill
                unoptimized
                sizes="(max-width: 700px) 100vw, 50vw"
              />
              <span className="image-shade" />
              <span className="project-number">
                BUILD / {String(projects.indexOf(p) + 1).padStart(2, "0")}
              </span>
              <span className="image-title">{p.name.split("—")[0]}</span>
              <span className="project-arrow">
                <ArrowUpRight />
              </span>
              <span className="stock-label">Illustrative imagery</span>
            </Link>
            <div className="project-copy">
              <p className="eyebrow">{p.category}</p>
              <h3>
                <Link href={`/projects/${p.slug}`}>{p.name}</Link>
              </h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.techStack.slice(0, 4).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="card-actions">
                <Link href={`/projects/${p.slug}`}>
                  Explore the build <ArrowRight size={15} />
                </Link>
                <AskButton
                  project={p.slug}
                  question={`Explain ${p.name} and its architecture.`}
                  className="text-button"
                >
                  <Sparkles size={14} />
                  Ask AI
                </AskButton>
              </div>
            </div>
          </article>
        ))}
      </div>
      {filter === "Selected" && (
        <button className="secondary show-all" onClick={() => setAll(!all)}>
          {all
            ? "Show selected projects"
            : `Explore all ${projects.length} projects`}
          <ArrowRight size={16} />
        </button>
      )}
    </section>
  );
}
export function Skills() {
  const skills = [
    "Python",
    "C++",
    "Go",
    "FastAPI",
    "React",
    "Next.js",
    "YOLOv8",
    "Qdrant",
    "Redis",
    "Docker",
    "PostgreSQL",
    "LangGraph",
  ];
  const [selected, setSelected] = useState("Python");
  const matches = projects.filter((p) =>
    p.techStack.some((t) => mentionsTechnology(t, selected)),
  );
  return (
    <section id="skills" className="section shell skills-section">
      <div>
        <p className="eyebrow">04 / TOOLKIT, WITH EVIDENCE</p>
        <h2>
          Skills you can
          <br />
          <span className="muted">trace to a build.</span>
        </h2>
        <p>Choose a technology to see where I’ve used it.</p>
        <div className="skill-buttons">
          {skills.map((s) => (
            <button
              key={s}
              aria-pressed={selected === s}
              onClick={() => setSelected(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="skill-results" aria-live="polite">
        <p className="eyebrow">{selected} / PROJECT EVIDENCE</p>
        {matches.length ? (
          matches.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`}>
              <span>{p.name}</span>
              <ArrowUpRight size={18} />
            </Link>
          ))
        ) : (
          <p>
            No explicit stack match in the current project inventory. Ask me
            about this technology.
          </p>
        )}
      </div>
    </section>
  );
}
export function RecruiterTools() {
  const [jd, setJd] = useState("");
  const [checked, setChecked] = useState(false);
  const terms = [
    "Python",
    "C++",
    "Go",
    "FastAPI",
    "React",
    "Next.js",
    "Redis",
    "Docker",
    "PostgreSQL",
    "LangGraph",
    "Qdrant",
    "Kubernetes",
    "AWS",
    "TensorFlow",
    "PyTorch",
    "Java",
    "GraphQL",
  ];
  const requested = terms.filter((t) => mentionsTechnology(jd, t));
  return (
    <section id="recruiters" className="section recruiter-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">06 / THE RECRUITER EDITION</p>
            <h2>
              The useful details.
              <br />
              <span className="muted">All in one place.</span>
            </h2>
          </div>
          <a
            className="primary"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View résumé <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="recruiter-grid">
          <div className="facts">
            <div>
              <span>FOCUS, IN ORDER</span>
              <p>AI / ML → Computer vision → Backend engineering</p>
            </div>
            <div>
              <span>LOOKING FOR</span>
              <p>Internships & full-time roles · Onsite preferred</p>
            </div>
            <div>
              <span>LOCATION</span>
              <p>Mumbai, India · Ready to relocate</p>
            </div>
            <div>
              <span>EDUCATION</span>
              <p>
                B.Tech, Information Technology · Honours in AI
                <br />
                K.J. Somaiya College of Engineering
                <br />
                Aug 2023 – Apr 2027 (expected)
              </p>
            </div>
            <a className="text-button" href="mailto:atharvarathi09@gmail.com">
              Start a conversation <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="fit-tool">
            <span className="badge">Private · Runs in your browser</span>
            <h3>Connect a role to the evidence.</h3>
            <p>
              Paste a job description to find matching technologies and
              projects. This is a keyword guide, not an assessment or match
              score.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setChecked(true);
              }}
            >
              <label className="sr-only" htmlFor="job-description">
                Job description
              </label>
              <textarea
                id="job-description"
                maxLength={12000}
                rows={4}
                value={jd}
                onChange={(e) => {
                  setJd(e.target.value);
                  setChecked(false);
                }}
                placeholder="Paste the role’s requirements…"
              />
              <button className="primary" disabled={!jd.trim()}>
                Find project evidence <ArrowRight size={16} />
              </button>
            </form>
            {checked && (
              <div className="fit-results" aria-live="polite">
                {requested.length ? (
                  requested.map((term) => {
                    const evidence = projects.filter((p) =>
                      p.techStack.some((s) => mentionsTechnology(s, term)),
                    );
                    return (
                      <div key={term}>
                        <strong>{term}</strong>
                        {evidence.length ? (
                          evidence.slice(0, 2).map((p) => (
                            <Link key={p.slug} href={`/projects/${p.slug}`}>
                              {p.name} ↗
                            </Link>
                          ))
                        ) : (
                          <p>No explicit project evidence in this portfolio.</p>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <p>
                    No recognized technology keywords. Try a description with
                    Python, Go, FastAPI, or React.
                  </p>
                )}
                <small>
                  Coverage is limited to named technologies. Seniority, depth,
                  and other requirements need a conversation.
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
