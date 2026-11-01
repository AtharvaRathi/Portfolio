# Portfolio redesign

Implemented November 2026 in the existing Next.js / GitHub / Vercel application.

## Experience

- AI-led landing page with suggested prompts and a persistent conversational assistant.
- Direct navigation for visitors who want to browse; project-specific AI entry points.
- Twelve project pages with architecture flows, tradeoffs, source links, and evaluation questions.
- Three engineering notes based on documented implementations. No new benchmark results or personal contribution stories are asserted.
- Three free browser demos: webhook delivery/recovery, keyword retrieval with source inspection, and curated safer-code examples. These are educational simulations, not hosted versions of the repositories.
- Filterable project gallery and technology-to-project evidence explorer.
- Recruiter overview: AI/ML, computer vision, then backend; internships and full-time; onsite preferred; relocation welcome; Aug 2023–Apr 2027 education.
- Local job-description keyword matching, with explicit missing-evidence results. Pasted descriptions are not sent to a model or stored.
- Light/dark theme, muted mauve accent, normal cursor/native scrolling, brief state transitions, reduced-motion support, opt-in sound, mobile navigation.
- Experience timeline, certifications, résumé, source links, sitemap, and per-page metadata.

## Code map

- `src/data/portfolio.ts`: factual profile, project inventory, contacts.
- `src/data/editorial.ts`: slugs, project narratives, architecture flows, notes.
- `src/components/studio/shell.tsx`: navigation, global assistant, prompt controls, footer.
- `src/components/studio/work.tsx`: project filtering, skills evidence, recruiter tools.
- `src/components/studio/playground.tsx`: demo UI.
- `src/lib/playground.ts`: deterministic delivery and retrieval behavior.
- `src/lib/evidence.ts`: technology boundary matching (Go does not match MongoDB).
- `src/lib/assistant.ts`: deterministic portfolio fallback with project context.
- `src/app/api/ask/route.ts`: input validation, conversation context, Gemini/fallback routing.
- `src/app/projects/[slug]`, `src/app/notes/[slug]`: statically generated content pages.
- `src/app/globals.css`: responsive design system.

The legacy components remain in the repository but are no longer mounted by the active layout. Three.js, custom cursor, Lenis, and the old terminal/command palette are not loaded into the new homepage.

## Cost and assistant behavior

The playground and recruiter tools require no model, API key, paid hosting service, or additional dependency.

The assistant retains the existing Gemini integration. No paid provider fallback, subscription, or billing setting has been added. When the key is absent, requests exceed the per-instance guard, or Gemini fails, it serves a labeled portfolio-knowledge response. This fallback is deterministic, not a second LLM.

For guaranteed zero model requests, set `AI_PROVIDER=local`. Otherwise, an existing `GEMINI_API_KEY` enables Gemini; its account must remain on the provider's free tier to meet the zero-cost requirement. An application cannot infer billing tier from the key. The in-memory six-requests-per-minute guard is per instance and is not a global spending cap. Provider quotas remain authoritative.

Assistant questions and recent chat context go to the portfolio API and, when enabled, Gemini. Chat is held in browser memory and resets on reload. There is no new conversation database or analytics integration.

## Content boundaries

VStream and SemanticEdge follow repository documentation over conflicting résumé descriptions. The original supplied résumé PDF is preserved. Project imagery is illustrative Unsplash stock imagery and is labeled accordingly; replace the `image` fields when screenshots are ready. Contributions and additional measured results remain a later editorial task.

## Verification

- `npm run test:core`: delivery success, recovery, exhaustion, no-evidence retrieval, contextual assistant responses, unique content routes, technology matching boundaries.
- Start with `AI_PROVIDER=local npm run dev -- --hostname 127.0.0.1`, then `node scripts/check-http.cjs`: API validation, fallback responses, oversized input, page routes, résumé, sitemap, robots, and unknown-project 404.
- `npm run build`: production compilation, TypeScript, lint, static page generation.
- Browser interaction checks: mobile menu; light/dark; assistant intro and project context; Escape dismissal; webhook DLQ/replay; retrieval; safer-code inspection; role evidence with an unknown technology; project and note navigation.
- Browser layout checks: 320, 390, 768, 1440, and 1920px; no page-level horizontal overflow in tested states. Project/article pages also checked at 320px. These are viewport checks, not physical-device certification.
- Live Gemini generation is not exercised by local-mode tests; existing provider quota/credentials still apply.
