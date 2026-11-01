import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { projects, notes } from "@/data/editorial";
import { AskButton } from "@/components/studio/shell";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = projects.find((p) => p.slug === params.slug);
  return {
    title: p?.name,
    description: p?.description,
    alternates: { canonical: `/projects/${params.slug}` },
  };
}
export default function Project({ params }: { params: { slug: string } }) {
  const p = projects.find((p) => p.slug === params.slug);
  if (!p) notFound();
  const c = p.caseStudy;
  const related = notes.filter((n) => n.project === p.slug);
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <main id="main" className="shell detail-page">
      <Link className="back-link" href="/#work">
        <ArrowLeft size={16} />
        All projects
      </Link>
      <div className="detail-heading">
        <p className="eyebrow">PROJECT / {p.category}</p>
        <h1>{p.name}</h1>
        <p>{p.description}</p>
        <div className="button-row">
          <a
            className="primary"
            href={p.links.github}
            target="_blank"
            rel="noreferrer"
          >
            View source <ArrowUpRight size={16} />
          </a>
          {p.links.live && (
            <a
              className="secondary"
              href={p.links.live}
              target="_blank"
              rel="noreferrer"
            >
              Visit project <ArrowUpRight size={16} />
            </a>
          )}
          <AskButton
            project={p.slug}
            question={`Explain the architecture and tradeoffs of ${p.name}.`}
          >
            <Sparkles size={16} />
            Explore with AI
          </AskButton>
        </div>
      </div>
      <div className="detail-image">
        <Image src={p.image} alt="" fill unoptimized sizes="100vw" />
        <span>
          Illustrative stock imagery · Project screenshots coming later
        </span>
      </div>
      <div className="detail-grid">
        <aside>
          <p className="eyebrow">TECHNOLOGIES</p>
          <div className="tags">
            {p.techStack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <p className="eyebrow">PROJECT CONTEXT</p>
          <p>{p.role}</p>
          <a href={p.links.github} target="_blank" rel="noreferrer">
            Repository & documentation ↗
          </a>
        </aside>
        <div className="case-content">
          <section>
            <p className="eyebrow">01 / THE PROBLEM</p>
            <h2>What this build explores</h2>
            <p>{c.problem}</p>
          </section>
          <section>
            <p className="eyebrow">02 / THE APPROACH</p>
            <h2>How the pieces connect</h2>
            <p>{c.approach}</p>
            <ol className="architecture-flow">
              {c.flow.map((s, i) => (
                <li key={`${s}${i}`}>
                  <span>0{i + 1}</span>
                  {s}
                  {i < c.flow.length - 1 && <ArrowRight size={15} />}
                </li>
              ))}
            </ol>
          </section>
          <section>
            <p className="eyebrow">03 / ENGINEERING JUDGMENT</p>
            <h2>The tradeoffs</h2>
            <p>{c.tradeoff}</p>
            <div className="callout">
              <h3>A useful next question</h3>
              <p>{c.next}</p>
            </div>
          </section>
          <section className="source-note">
            <p className="eyebrow">SOURCE & SCOPE</p>
            <p>{c.evidence}</p>
            <p>
              Detailed contribution stories and additional benchmarks will be
              added in a later update.
            </p>
          </section>
          {related.map((n) => (
            <Link
              className="related-note"
              href={`/notes/${n.slug}`}
              key={n.slug}
            >
              Read the engineering note: {n.title}
              <ArrowUpRight size={18} />
            </Link>
          ))}
          {["webhook-engine", "adaptive-rag", "contextshield"].includes(
            p.slug,
          ) && (
            <Link className="related-note" href="/#playground">
              Try the browser playground
              <ArrowUpRight size={18} />
            </Link>
          )}
        </div>
      </div>
      <Link className="next-project" href={`/projects/${next.slug}`}>
        <span>
          <small>NEXT BUILD</small>
          {next.name}
        </span>
        <ArrowRight />
      </Link>
    </main>
  );
}
