import { portfolioData } from "@/data/portfolio";
import { projects } from "@/data/editorial";
import { projectsForFilter } from "@/lib/projects";
export type Turn = { role: "user" | "assistant"; content: string };
export type Source = { label: string; href: string };
const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

function mentionsProject(text: string, project: (typeof projects)[number]) {
  const query = ` ${normalize(text)} `;
  return [
    project.slug,
    project.name,
    project.name.split(" — ")[0],
    ...project.aliases,
  ].some((name) => query.includes(` ${normalize(name)} `));
}

export function answerFromPortfolio(
  question: string,
  projectSlug?: string,
  history: Turn[] = [],
) {
  const q = question.toLowerCase();
  const explicit = projects.filter((p) => mentionsProject(question, p));
  const contextual =
    projects.find((p) => p.slug === projectSlug) ||
    [...history]
      .reverse()
      .map((turn) => projects.find((p) => mentionsProject(turn.content, p)))
      .find(Boolean);
  const relevant = explicit.length
    ? explicit
    : /\b(it|its|this|that|architecture|tradeoffs?|stack|built|limitations?|technology|scope)\b/.test(
          q,
        ) && contextual
      ? [contextual]
      : [];
  if (relevant.length) {
    const wantsTradeoffs =
      /tradeoff|limitation|challenge|production|secure|privacy|zero.knowledge|forensic|reconstruct|playback|scope/.test(
        q,
      );
    const wantsArchitecture = /architecture|how|built|work|pipeline/.test(q);
    return {
      answer: relevant
        .slice(0, 3)
        .map((project) => {
          const explanation = [
            wantsArchitecture
              ? project.caseStudy.approach
              : !wantsTradeoffs
                ? project.description
                : "",
            wantsTradeoffs ? project.caseStudy.tradeoff : "",
          ]
            .filter(Boolean)
            .join("\n\n");
          return `${project.name}\n\n${explanation}\n\nTechnologies: ${project.techStack.join(", ")}.`;
        })
        .join("\n\n"),
      sources: relevant.slice(0, 3).flatMap((p) => [
        { label: p.name, href: `/projects/${p.slug}` },
        { label: `${p.name.split(" — ")[0]} source`, href: p.links.github },
      ]),
    };
  }
  if (
    /contact|email|reach|hire|relocat|onsite|available|availability|roles|looking for|opportunit|graduat|education/.test(
      q,
    )
  )
    return {
      answer: `${portfolioData.contact.callToAction}\n\n${portfolioData.education}\n${portfolioData.contact.email}`,
      sources: [{ label: "Quick overview & contact", href: "/#recruiters" }],
    };
  if (/experience|intern|worked|employer/.test(q))
    return {
      answer: portfolioData.experience
        .map(
          (e) =>
            `${e.title} · ${e.company}\n${e.period}\n${e.bullets.join(" ")}`,
        )
        .join("\n\n"),
      sources: [{ label: "Experience", href: "/#experience" }],
    };
  if (/certif|certificate|courses/.test(q))
    return {
      answer: portfolioData.certifications
        .map((c) => `${c.name} — ${c.status}`)
        .join("\n"),
      sources: [{ label: "Certifications", href: "/#experience" }],
    };
  if (/resume|résumé|\bcv\b/.test(q))
    return {
      answer: portfolioData.resume.summary,
      sources: [{ label: "Download résumé", href: "/resume.pdf" }],
    };
  if (/skill|stack|language/.test(q))
    return {
      answer:
        "My core languages are Python, C++, and Go, with React/Next.js for interfaces. My projects use PyTorch, GStreamer, FastAPI, LangGraph, vector databases, and Docker. CryptaVision adds TenSEAL CKKS and native TCP transport; the RTP/UDP server demonstrates POSIX sockets, libpcap, bounded buffering, and packet validation. Explore the skills section for project evidence.",
      sources: [
        { label: "Skills with evidence", href: "/#skills" },
        { label: "CryptaVision", href: "/projects/cryptavision" },
        { label: "RTP/UDP server", href: "/projects/rtp-udp-streaming" },
      ],
    };
  if (
    /project|vision|backend|network|systems|streaming|\brtp\b|\budp\b|encrypt|best|strong|\bai\b|fit|latest|newest|recent/.test(
      q,
    )
  ) {
    const picks = /latest|newest|recent|\bnew\b/.test(q)
      ? projects.slice(0, 2)
      : /network|systems|\brtp\b|\budp\b|streaming/.test(q)
        ? ["rtp-udp-streaming", "cryptavision", "vstream"].map((slug) =>
            projects.find((p) => p.slug === slug)!,
          )
        : projectsForFilter(
            /backend/.test(q)
              ? "Backend"
              : /vision/.test(q)
                ? "Computer vision"
                : "AI & ML",
          ).slice(0, 3);
    return {
      answer: picks.map((p) => `${p.name}\n${p.description}`).join("\n\n"),
      sources: picks.map((p) => ({
        label: p.name,
        href: `/projects/${p.slug}`,
      })),
    };
  }
  if (/hello|\bhi\b|intro|who|about|yourself/.test(q))
    return {
      answer: portfolioData.about,
      sources: [{ label: "Profile overview", href: "/#recruiters" }],
    };
  return {
    answer:
      "I don't have a verified answer to that in the portfolio knowledge base. Ask about my projects, experience, skills, or availability, or contact me for more detail.",
    sources: [
      { label: "Explore work", href: "/#work" },
      { label: "Contact", href: "/#recruiters" },
    ],
  };
}
