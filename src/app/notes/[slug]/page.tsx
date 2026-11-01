import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";
import { notes, projects } from "@/data/editorial";
import { AskButton } from "@/components/studio/shell";
export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const n = notes.find((n) => n.slug === params.slug);
  return {
    title: n?.title,
    description: n?.subtitle,
    alternates: { canonical: `/notes/${params.slug}` },
  };
}
export default function Note({ params }: { params: { slug: string } }) {
  const n = notes.find((n) => n.slug === params.slug);
  if (!n) notFound();
  const p = projects.find((p) => p.slug === n.project)!;
  return (
    <main id="main" className="shell article-page">
      <Link className="back-link" href="/#notes">
        <ArrowLeft size={16} />
        Engineering notes
      </Link>
      <article>
        <header>
          <p className="eyebrow">{n.tag} / ENGINEERING NOTE</p>
          <h1>{n.title}</h1>
          <p className="article-subtitle">{n.subtitle}</p>
          <div className="article-byline">
            Atharva Rathi · Repository-based architecture notes
          </div>
        </header>
        <div className="article-body">
          {n.sections.map(([title, body], i) => (
            <section key={title}>
              <span className="eyebrow">0{i + 1}</span>
              <h2>{title}</h2>
              <p>{body}</p>
            </section>
          ))}
          <div className="source-note">
            <h3>Implementation reference</h3>
            <p>
              This note explains the documented architecture and separates
              suggested evaluations from measured results.
            </p>
            <a href={p.links.github} target="_blank" rel="noreferrer">
              {p.name} — source repository ↗
            </a>
          </div>
          <div className="button-row">
            <Link className="secondary" href={`/projects/${p.slug}`}>
              Explore the project
            </Link>
            <AskButton
              project={p.slug}
              question={`Explain the tradeoffs in ${p.name}.`}
            >
              <Sparkles size={16} />
              Discuss with AI
            </AskButton>
          </div>
        </div>
      </article>
    </main>
  );
}
