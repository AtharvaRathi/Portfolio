import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  ScanLine,
  Network,
  Workflow,
} from "lucide-react";
import { portfolioData as data } from "@/data/portfolio";
import { notes } from "@/data/editorial";
import { AskBox } from "@/components/studio/shell";
import { WorkGallery, Skills, RecruiterTools } from "@/components/studio/work";
import { Playground } from "@/components/studio/playground";
export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  widget?: string | null;
}
export default function Home() {
  return (
    <main id="main">
      <section className="hero shell">
        <div className="hero-intro">
          <p className="availability">
            <span />
            Open to internships & full-time roles
          </p>
          <h1>
            Engineering intelligence.
            <br />
            <span>Into useful things.</span>
          </h1>
          <div className="hero-bio">
            <Image
              src={data.avatar}
              width={56}
              height={56}
              alt="Atharva Rathi"
              priority
            />
            <p>
              I’m <strong>Atharva</strong>, a software developer building AI,
              <br className="desktop-break" /> computer vision, and reliable
              backend systems.
            </p>
          </div>
          <AskBox />
          <div className="hero-bottom">
            <a href="#work">
              Or explore my work <ArrowDown size={15} />
            </a>
            <span>MUMBAI, IN · OPEN TO RELOCATION</span>
          </div>
        </div>
        <div
          className="hero-visual"
          aria-label="Engineering focus: perceive, reason, deliver"
        >
          <div className="visual-top">
            <span>THE ENGINEERING THREAD</span>
            <span>01—03</span>
          </div>
          <div className="system-node">
            <ScanLine />
            <div>
              <span>01 / PERCEIVE</span>
              <h3>Make sense of the scene.</h3>
              <p>Computer vision · Edge intelligence</p>
            </div>
          </div>
          <div className="node-connector" />
          <div className="system-node">
            <Network />
            <div>
              <span>02 / REASON</span>
              <h3>Find evidence. Build context.</h3>
              <p>Retrieval · Language models</p>
            </div>
          </div>
          <div className="node-connector" />
          <div className="system-node">
            <Workflow />
            <div>
              <span>03 / DELIVER</span>
              <h3>Make the system dependable.</h3>
              <p>APIs · Queues · Data pipelines</p>
            </div>
          </div>
          <div className="visual-footer">
            <span className="online-dot" />
            Curiosity → Code → Something useful
          </div>
        </div>
      </section>
      <div className="focus-strip">
        <div className="shell">
          <span>AI / ML ENGINEERING</span>
          <span>COMPUTER VISION</span>
          <span>BACKEND SYSTEMS</span>
          <span>HONOURS IN AI · CLASS OF 2027</span>
        </div>
      </div>
      <WorkGallery />
      <Playground />
      <section id="experience" className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / EXPERIENCE</p>
            <h2>
              Learning by building.
              <br />
              <span className="muted">In real environments.</span>
            </h2>
          </div>
          <p>
            Three internships across document intelligence, enterprise
            knowledge, and commerce.
          </p>
        </div>
        <div className="timeline">
          {data.experience.map((e, i) => (
            <article key={e.company}>
              <div>
                <span className="timeline-index">0{i + 1}</span>
                <p className="eyebrow">{e.period}</p>
              </div>
              <div>
                <h3>{e.company}</h3>
                <p className="role-title">{e.title}</p>
              </div>
              <ul>
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <details className="certifications">
          <summary>
            Continuing the learning / {data.certifications.length}{" "}
            certifications & courses <span>+</span>
          </summary>
          <div>
            {data.certifications.map((c) => (
              <article key={c.name}>
                <h4>{c.name}</h4>
                <p>
                  {c.issuer} · {c.platform}
                </p>
                <span className="badge">{c.status}</span>
              </article>
            ))}
          </div>
        </details>
      </section>
      <Skills />
      <section id="notes" className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / ENGINEERING NOTES</p>
            <h2>
              The thinking
              <br />
              <span className="muted">behind the code.</span>
            </h2>
          </div>
          <p>
            Architecture notes grounded in my repositories. Decisions,
            limitations, and questions worth exploring.
          </p>
        </div>
        <div className="notes-grid">
          {notes.map((n, i) => (
            <Link className="note-card" href={`/notes/${n.slug}`} key={n.slug}>
              <div className="note-top">
                <span>FIELD NOTE / 0{i + 1}</span>
                <ArrowUpRight size={20} />
              </div>
              <p className="eyebrow">{n.tag}</p>
              <h3>{n.title}</h3>
              <p>{n.subtitle}</p>
              <span className="note-read">
                Read note <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <RecruiterTools />
    </main>
  );
}
