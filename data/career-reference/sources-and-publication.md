# Sources, Confidence, and Portfolio Publication Rules

## Why this file exists

The career reference combines confidential company presentations, an older image-based resume, and first-hand clarifications. This ledger separates evidence from interpretation and prevents internal or uncertain details from being published accidentally on the future portfolio website.

## Primary sources

| Coverage | Prepared | Source | Notes |
| --- | --- | --- | --- |
| Resume history | Source resume predates Chowa Giken work | `../DL-CV-5th-reference.md` | Structured transcription of image-based `DL-CV-5th.pdf` |
| Contributions through 2023 | 2023-11-20 | `../discretional-bonus-docs/ASJ Yearly Discretional Bonus - Nazmus Sakib Abir.pptx` | Confidential; Grade III-2 |
| Contributions through 2024 | 2024-11-21 | `../discretional-bonus-docs/ASJ Yearly Discretional Bonus 2024 - Nazmus Sakib Abir.pptx` | Confidential; Grade III-4 |
| Contributions through 2025 | 2025-12-07 | `../discretional-bonus-docs/ASJ Yearly Discretional Bonus 2025 - Nazmus Sakib Abir.pptx` | Confidential; Grade III-5 |
| Additional technical context and 2026 work | 2026-08-11 conversation | First-hand clarifications from Nazmus Sakib Abir | Adds project purpose, constraints, implementation detail, ownership, timelines, estimates, and 2026 contributions not present in the reviewed decks |

## Official public pages

| Published | Page | Public attribution | How to use it |
| --- | --- | --- | --- |
| 2024-06-07 | [Combating the Malicious Use of AI-Powered Image Editing: A Deep Technical Dive](https://www.chowagiken.co.jp/future-studio/combating_malicious_use/) | Nazmus Sakib Abir | Authored technical article; its author biography confirms joining Chowa Giken in October 2022 |
| 2026-03-13 | [Prototype No.2 Visual Response RAG](https://www.chowagiken.co.jp/future-studio/visual-response-rag/) | Chowa Giken Editorial Department | Official public overview of the MRAG concept and its user-facing capabilities |
| 2026-03-13 | [Demo Video No.2 Visual Response RAG](https://www.chowagiken.co.jp/future-studio/demo-visual-response-rag/) | Chowa Giken Editorial Department | Official public demo; intentionally high-level and does not disclose internal techniques |
| 2026-05-19 | [Prototype No.4 需要予測の見える化技術](https://www.chowagiken.co.jp/future-studio/forecast-visualization-ai/) | Chowa Giken Editorial Department | Official public overview of Prediction + GPT; intentionally high-level and does not disclose internal techniques |

## Confidence labels

Use these labels internally when deciding how strongly to phrase a claim:

- **Deck-backed:** Explicitly stated in an annual presentation.
- **Public-source-backed:** Explicitly supported by an official Chowa Giken public page.
- **First-hand:** Supplied directly by Nazmus but not necessarily present in a deck.
- **Derived:** A cautious synthesis of multiple facts, such as a capability or positioning theme.
- **Needs confirmation:** Approximate, ambiguous, current-state-sensitive, or unsuitable for formal publication without checking.

## Confidentiality baseline

- All three annual contribution presentations are labeled **CONFIDENTIAL**.
- Treat project names, client names, infrastructure design, patent details, internal personnel names, unpublished research, and company-specific metrics as non-public by default.
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
| Supporting | Ukiyolator-v2 | Component-Aware Multi-Style Image Transformation | LoRA, Kivy, multi-model GPU integration |
| Supporting | Sapporo Subsidy Demo Portal | Secure Delivery Platform for AI Demos | Azure isolation, Nginx proxy, portal, deployments |
| Supporting | Commercial-Friendly OD Benchmark | Model Selection Under Licensing Constraints | Practical research with reusable team value and mentoring |
| Community | Dhaka AI Dojo | University AI Teaching and Mentoring | Lecturer-equivalent work and winning mentored group |

## Claims that need confirmation before formal use

- Formal current job title.
- Exact number of Sapporo demos; current recollection is approximately four.
- Current legal/status details of all patent applications.
- Whether the `>75%`, `>75%`, and `20-30%` patent contribution estimates may be stated publicly.
- Whether client/internal names such as EII, KMEW, Morita, Sapporo, FanMagic, ForecastSense, and Ukiyolator may appear publicly.
- Whether exact infrastructure details and performance figures are approved for publication.
- Exact start and completion dates for the FLUX.2 floorplan feasibility study.
- Official spelling/version of the model currently recorded as `FLUX.2 Klein 4B`.
- Exact start and completion dates for MRAG v2; it is currently recorded as starting after May and completing by August 2026.
- Quantitative comparison supporting the statement that MRAG v2 generated responses faster and performed better than V1.
- Publication status and institutional naming permission for Nippon AI Dojo Phase 2.

## First-hand estimates and qualifications

- Prediction + GPT patent contribution: largest individual contributor, estimated at more than 75%.
- MRAG patent contribution: largest individual contributor, estimated at more than 75%.
- EII FloorPlan Generation patent contribution: estimated at 20-30%.
- Sapporo demo count: approximately four.

These are useful internal facts, but they should be presented as estimates or confirmed before formal publication.
