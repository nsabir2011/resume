# Canonical Project and Initiative Catalog

> Internal source of truth for project purpose, constraints, ownership, technologies, and outcomes. Do not copy client or internal project names directly into a public portfolio without checking `sources-and-publication.md`.

## Anomaly Detection Platform

**Period:** 2023-2024  
**Role:** Lead Engineer on the ASJ side; backend and React frontend contributor  
**Public label suggestion:** Self-Service Product Anomaly Detection Platform  
**Portfolio treatment:** Anonymize unless Chowa Giken approves public attribution

- **Purpose:** A full product-anomaly-detection workflow with a complete UI through which users could upload data, train models, and run inference.
- **Primary challenge:** Make the entire workflow fast and responsive through both a performant backend and an optimized frontend.
- **Contributions:** Delivered backend and frontend work; developed the frontend using React; proposed and independently implemented UI improvements that increased speed, usability, and friendliness.
- **Engineering output:** Submitted and merged `17 + 8` pull requests.
- **2024 extension:** Added support for Apple Silicon / ARM-based M-series MacBooks without direct access to a MacBook, using iterative testing feedback from a coworker.

## IFL 360 Image Enhancement

**Period:** 2023  
**Role:** Inference and pipeline optimization engineer  
**Public label suggestion:** High-Resolution 360-Degree Image Enhancement Optimization  
**Portfolio treatment:** Strong anonymized performance case study

- **Purpose:** Improve high-resolution 360-degree car-interior images by removing artifacts such as glare and bloom and applying brightness, contrast, and related enhancements.
- **Constraint:** A full image did not fit in 16 GB of GPU memory, so each sample was divided into four parts for inference.
- **Initial performance:** Approximately 42 seconds per sample.
- **Assignment:** Improve speed without retraining the model and without changing its outputs.
- **Contributions:** Optimized inference and reduced data-transfer overhead between processing stages.
- **Outcome:** Reduced runtime to approximately 12-13 seconds per sample with unchanged outputs. The 2023 deck reports an approximately 3.2x speed-up against a 2x target, achieved in a short time.
- **Business contribution:** Suggested an alternative server configuration intended to increase revenue.

## Ukiyolator-v2

**Period:** 2023-2024  
**Role:** AI/backend, GUI, and deployment engineer  
**Public label suggestion:** Component-Aware Multi-Style Ukiyo-e Transformation  
**Portfolio treatment:** Anonymize project and artist/client details

- **Purpose:** Transform photographs of people into user-selected Ukiyo-e artists' styles.
- **Distinctive behavior:** Different parts of one image - such as face, body, and background - could be transformed using different artists' styles.
- **2023 contributions:** Trained LoRA models for specific artists; developed the GUI in Kivy; contributed backend and deployment work.
- **2024 challenge:** The backend combined multiple heavy models, including GDINO, SAM, and SDXL, and the complete workload had to fit on one 16 GB GPU.
- **2024 contributions:** Delivered backend and frontend development, including multi-region support, and met the single-GPU constraint.

## Sapporo Subsidy Demo Portal

**Period:** 2023-2024  
**Role:** Demo, portal, infrastructure, deployment, and maintenance engineer  
**Public label suggestion:** Secure AI Demo Delivery Platform  
**Portfolio treatment:** Anonymize subsidy/client identifiers and internal network details

- **Purpose:** Showcase demos produced from company projects and research through a shared web portal.
- **Demo scope:** Approximately four demos in 2023; the exact count needs confirmation. Work included reflection removal, Ukiyolator-v2, mascot character transformation, and anomaly detection.
- **Portal:** Developed the portal through which users accessed the demos and continued its development in 2024.
- **Azure architecture:** Prepared Azure VMs for the demos. Demo VMs had no external IP addresses and were isolated from direct internet access.
- **Ingress design:** Only the web-portal VM had an external IP. Nginx on that VM proxied requests to the private demo VMs.
- **Operations:** Managed Nginx, SSL certificates, deployments, server maintenance, and both frontend and backend work related to the showcased demos.

## Overlapped-Object Segmentation Research

**Period:** 2023  
**Role:** Research proposer/contributor and knowledge author  
**Public label suggestion:** SOTA Segmentation Model Selection Study  
**Portfolio treatment:** Potentially publish as an anonymized research methodology case study

- Investigated state-of-the-art object-segmentation models for overlapped objects.
- Compared model tradeoffs and suitability for different requirements.
- Prepared reusable internal documentation so the team could select an appropriate model for future projects.
- Delivered three presentations in weekly Vision Group meetings.

## Generative Image Privacy and Adversarial Defense Research

**Period:** Research in 2023; blog work documented in 2024  
**Role:** Idea originator, researcher, presenter, and author  
**Public label suggestion:** Protecting Personal Images from Unauthorized Generative Editing  
**Portfolio treatment:** Use high-level defensive framing; avoid operational attack instructions

- Proposed and researched privacy and security risks introduced by generative image editing.
- Explored adversarial-image techniques intended to make unauthorized generative edits less usable or illegible, such as disrupting the reuse of a person's online image by inpainting models.
- Delivered one presentation in a weekly Vision Group meeting.
- Published the authored article ["Combating the Malicious Use of AI-Powered Image Editing: A Deep Technical Dive"](https://www.chowagiken.co.jp/future-studio/combating_malicious_use/) on 2024-06-07.
- Addressed reviewers' concerns and communicated the defensive goal without putting the company at risk.

## FanMagic Stadium Demo

**Period:** 2024  
**Role:** Demo developer  
**Public label suggestion:** AI-Powered Stadium Halftime Audience Experience  
**Portfolio treatment:** Anonymize product/client name

- **Purpose:** A football-stadium halftime experience involving randomly selected audience members and presentation on the stadium's large screen.
- **Contribution:** Developed the presented demo in a short time and achieved the project's goal.
- **Delivery:** Finished within the deadline despite a high workload, including overtime.

## Executive Speech Generator

**Period:** 2024  
**Role:** LLM demo developer  
**Public label suggestion:** LLM-Assisted Introductory Speech Generator  
**Portfolio treatment:** Anonymize executive and requester identities

- Developed an LLM-powered demo that generated speeches from supplied criteria.
- Built it for the company CEO to simplify introductory meetings with prospective clients and companies.
- The work originated as a special request from Nakamura-san.

## Smart Water Meter Chatbot

**Period:** 2024  
**Role:** Chatbot UI and sales-material contributor  
**Public label suggestion:** Conversational AI for Smart Meter Data  
**Portfolio treatment:** Anonymize client/product specifics

- Built a sales demo showing how AI could create a useful conversational experience from smart-water-meter data.
- Developed the chatbot UI in one week.
- Created part of the sales materials.

## Prediction + GPT / ForecastSense

**Period:** Development in 2024; blog activity recorded in 2025  
**Role:** Tech Lead and primary individual contributor  
**Public label suggestion:** Explainable AI for Forecast Predictions  
**Portfolio treatment:** Patent-sensitive; publish only approved high-level information

- **Purpose:** Explain possible causes behind a forecast model's prediction to increase user and client trust in AI-generated forecasts.
- **Contributions:** Led the project, completed development well before the deadline, and created a sales demo with strong UI/UX and a scalable solution.
- **Patent:** Application filed. First-hand estimate identifies Nazmus as the largest individual contributor, responsible for more than 75% of the work represented in the application.
- **Writing:** Wrote a technical blog about the project. Publication was complicated by an inability to use the name "ForecastSense" and limited time caused by high engagement on other projects.
- **Public overview:** Chowa Giken published ["Prototype No.4 需要予測の見える化技術"](https://www.chowagiken.co.jp/future-studio/forecast-visualization-ai/) on 2026-05-19. The page is credited to the Chowa Giken Editorial Department and presents the product idea at a high level without disclosing the internal techniques.

## MRAG Multimodal Document Chatbot

**Period:** Began near the end of 2024; completed February 2025  
**Role:** Idea originator, project lead, primary individual contributor, and mentor  
**Public label suggestion:** Image-Aware RAG for Technical Documents  
**Portfolio treatment:** Patent-sensitive; strong anonymized flagship case study

- **Purpose:** Make document-grounded chatbot responses more useful and easier to follow by including relevant source-document images at the correct semantic positions. Especially useful for manuals.
- **Key challenges:** Extract images from PDFs; select relevant images; place them seamlessly in the response; and stream text and images together without exposing HTML or unusual rendering artifacts.
- **Ownership:** Proposed the idea, obtained company acceptance, led the project, and contributed directly to implementation.
- **Commercialization:** Created a sales demo.
- **Public overview:** Chowa Giken published ["Prototype No.2 Visual Response RAG"](https://www.chowagiken.co.jp/future-studio/visual-response-rag/) on 2026-03-13. The page is credited to the Chowa Giken Editorial Department.
- **Public demo:** Prepared an additional V1 demo published as ["Demo Video No.2 Visual Response RAG"](https://www.chowagiken.co.jp/future-studio/demo-visual-response-rag/) on 2026-03-13. The page is a high-level demonstration and does not disclose the internal techniques.
- **Patent:** Application filed. First-hand estimate identifies Nazmus as the largest individual contributor, responsible for more than 75% of the work represented in the application.
- **Mentoring:** Guided Mursalin-san on his first language project and improved his RAG understanding.

## MRAG v2 / OCR-Based Multi-Document RAG

**Period:** Started after May 2026 and completed by August 2026; exact dates need confirmation  
**Role:** Idea originator, Development Lead, project lead, and hands-on engineer  
**Public label suggestion:** OCR-Driven Multi-Document RAG for Complex Technical Content  
**Portfolio treatment:** Strong flagship case study; anonymize internal details and verify publication permission

- **Motivation:** Improve the first MRAG system, which supported only one document and could not reliably extract images from some digital PDFs, much less scanned documents.
- **Proposal:** Use OCR-based document-content extraction to improve extraction of images, tables, formulas, and text, then build a robust RAG method for a multi-document corpus.
- **Ingestion architecture:** Combined OCR-extracted text with page images to identify topics and subtopics spanning multiple PDF pages and to generate image descriptions. These outputs became structured text inputs for RAG.
- **Query architecture:** Implemented a robust multi-step retrieval pipeline that selected the relevant subtopics - or complete topics when appropriate - as evidence for final-answer generation.
- **Ownership:** Proposed the technical-development project, led it from start to finish, and contributed hands-on engineering work.
- **Outcome:** Completed successfully. V2 was more capable, performed better, and generated responses faster than V1. Exact comparative metrics are not yet recorded.

## 2D Image to 3D Demo UI

**Period:** 2024  
**Role:** Demo UI developer only  
**Public label suggestion:** 2D-to-3D Generation Demo Interface  
**Portfolio treatment:** Minor supporting item rather than a full case study

- Developed only the demo UI using Gradio.

## Commercial-Friendly Object Detection Benchmark

**Period:** 2024  
**Role:** Research proposer, lead, evaluator, and mentor  
**Public label suggestion:** Commercially Viable Real-Time Object Detection Benchmark  
**Portfolio treatment:** Good anonymized research and engineering-decision case study

- Identified that the company was still using the older YOLOv4 in client projects because licensing and commercial-use restrictions limited the newer YOLO-family options available to the team.
- Proposed and led research into commercially suitable alternative real-time object-detection models.
- Benchmarked alternatives and shared findings as a reusable reference for selecting models in future client projects.
- Proposed adding Jahirul-san to the work and trained him to produce solutions more independently.

## EII FloorPlan Generation

**Period:** 2025  
**Role:** Color-segment generation owner, backend REST API engineer, and deployment/operations contributor  
**Public label suggestion:** Constraint-Aware Generative Floorplan Pipeline  
**Portfolio treatment:** Patent- and client-sensitive; anonymize before publication

- **Purpose:** Generate detailed floorplans through a staged generative pipeline.
- **Model constraints:** Required commercially friendly models and prohibited models of Chinese origin, ruling out many newer high-performing options.
- **Approach:** Used Stable Diffusion models and decomposed the task into color-segment generation, wall generation, component inpainting, and supporting image-processing stages.
- **Component placement:** Inpainted room-specific drawings into appropriate segments, such as a kitchen burner in the kitchen and a bathtub in the washroom.
- **Primary contribution:** Owned color-segment generation using Stable Diffusion 1.5. Strong results were difficult because SD 1.5 is relatively small and old.
- **Data constraint:** The client initially supplied only 150 samples and later increased the available dataset to 580 samples, while the reference publication used 50,000.
- **Reported result:** Achieved better results than the reference publication despite having far less client data under the stated constraints.
- **Data preparation:** Contributed to the annotation work required for the floorplan dataset.
- **Additional contribution:** Suggested a more performant and faster-training idea to Iwata-san.
- **Engineering:** Prepared the backend REST API and handled deployment and operational work, including serverless deployment.
- **Patent:** Application filed. First-hand contribution estimate is approximately 20-30% of the work represented in the application.

## FLUX.2 Klein 4B Floorplan Feasibility Study

**Period:** Early 2026 during the final KMEW phase; exact dates need confirmation  
**Role:** Idea originator and Development Lead, with limited hands-on coding and research  
**Public label suggestion:** Evaluating a New Generative Model for Single-Stage Floorplan Generation  
**Portfolio treatment:** Anonymize the related internal project and verify the model name/version before publication

- **Motivation:** The existing floorplan pipeline used the relatively old Stable Diffusion 1.5 model and required two-stage generation.
- **Opportunity:** A newly viable model identified as `FLUX.2 Klein 4B` became available during the first part of 2026.
- **Proposal:** Run a focused technical-development project to determine whether the model was suitable for the floorplan use case and should replace or augment the existing approach.
- **Ownership:** Proposed and led the project as Development Lead while contributing a smaller amount of coding and research work.
- **Outcome:** Completed successfully. The team determined that the model was viable for the use case and could directly generate the final floorplan, potentially replacing the prior two-stage generation process.

## KMEW House Image Generation

**Period:** 2025 - May 2026  
**Role:** House-side generation and design-rule implementation engineer  
**Public label suggestion:** Elevation-Constrained House Exterior Generation  
**Portfolio treatment:** Client-sensitive; anonymize names, textures, and proprietary design rules

- **Goal:** Generate realistic house exteriors from a reference house image and an elevation plan, eventually supporting creation of a 3D exterior model.
- **Texture stage:** Find client-owned textures in a database that closely match the reference image. Another engineer primarily owned texture retrieval.
- **Generation stage:** Produce all four house sides while following the elevation plan, applying matched client textures, obeying design rules, and maintaining seamless continuity between adjacent sides.
- **Primary contribution:** Owned house-side generation and enforcement of design rules.
- **Model:** Used SDXL under the same commercial-friendly licensing and non-Chinese-model constraints as the floorplan project.
- **Outcome:** Developed a novel technique that made the proof of concept successful.
- **Other engineering:** Contributed API specification, implementation, and deployment; suggested an approach to complete texture search accurately within the available time.
- **Phase status:** This KMEW project phase ended in May 2026.

## Global South Subsidy / Dhaka AI Dojo

**Period:** 2025  
**Role:** Lecturer-equivalent educator and mentor  
**Public label suggestion:** University AI Education and Mentoring Program  
**Portfolio treatment:** Potentially public with institutional approval and without private student information

- Prepared one-third of the lecture materials and delivered some of the lectures.
- Lectures were broadcast to North South University, extending the program beyond BRAC University.
- Reduced the time Takehiko-san needed to spend on the prepared materials.
- Mentored BRAC University students. Among the participating BRACU and NSU teams, one mentored group won the final prize; the presentation credits the students for most of the outcome.
- Prepared all material for an ICT Ministry seminar.
- Helped resolve practical issues such as Colab Pro access for students.

## Nippon AI Dojo - Phase 2

**Period:** 2026 - Ongoing as of August 2026  
**Role:** Lecturer-equivalent mentor  
**Public label suggestion:** University AI Mentoring Program - Second Cohort  
**Portfolio treatment:** Potentially public with institutional approval and without private student information

- Began mentoring students at BRAC University again during the program's second phase.
- Reused the established lecture materials from the earlier phase.
- Made minor updates to previous lecture slides when needed.
- Continued the same lecturer-equivalent mentoring and student-guidance responsibilities as the first phase.

## Morita Foil Stamping Anomaly Detection

**Period:** 2025  
**Role:** Presales feasibility and planning contributor  
**Public label suggestion:** Budget-Constrained Industrial Anomaly Detection Planning  
**Portfolio treatment:** Client-sensitive; anonymize before publication

- Researched whether the project was feasible within the given budget.
- Created an implementation plan and estimate.
