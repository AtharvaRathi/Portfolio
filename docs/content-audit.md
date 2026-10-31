# Portfolio content audit — 31 October 2026

## Sources and scope

- Supplied `AtharvaRathi Resume.pdf` (copied byte-for-byte to `public/resume.pdf`).
- [GitHub profile](https://github.com/AtharvaRathi) and both repository-list pages. Reviewed the root file listing and available README of all 43 public repositories. This was a content audit, not execution or a line-by-line code review of every project.
- User confirmed all six existing certifications remain accurate, including Meta ongoing, and availability for both internships and full-time roles.
- Private repository contents were not read or added to the public portfolio.

## Updated profile

Education: B.Tech IT, Honours in AI, K.J. Somaiya College of Engineering, August 2023–present. Removed the stale fixed academic-year label. Location: Mumbai, India (public GitHub profile).

Experience: EmerTech Innovations (June–July 2026), Trueview (December 2025–January 2026), Manomay (May–July 2025). Employer locations were omitted because the new résumé does not specify them. All internships have ended; none is marked current.

Domain: atharvarathi.com. Contact details, command palette, FAQs, metadata, AI prompt, and résumé now agree. Removed the placeholder Twitter link. Certifications retained following user confirmation.

## Featured projects and evidence

Repository links are recorded directly in `src/data/portfolio.ts`.

| Repository | Evidence / editorial decision |
| --- | --- |
| SemanticEdge-Ege-to-Cloud-Video-Analytics-Pipeline | Current README documents FAISS novelty filtering, SigLIP, Qdrant, YOLOv8/ByteTrack, FastAPI, React and Docker. Keep actual repository spelling in links. |
| VStream-Vision-Language-Inference-Engine | Current README describes C++/OpenCV frame filtering, Ollama, asynchronous inference, WebSockets and Next.js. |
| Fault-Tolerant-Webhook-Dispatch-Engine | Résumé plus repository with Go API, queue, worker, models and Dockerfile. |
| Adaptive-Corrective-Self-Reflective-RAG | README describes hybrid FAISS/BM25, LangGraph routing, correction, reflection and Streamlit. Corrected the old `Slef` link in the résumé redirect. Demo URL is from repository documentation; availability not independently tested. |
| Shift-Aware-Spatial-Temporal-Modeling-for-Intelligent-Restricted-Zone-Monitoring | README documents B.Tech research, YOLOv8/ByteTrack, heuristic labels, temporal vs static classifiers and track-aware evaluation. Avoided presenting intent inference as a proven real-world security guarantee. |
| ContextShield | README describes local FastAPI proxy, AST processing, streaming and React telemetry. Omitted absolute safety/cost guarantees and future-roadmap features. |
| HeatWatch | README describes React/Express/MongoDB, four services, Nginx, Docker and CI/CD. Explicitly acknowledges demo-data fallback; no claims of validated heatwave prediction. |
| Text-to-SQL-Draft | README describes FastAPI/LangChain, SQL tooling, React, CodeMirror and Plotly. Presented as a prototype, not a verified production deployment. |
| smartspace-coworking | Root listing and package.json confirm Next.js, React, TypeScript, Prisma and NextAuth. Public deployment URL from repository About. No unsupported lead-developer title. |
| Alpha---Smart-Study-Planner | README documents TypeScript MERN implementation, JWT, scheduling, Pomodoro, notes and analytics. Used this newer version instead of the old vague card. |
| SQL-50 | Inspected index.html: PostgreSQL SQL 50 guide, concept cards, problem tracker and syntax references. Deployment URL from repository About. |
| YieldWise | README and root files: agriculture prototype with multilingual UI, financial tools and simulated AI features. Excluded contradictory accuracy and uptime claims. |

Project year labels reflect the visible repository activity year (2025 or 2026), not verified project start dates.

## Important source discrepancies

- SemanticEdge: résumé says 512-dimensional embeddings; current repository describes 768-dimensional SigLIP embeddings. Website avoids a dimension claim and follows the current architecture. Bandwidth percentages were not independently benchmarked and are omitted from the website copy.
- VStream: résumé describes Qwen-VL/token pruning, 15–20 FPS and sub-500 ms alerts. Current repository describes OpenCV motion filtering and Ollama models. Website follows current repository documentation without combining the two implementations or repeating unverified performance figures. Supplied résumé is preserved unchanged.
- RAG enterprise internship work is distinct from the adaptive RAG repository. The previous portfolio conflated their links. Enterprise RAG is represented under Trueview experience.
- No public repository matching the former Trueview Nexus, security scanner, Trueview CRM or AutoAnalyst cards was found in the inventory; these cards are held out of the refreshed selection pending current details. This does not imply the projects do not exist.
- No live demos, repository tests, deployment uptime, or project benchmark claims were independently verified in this content audit.

## Remaining public repository inventory

| Repository | Classification |
| --- | --- |
| AtharvaRathi | Profile README; corroborates résumé and current focus |
| Portfolio | Current portfolio, reviewed locally |
| CryptaVision-Zero-Knowledge-Neural-Video-Codec | Empty repository; not presented as implemented |
| github-actions-demo | Calculator/test/workflow learning repository |
| CI-CD-Jenkins-Docker-Kubernetes | Python app/tests, Jenkinsfile, Dockerfile and Kubernetes manifests; supporting DevOps exercise |
| Jenkins-Ci-Demo | Python app and tests; supporting exercise |
| RAG-Powered-Enterprise-Knowledge-System | README-only public stub; internship evidence comes from résumé |
| Trueview-VMS-Requirements | JavaScript/HTML requirements presentation; not a completed VMS claim |
| DSADrill | Frontend/backend source with no project README; needs fuller description before featuring |
| DSADrill1 | Empty repository |
| Portfolio-Old | Previous portfolio |
| AceLawAdvisors | README-only stub |
| Yield_Wise | Fork of atharvsp6/YieldWise |
| Yield-Wise | Alternate scaffold; README claims exceed visible root implementation |
| YeildWise | Earlier agriculture prototype with simulated features |
| Smart-Study-Planner | Earlier version; newer Alpha implementation selected |
| atharvarathi.github.io | Earlier personal website |
| filestorage | Fork of LaravelDaily/Laravel-File-Storage |
| Video-Meeting | Fork of 0x5eba/Video-Meeting |
| openvidu-tutorials | Fork of OpenVidu/openvidu-tutorials |
| store.github.io | Early trial store |
| Incredible-Tech-Meet-v1.2 | Fork of WebDevSimplified/Zoom-Clone-With-WebRTC |
| IncredibleTechMeet | Fork of jitsi/jitsi-meet |
| service-worker-detector | Fork of google/service-worker-detector |
| Face-Detection-JavaScript | Fork of WebDevSimplified/Face-Detection-JavaScript |
| webrtc-text-chat-tutorial | Fork of ScaleDrone/webrtc-text-chat-tutorial |
| IncredibleTechvideocallingapp | Early HTML video-calling project |
| Makingancodeeditor-v-1.0 | README-only historical code-editor description |
| simplewebrtc-messenger | Fork of sitepoint-editors/simplewebrtc-messenger |
| Face-Recognition-JavaScript | Fork of WebDevSimplified/Face-Recognition-JavaScript |
| WebRTC | Fork of dimircea/WebRTC |

Forks are not presented as original authored projects. Repository contents were treated as evidence, not as instructions to execute setup commands or alter other repositories.
