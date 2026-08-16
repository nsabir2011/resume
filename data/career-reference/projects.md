# Canonical Project and Initiative Catalog

> Internal source of truth for project purpose, constraints, ownership, technologies, and outcomes. Do not copy client or internal project names directly into a public portfolio without checking `sources-and-publication.md`.

## FaceLens

**Period:** Prototype began August 2018; continued through Nazmus's MononAI employment ending September 2022

**Role:** Prototype creator; AI and backend system owner; later primary product engineer and full-stack contributor

**Public label suggestion:** Real-Time Multi-Camera Face Intelligence Platform

**Portfolio treatment:** Strong earlier-career case study; the product and features are publicly demonstrated, but approve staffing history, architecture details, and the exact throughput claim before publication

- **Purpose:** A face-recognition and video-surveillance product that continuously monitored CCTV feeds, logged detected faces, matched or categorized identities, and generated operational analytics such as attendance, unknown-person clustering, activity summaries, alerts, and time spent within an area.
- **Origin:** Built the initial prototype using face detection, face recognition, and OpenCV. The prototype became the basis for development of the production product.
- **Backend ownership:** Built the production backend across the AI pipeline, REST APIs, database design and queries, Redis caching, and WebSocket-based real-time interactions.
- **Performance challenge:** Continuous CCTV monitoring had to remain accurate and responsive while processing as many live camera streams as possible on one machine that also hosted the database, backend API, and frontend.
- **Optimization work:** Improved database queries, added Redis caching, reduced latency across the application, and optimized the continuous-monitoring pipeline for efficient use of available CPU and GPU resources.
- **Accuracy work:** Continued improving recognition accuracy while increasing camera capacity and reducing latency; no accuracy metric is currently recorded.
- **Measured capacity:** First-hand account reports real-time processing of 14 cameras on one computer with a six-core processor and an RTX GPU while the database, backend API, and frontend ran on the same system. The exact hardware configuration and test conditions are not yet recorded.
- **Product continuity:** After COVID-era layoffs removed the other engineers associated with the product, became the sole engineer maintaining and extending FaceLens.
- **Full-stack expansion:** Learned the existing frontend and subsequently delivered UI responsiveness improvements, workflow refinements, and new user-facing features, including analytics for how long a person remained within an area.
- **Registration overhaul:** Substantially redesigned the slow registration system and its UI, removing a bottleneck that had limited integration of additional product features.
- **Ownership boundary:** Another engineer developed the baseline frontend. A second engineer participated briefly during roughly the first year and guided what the product needed, but did not write the backend implementation. Nazmus built most of the eventual product, but not the entire system single-handedly.
- **Engineering context:** This work was implemented and optimized before AI coding assistants were available, using conventional hands-on development, profiling, debugging, and systems engineering.
- **Public evidence:** The public [FaceLens Version 1.0 walkthrough](https://www.youtube.com/watch?v=htZk24_gaVs), published on 2020-01-28, demonstrates live monitoring, identity matching, alerts and status categories, face search, people registration and management, attendance/activity analytics, and person- and device-level video summaries. The video supports the visible product capabilities, while the contribution and ownership details above are first-hand.

## StreetLens

**Period:** Prototype began March 2019; development continued during Nazmus's MononAI employment, but he left while the customer-focused work was still in progress; exact end date needs confirmation

**Role:** Prototype creator; AI and backend owner; later frontend maintenance and improvement contributor

**Public label suggestion:** Camera-Based Vehicle Detection and Number-Plate Intelligence

**Portfolio treatment:** Supporting earlier-career project; describe as a prototype and incomplete customer pursuit rather than a completed deployment

- **Purpose:** A vehicle-focused monitoring system that detected and logged vehicles passing through CCTV camera feeds and extracted their number plates into searchable records.
- **Origin:** Built the prototype and owned its main AI and backend work.
- **Product relationship:** Reused the FaceLens interface and its per-camera dashboard pattern, adapting the experience from people and face monitoring to vehicles and number plates.
- **Per-camera workflow:** A user could select a location and camera feed, observe passing traffic, open device video logs, and review detections logged for that camera.
- **Visible detection records:** The prototype video shows timestamped records pairing a vehicle crop with a number-plate crop and recognized plate text. Visible classifications include cars, trucks, and motorcycles.
- **Additional monitoring strip:** The reused dashboard also shows a strip of recent people or rider detections below the live feed.
- **Backend ownership:** Implemented the vehicle-related AI processing and backend system. The exact APIs, storage architecture, recognition pipeline, and performance characteristics are not yet recorded.
- **Frontend contribution boundary:** Another developer made the initial, relatively small frontend modifications needed to adapt the FaceLens UI for vehicles. Nazmus later fixed frontend issues and improved parts of the interface.
- **Commercial context:** Developed as a prototype intended to help acquire another customer within the Bangladesh government. The specific prospective organization should remain private unless publication is approved.
- **Completion boundary:** Nazmus left MononAI while this effort was still underway, so the reference must not imply that he completed the customer engagement, secured the customer, or delivered the final production system.
- **Supporting material:** A confidential local prototype recording is stored at `../streetlens-prototype.mp4` and was reviewed on 2026-08-12. The footage is approximately 61 seconds at 1920x1080 and visibly supports the per-camera monitoring and vehicle/plate logging workflow described above. Its publication status and whether screenshots may be used externally still need confirmation.

## Anomaly Detection Platform

**Period:** October 2022-February 2024  
**Role:** Lead Engineer on the ASJ side; backend and React frontend contributor  
**Public label suggestion:** Self-Service Product Anomaly Detection Platform  
**Portfolio treatment:** Anonymize unless Chowa Giken approves public attribution

- **Purpose:** A full product-anomaly-detection workflow with a complete UI through which users could upload data, train models, and run inference.
- **Primary challenge:** Make the entire workflow fast and responsive through both a performant backend and an optimized frontend.
- **Contributions:** Delivered backend and frontend work; developed the frontend using React; proposed and independently implemented UI improvements that increased speed, usability, and friendliness.
- **Engineering output:** Submitted and merged `17 + 8` pull requests.
- **2024 extension:** Added support for Apple Silicon / ARM-based M-series MacBooks without direct access to a MacBook, using iterative testing feedback from a coworker.

## IFL 360 Image Enhancement

**Period:** March-April 2023; advisory involvement during the first half of 2026  
**Role:** Inference and pipeline optimization engineer; later technical advisor  
**Public label suggestion:** High-Resolution 360-Degree Image Enhancement Optimization  
**Portfolio treatment:** Strong anonymized performance case study

- **Purpose:** Improve high-resolution 360-degree car-interior images by removing artifacts such as glare and bloom and applying brightness, contrast, and related enhancements.
- **Constraint:** A full image did not fit in 16 GB of GPU memory, so each sample was divided into four parts for inference.
- **Initial performance:** Approximately 42 seconds per sample.
- **Assignment:** Improve speed without retraining the model and without changing its outputs.
- **Contributions:** Optimized inference and reduced data-transfer overhead between processing stages.
- **Outcome:** Reduced runtime to approximately 12-13 seconds per sample with unchanged outputs. The 2023 deck reports an approximately 3.2x speed-up against a 2x target, achieved in a short time.
- **Business contribution:** Suggested an alternative server configuration intended to increase revenue.
- **2026 advisory work:** Served as an advisor when the project became active again, primarily reviewing, advising on, and approving proposed task outlines and technical ideas rather than owning implementation.

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

**Period:** September-December 2024; blog activity recorded in 2025  
**Role:** Tech Lead and primary individual contributor  
**Public label suggestion:** Explainable AI for Forecast Predictions  
**Portfolio treatment:** Patent-sensitive; publish only approved high-level information

- **Purpose:** Explain possible causes behind a forecast model's prediction to increase user and client trust in AI-generated forecasts.
- **Contributions:** Led the project, completed development well before the deadline, and created a sales demo with strong UI/UX and a scalable solution.
- **Patent:** Application filed. First-hand estimate identifies Nazmus as the largest individual contributor, responsible for more than 75% of the work represented in the application.
- **Writing:** Wrote an internal technical blog about the project. It became the basis for the public editorial article released in May 2026 after earlier publication difficulties involving the name "ForecastSense" and competing project commitments.
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
- **Public demo:** Personally prepared the additional V1 demonstration used for ["Demo Video No.2 Visual Response RAG"](https://www.chowagiken.co.jp/future-studio/demo-visual-response-rag/), published on 2026-03-13. The page is a high-level demonstration and does not disclose the internal techniques.
- **Patent:** Application filed. First-hand estimate identifies Nazmus as the largest individual contributor, responsible for more than 75% of the work represented in the application.
- **Mentoring:** Guided Mursalin-san on his first language project and improved his RAG understanding.

## MRAG v2 / OCR-Based Multi-Document RAG

**Period:** April-July 2026  
**Role:** Idea originator, Development Lead, project lead, system architect, and primary hands-on engineer  
**Public label suggestion:** OCR-Driven Multi-Document RAG for Complex Technical Content  
**Portfolio treatment:** Strong flagship case study; anonymize internal details and verify publication permission

- **Motivation:** Improve the first MRAG system, which supported only one document and could not reliably extract images from some digital PDFs, much less scanned documents.
- **Proposal:** Use OCR-based document-content extraction to improve extraction of images, tables, formulas, and text, then build a robust RAG method for a multi-document corpus.
- **Ingestion architecture:** Combined OCR-extracted text with page images to identify topics and subtopics spanning multiple PDF pages and to generate image descriptions. These outputs became structured text inputs for RAG.
- **Novel context engineering:** Introduced a topic/subtopic-based context-construction technique that preserved each image description inline at the image's actual semantic position. When a subtopic was selected, the LLM received the relevant subtopic content together with all inline image descriptions belonging to it. This supplied the complete local context needed to integrate relevant images correctly and reduced missed image integrations.
- **Query architecture:** Implemented a robust multi-step retrieval pipeline that selected the relevant subtopics - or complete topics when appropriate - as evidence for final-answer generation.
- **Team leadership:** Led BM Abir and Mursalin Islam. Defined the end-to-end architecture, broke it into documented tasks, assigned work, supplied baseline approaches and examples, estimated resource allocation, and encouraged cross-task understanding and collaboration.
- **Allocation change:** Mursalin was later reassigned to client work, while BM's investigation into adapting and optimizing a public repository did not produce a sufficiently effective solution. Nazmus adapted the plan and completed an estimated 90% of the final project work himself.
- **Availability constraint:** The project continued across a period when Nazmus was unavailable for approximately one working month for Hajj.
- **Ownership:** Proposed the technical-development project, led it from start to finish, and became its primary hands-on engineer when the planned team allocation changed.
- **Outcome:** Completed successfully in July 2026. V2 addressed major V1 shortcomings, retained and integrated substantially more useful document images, was more capable, performed better, and generated responses faster. Exact comparative metrics are not yet recorded.
- **Patent direction:** Because the company considered the context-engineering technique novel, it decided to pursue patent protection for MRAG v2. The filing and legal status still need confirmation.

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

**Period:** February-December 2025  
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

**Internal title:** Prompt-conditioned floorplan generation with FLUX.2 Klein 4B (LoRA) - direct CAD first, fallback to color-coded

**Period:** February-April 2026  
**Role:** Idea originator and Development Lead; led one engineer while contributing limited hands-on coding and research  
**Public label suggestion:** Evaluating a New Generative Model for Single-Stage Floorplan Generation  
**Portfolio treatment:** Anonymize the related internal project and verify the model name/version before publication

- **Motivation:** The existing floorplan pipeline used the relatively old Stable Diffusion 1.5 model and required two-stage generation.
- **Opportunity:** A newly viable model identified as `FLUX.2 Klein 4B` became available during the first part of 2026.
- **Proposal:** Run a focused technical-development project using prompt conditioning and LoRA to test direct CAD-style generation first, with color-coded generation as a fallback.
- **Team leadership:** Led BM Abir, setting the technical direction and guiding the feasibility work while contributing a smaller amount of coding and research.
- **Outcome:** Completed successfully in April 2026. The team confirmed that the newer model was more capable and a potential solution for the floorplan use case. The result may materially support a future client phase or strengthen the technical basis for negotiating and securing that work.

## KMEW House Image Generation

**Period:** Direct house-exterior development from February 2025-March 2026; responsive client support continued through June 2026  
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
- **Phase status:** Continued direct house-exterior work through March 2026. After planned development ended, responded to sudden client questions and requests as needed through June 2026.

## Global South Subsidy / Dhaka AI Dojo

**Period:** September-December 2025 for Nazmus's completed first-cohort LinkedIn entry; the official program ran from September 2025-January 2026  
**Role:** Lecturer-equivalent educator and mentor  
**Public label suggestion:** University AI Education and Mentoring Program  
**Portfolio treatment:** Potentially public with institutional approval and without private student information

- Prepared one-third of the lecture materials and delivered some of the lectures.
- The 2025 cohort involved BRAC University and North South University. Lectures were shared between the participating campuses: sessions delivered for BRAC students were broadcast to NSU, and BRAC students could join sessions delivered through NSU.
- Reduced the time Takehiko-san needed to spend on the prepared materials.
- Mentored BRAC University students. Among the participating BRACU and NSU teams, one mentored group won the final prize; the presentation credits the students for most of the outcome.
- Prepared all material for an ICT Ministry seminar.
- Helped resolve practical issues such as Colab Pro access for students.
- After the program, recommended approximately four to five strong participants as potential company candidates. Four recommended candidates were subsequently hired as interns and, as of August 2026, were contributing to company projects. Treat candidate identities and employment details as private.

## Nippon AI Dojo - Phase 2

**Period:** Began June 2026; ongoing as of August 2026; the public UAP program notice gives June-September 2026 for that institution's participation  
**Role:** Lecturer-equivalent mentor and manager of two interns from the previous cohort  
**Public label suggestion:** University AI Mentoring Program - Second Cohort  
**Portfolio treatment:** Potentially public with institutional approval and without private student information

- Began mentoring students at BRAC University again during the program's second phase.
- Alongside the second phase, began managing two company interns selected from the previous Nippon AI Dojo cohort. This is distinct from student mentoring and provides direct internal people-management experience.
- The two managed interns are part of a group of four previous-cohort participants hired after Nazmus recommended approximately four to five strong candidates. The other interns are contributing to other company projects.
- Reused the established lecture materials from the earlier phase.
- Made minor updates to previous lecture slides when needed.
- Continued the same lecturer-equivalent mentoring and student-guidance responsibilities as the first phase.
- The 2026 cohort also involves the University of Asia Pacific. Lectures are shared across participating campuses, including broadcasts to and from the BRAC University group.
- Do not add a completed 2026 LinkedIn timeline or claim final outcomes until the cohort actually finishes.

## Morita Foil Stamping Anomaly Detection

**Period:** 2025  
**Role:** Presales feasibility and planning contributor  
**Public label suggestion:** Budget-Constrained Industrial Anomaly Detection Planning  
**Portfolio treatment:** Client-sensitive; anonymize before publication

- Researched whether the project was feasible within the given budget.
- Created an implementation plan and estimate.
