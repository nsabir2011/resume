# Sources, Confidence, and Portfolio Publication Rules

## Why this file exists

The career reference combines confidential company presentations, an older image-based resume, and first-hand clarifications. This ledger separates evidence from interpretation and prevents internal or uncertain details from being published accidentally on the future portfolio website.

## Primary sources

| Coverage | Prepared | Source | Notes |
| --- | --- | --- | --- |
| Resume history | Source resume predates Chowa Giken work | `../DL-CV-5th-reference.md` | Structured transcription of image-based `DL-CV-5th.pdf` |
| FaceLens ownership, architecture, performance, and team context | 2026-08-12 conversation | First-hand clarifications from Nazmus Sakib Abir | Adds prototype origin, backend ownership, Redis/WebSocket/database work, throughput, full-stack expansion, registration overhaul, and contribution boundaries |
| StreetLens purpose, ownership, customer context, and completion boundary | 2026-08-12 conversation | First-hand clarifications from Nazmus Sakib Abir | Adds prototype ownership, vehicle/ANPR workflow, FaceLens UI reuse, frontend contribution boundary, government prospect context, and the fact that Nazmus left mid-project |
| StreetLens prototype recording | Footage shows 2021-12-14 timestamps; creation/export date needs confirmation | `../streetlens-prototype.mp4` | Confidential local video reviewed on 2026-08-12; approximately 61 seconds at 1920x1080; supports the location/camera hierarchy, live monitoring, recent detections, video-log access, vehicle crops, plate crops, recognized plate text, timestamps, and car/truck/motorcycle classifications; not approved for publication |
| Contributions through 2023 | 2023-11-20 | `../discretional-bonus-docs/ASJ Yearly Discretional Bonus - Nazmus Sakib Abir.pptx` | Confidential; Grade III-2 |
| Contributions through 2024 | 2024-11-21 | `../discretional-bonus-docs/ASJ Yearly Discretional Bonus 2024 - Nazmus Sakib Abir.pptx` | Confidential; Grade III-4 |
| Contributions through 2025 | 2025-12-07 | `../discretional-bonus-docs/ASJ Yearly Discretional Bonus 2025 - Nazmus Sakib Abir.pptx` | Confidential; Grade III-5 |
| Additional technical context and 2026 work | 2026-08-11 conversation | First-hand clarifications from Nazmus Sakib Abir | Adds project purpose, constraints, implementation detail, ownership, timelines, estimates, and 2026 contributions not present in the reviewed decks |
| LinkedIn publication choices and confirmed public-entry dates | 2026-08-16 conversation and signed-in profile review | First-hand clarifications from Nazmus Sakib Abir | Confirms the dates deliberately entered on LinkedIn, accepted contact and Open to Work choices, and the decision to add the ongoing 2026 Dojo timeline only after completion |

## Public material

| Published | Page | Public attribution | How to use it |
| --- | --- | --- | --- |
| 2020-01-28 | [FaceLens Version 1.0](https://www.youtube.com/watch?v=htZk24_gaVs) | B M Abir; MononAI-branded product walkthrough | Public evidence for visible FaceLens features and workflows; it does not establish Nazmus's contribution ownership or independently validate the performance and robustness claims in the video description |
| 2024-06-07 | [Combating the Malicious Use of AI-Powered Image Editing: A Deep Technical Dive](https://www.chowagiken.co.jp/future-studio/combating_malicious_use/) | Nazmus Sakib Abir | Authored technical article; its author biography confirms joining Chowa Giken in October 2022 |
| 2026-03-13 | [Prototype No.2 Visual Response RAG](https://www.chowagiken.co.jp/future-studio/visual-response-rag/) | Chowa Giken Editorial Department | Official public overview of the MRAG concept and its user-facing capabilities |
| 2026-03-13 | [Demo Video No.2 Visual Response RAG](https://www.chowagiken.co.jp/future-studio/demo-visual-response-rag/) | Chowa Giken Editorial Department | Official public demo; intentionally high-level and does not disclose internal techniques |
| 2026-05-19 | [Prototype No.4 需要予測の見える化技術](https://www.chowagiken.co.jp/future-studio/forecast-visualization-ai/) | Chowa Giken Editorial Department | Official public overview of Prediction + GPT; intentionally high-level and does not disclose internal techniques |
| 2025-09-23 | [Inaugural ceremony of NIPPON AI dojo held at NSU](https://www.newagebd.net/post/country/276892/inaugural-ceremony-of-nippon-ai-dojo-held-at-nsu) | New Age, reporting a press release about the NSU event | Public evidence that the 2025 cohort involved North South University and BRAC University; not evidence of Nazmus's individual role |
| 2025-09-25 | [BRAC University collaborates with Japan on AI training program](https://www.bracu.ac.bd/news/brac-university-collaborates-japan-ai-training-program) | BRAC University | Official institutional evidence for BRAC University's involvement in the 2025 NIPPON AI Dojo program; not evidence of Nazmus's individual role |
| 2026-05-21 | [Prestigious Nippon AI Dojo Program](https://cse.uap-bd.edu/office/newsletters/view/2/) | University of Asia Pacific, Department of CSE | Official institutional evidence for UAP participation in the June-September 2026 cohort; not evidence of Nazmus's individual role |

## Confidence labels

Use these labels internally when deciding how strongly to phrase a claim:

- **Deck-backed:** Explicitly stated in an annual presentation.
- **Public-source-backed:** Explicitly supported by public material listed in this ledger.
- **First-hand:** Supplied directly by Nazmus but not necessarily present in a deck.
- **Derived:** A cautious synthesis of multiple facts, such as a capability or positioning theme.
- **Needs confirmation:** Approximate, ambiguous, current-state-sensitive, or unsuitable for formal publication without checking.

## Confidentiality baseline

- All three annual contribution presentations are labeled **CONFIDENTIAL**.
- Treat project names, client names, infrastructure design, patent details, internal personnel names, unpublished research, and company-specific metrics as non-public by default.
- Treat MRAG v2 staffing, person-month estimates, task assignments, individual allocation changes, the 90% contribution estimate, and Hajj-related availability as internal evaluation context rather than public portfolio material unless explicit approval is given.
- Treat the identities, performance, assignments, and employment details of the two interns managed from June 2026 as private personnel information. The general fact of managing two interns may be used internally; external use requires publication approval.
- Treat the identities, selection details, recommendations, employment status, and project assignments of all candidates/interns from the previous Nippon AI Dojo cohort as private personnel information. The approximate recommendation count and four hires are first-hand internal evaluation facts, not public claims.
- Treat the MRAG v2 topic/subtopic context-engineering method, inline image-description handling, image-integration mechanism, and patent decision as patent-sensitive and non-public unless explicitly cleared. Do not describe a patent as filed or pending until its legal status is confirmed.
- Treat the FaceLens staffing history, exact deployment topology, 14-camera capacity, hardware configuration, and non-visible implementation details as non-public until Nazmus explicitly approves the final wording. The public video makes the shown product name and workflows public, but not every internal engineering detail.
- Treat the StreetLens recording, prospective Bangladesh government customer, customer-acquisition context, and non-public implementation details as confidential. Do not publish the local video or identify the prospective organization without explicit approval.
- Do not publish information merely because it appears in `projects.md`; that file is an internal source of truth.
- Chowa Giken may be named as the employer, but public descriptions of its work should still be reviewed for contractual, patent, client, and confidentiality constraints.
- Never publish contact information or references from the old resume without explicit approval.

## Portfolio publication workflow

Before adding a case study to the website:

1. Select the canonical facts from `projects.md`.
2. Replace internal/client project names with the suggested public labels unless naming is explicitly approved.
3. Remove names of coworkers, clients, executives, government contacts, and students unless public attribution is authorized.
4. Remove infrastructure identifiers and implementation details that could reveal internal architecture or security posture.
5. Avoid disclosing unpublished patent claims, exact patent contribution percentages, or novel methods until publication is cleared.
6. Keep strong metrics only when their use is approved and their wording is precise.
7. Write the public case study around the problem, constraints, personal role, approach, and outcome.
8. Mark the case study approved only after the user confirms the final wording is safe to publish.

## Recommended public case-study structure

Use this structure for each portfolio project:

1. **Outcome-led title** - describe the engineering achievement without exposing a client.
2. **Context** - what kind of problem the system addressed.
3. **Constraints** - GPU memory, licensing, model availability, data scarcity, latency, or timeline.
4. **My role** - clearly distinguish personal ownership from team work.
5. **Approach** - enough technical depth to show judgment without revealing protected details.
6. **Result** - quantified when approved; otherwise use a precise qualitative outcome.
7. **Technology** - tools and models that are safe to name.
8. **Reflection** - what was learned or what engineering principle the work demonstrates.

## Strong portfolio candidates

| Priority | Internal project | Suggested public angle | Main reason |
| --- | --- | --- | --- |
| Flagship | MRAG Multimodal Document Chatbot | Image-Aware RAG for Technical Documents | Original idea, leadership, difficult PDF/image streaming, patent application |
| Flagship | MRAG v2 | OCR-Driven Multi-Document RAG | Development leadership, OCR, multi-document retrieval, topic/subtopic evidence, improved speed and capability |
| Flagship | IFL 360 | Optimizing High-Resolution Vision Inference Under GPU Constraints | Clear 42s to 12-13s result without retraining |
| Flagship | EII FloorPlan Generation | Generative Floorplans Under Model and Licensing Constraints | Strong system decomposition, SD 1.5 constraint, API/deployment ownership |
| Flagship | KMEW House Image Generation | Elevation-Constrained House Exterior Generation | Multi-view consistency, design rules, texture constraints, SDXL |
| Strong | Anomaly Detection Platform | Self-Service Product Anomaly Detection | Full workflow, lead role, React UI, backend/frontend performance |
| Strong | Prediction + GPT | Explainable AI for Forecast Predictions | Trust-centered product concept, Tech Lead role, patent application |
| Strong | FLUX.2 Klein 4B Floorplan Feasibility Study | Evaluating a New Model for Single-Stage Floorplan Generation | Proposed and led successful technical evaluation that could simplify a two-stage pipeline |
| Strong | FaceLens | Real-Time Multi-Camera Face Intelligence Platform | Self-built prototype, complete backend ownership, single-machine optimization, later sole product maintenance, and full-stack feature delivery |
| Supporting | Ukiyolator-v2 | Component-Aware Multi-Style Image Transformation | LoRA, Kivy, multi-model GPU integration |
| Supporting | Sapporo Subsidy Demo Portal | Secure Delivery Platform for AI Demos | Azure isolation, Nginx proxy, portal, deployments |
| Supporting | Commercial-Friendly OD Benchmark | Model Selection Under Licensing Constraints | Practical research with reusable team value and mentoring |
| Supporting | StreetLens | Camera-Based Vehicle Detection and Number-Plate Intelligence | Prototype creation, AI/backend ownership, FaceLens UI reuse, and clear incomplete-delivery boundary |
| Community | Dhaka AI Dojo | University AI Teaching and Mentoring | Lecturer-equivalent work and winning mentored group |

## Claims that need confirmation before formal use

- Whether MononAI and FaceLens should be named directly in the portfolio rather than presented under the suggested public label.
- Whether the COVID-era staffing history should be published.
- Whether the 14-camera, six-core CPU, RTX GPU, and single-machine full-stack configuration may be stated publicly, and the exact hardware and test conditions supporting it.
- How much technical detail about the FaceLens database, Redis caching, WebSockets, monitoring architecture, and registration redesign may be disclosed.
- Exact StreetLens development end date and the state of the product when Nazmus left MononAI.
- Whether StreetLens may be named directly and whether any part of `streetlens-prototype.mp4` may be published.
- Whether the general Bangladesh government prospect context may be stated publicly; the specific prospective organization remains unidentified and private.
- StreetLens backend architecture, AI/ANPR implementation, performance, accuracy, and scale details.
- Exact number of Sapporo demos; current recollection is approximately four.
- Current legal/status details of all patent applications.
- Filing and legal status of the planned MRAG v2 patent, and what level of the novel context-engineering method may be disclosed.
- Whether the `>75%`, `>75%`, and `20-30%` patent contribution estimates may be stated publicly.
- Whether client/internal names such as EII, KMEW, Morita, Sapporo, FanMagic, ForecastSense, and Ukiyolator may appear publicly.
- Whether exact infrastructure details and performance figures are approved for publication.
- Official spelling/version of the model currently recorded as `FLUX.2 Klein 4B`.
- Quantitative comparison supporting the statement that MRAG v2 generated responses faster and performed better than V1.
- Final completion date and outcomes for Nippon AI Dojo Phase 2. Institutional participation is public, but Nazmus's individual role and cross-campus lecture-sharing description remain first-hand.

## First-hand estimates and qualifications

- FaceLens: Nazmus built the initial prototype and the complete production backend, then became the sole maintaining engineer and expanded into frontend work. Another engineer developed the baseline frontend, and an early engineer guided product requirements without implementing the backend.
- FaceLens capacity: 14 live cameras processed in real time on one six-core CPU and an RTX GPU while the database, backend API, and frontend ran on the same computer. Exact hardware and reproducible test conditions are not yet recorded.
- StreetLens: Nazmus built the prototype and owned the primary AI and backend work. Another developer performed the initial small frontend adaptation from FaceLens, after which Nazmus fixed issues and improved parts of the UI. Nazmus left while the prospective-customer effort was still underway.
- Prediction + GPT patent contribution: largest individual contributor, estimated at more than 75%.
- MRAG patent contribution: largest individual contributor, estimated at more than 75%.
- EII FloorPlan Generation patent contribution: estimated at 20-30%.
- MRAG v2: the company decided to pursue patent protection based on the perceived novelty of the context-engineering technique; filing status and any individual contribution estimate are not yet confirmed.
- Sapporo demo count: approximately four.

These are useful internal facts, but they should be presented as estimates or confirmed before formal publication.
