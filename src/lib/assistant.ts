import { portfolioData } from "@/data/portfolio";
import { projects } from "@/data/editorial";
export type Turn = { role: "user" | "assistant"; content: string };
export type Source = { label: string; href: string };
export function answerFromPortfolio(
  question: string,
  projectSlug?: string,
  history: Turn[] = [],
) {
  const q = question.toLowerCase();
  const explicit = projects.find(
    (p) =>
      q.includes(p.slug) ||
      q.includes(p.name.toLowerCase()) ||
      q.includes(p.name.split(" — ")[0].toLowerCase()),
  );
  const contextual =
    projects.find((p) => p.slug === projectSlug) ||
    [...history]
      .reverse()
      .map((t) =>
        projects.find((p) =>
          t.content.toLowerCase().includes(p.name.toLowerCase()),
        ),
      )
      .find(Boolean);
  const project =
    explicit ||
    (/\b(it|its|this|that|architecture|tradeoffs?|stack|built|limitations?|technology)\b/.test(
      q,
    )
      ? contextual
      : undefined);
  if (project) {
    const wantsTradeoffs = /tradeoff|limitation|challenge/.test(q);
    const wantsArchitecture = /architecture|how|built|work/.test(q);
    const explanation = [
      wantsArchitecture ? project.caseStudy.approach : !wantsTradeoffs ? project.description : '',
      wantsTradeoffs ? project.caseStudy.tradeoff : '',
    ].filter(Boolean).join('\n\n');
    return {
      answer: `${project.name}\n\n${explanation}\n\nTechnologies: ${project.techStack.join(", ")}.`,
      sources: [
        { label: project.name, href: `/projects/${project.slug}` },
        { label: "Source repository", href: project.links.github },
      ],
    };
  }
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
  if (
    /contact|email|reach|hire|relocat|onsite|available|availability|roles|looking for|opportunit|graduat|education/.test(
      q,
    )
  )
    return {
      answer: `${portfolioData.contact.callToAction}\n\n${portfolioData.education}\n${portfolioData.contact.email}`,
      sources: [
        { label: "Quick overview", href: "/#recruiters" },
        { label: "Contact", href: "/#recruiters" },
      ],
    };
  if (/certif|certificate|courses/.test(q))
    return {
      answer: portfolioData.certifications
        .map((c) => `${c.name} — ${c.status}`)
        .join("\n"),
      sources: [{ label: "Certifications", href: "/#experience" }],
    };
  if (/resume|résumé|cv\b/.test(q))
    return {
      answer: portfolioData.resume.summary,
      sources: [{ label: "Download résumé", href: "/resume.pdf" }],
    };
  if (/skill|stack|language/.test(q))
    return {
      answer: `My work spans Python, C++, Go, and React. I use PyTorch, OpenCV, LangGraph, FastAPI, vector databases, and Docker across AI, computer vision, and backend projects. Explore the skills section to see the projects behind each technology.`,
      sources: [{ label: "Skills with evidence", href: "/#skills" }],
    };
  if (/project|vision|backend|best|strong|\bai\b|fit/.test(q)) {
    const picks = /backend/.test(q)
      ? [projects[2], projects[5], projects[6]]
      : /vision/.test(q)
        ? [projects[0], projects[1], projects[4]]
        : [projects[0], projects[1], projects[3]];
    return {
      answer: picks.map((p) => `${p.name}\n${p.description}`).join("\n\n"),
      sources: picks.map((p) => ({
        label: p.name,
        href: `/projects/${p.slug}`,
      })),
    };
  }
  if (/hello|hi\b|intro|who|about|yourself/.test(q))
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
