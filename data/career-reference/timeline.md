# Career Contribution Timeline

> Dated evidence organized by annual presentation. Use [projects.md](projects.md) for canonical project explanations and [sources-and-publication.md](sources-and-publication.md) for provenance and publication restrictions.

## MononAI Limited: 2018-2022

**Employment start:** August 2018

**Employment end:** September 2022

**Role:** Full Stack Developer and Deep Learning Engineer

### FaceLens development

- Began the [FaceLens](projects.md#facelens) prototype in August 2018 using face detection, face recognition, and OpenCV.
- Turned the prototype into a production face-intelligence and CCTV-monitoring product.
- Built the complete production backend, including the AI pipeline, REST APIs, database layer and queries, Redis caching, and WebSocket interactions.
- Improved query performance, introduced caching, and reduced latency throughout the product.
- Continued improving face-recognition accuracy while increasing multi-camera throughput; no accuracy metric is currently recorded.
- Optimized continuous live-camera processing to run 14 cameras in real time on one six-core CPU and an RTX GPU while the database, backend API, and frontend ran on the same computer. This is a first-hand claim; exact hardware and test conditions are not yet recorded.
- Expanded into frontend work, delivering responsive UI improvements, workflow refinements, and new features such as tracking how long a person remained in an area.
- Substantially redesigned the registration system and its UI after the earlier implementation became a performance and feature-development bottleneck.
- After COVID-era layoffs removed the other product engineers, continued as the sole engineer maintaining and extending FaceLens.
- Another engineer had developed the baseline frontend, and a second engineer provided product guidance for roughly the first year without writing the backend implementation. Nazmus therefore built most, but not all, of the final system.
- A public [FaceLens Version 1.0 walkthrough](https://www.youtube.com/watch?v=htZk24_gaVs) was published on 2020-01-28 and demonstrates the product's monitoring, search, registration, alerting, analytics, and video-summary workflows.

### StreetLens development

- Began the [StreetLens](projects.md#streetlens) prototype in March 2019 as a vehicle-focused counterpart to FaceLens.
- Built the prototype and owned the primary AI and backend work for detecting vehicles in CCTV feeds and extracting and logging their number plates.
- Reused FaceLens's per-camera dashboard pattern so users could select a location and feed, review passing traffic, and inspect timestamped records containing vehicle crops, plate crops, recognized plate text, and vehicle classes.
- Another developer made the initial small frontend adaptation for vehicles; Nazmus later fixed issues and improved parts of that frontend.
- The prototype was intended to support acquisition of another Bangladesh government customer.
- Left MononAI while the customer-focused work was still underway; do not describe the engagement or final product as completed without further evidence.
- A confidential prototype video is retained at `../streetlens-prototype.mp4` as supporting material and was visually reviewed on 2026-08-12.

## Employment baseline

- **Employer:** Chowa Giken Corporation
- **Start:** October 2022
- **Status:** Current employment
- **Start-date evidence:** Confirmed by the author biography on Nazmus's published Chowa Giken article dated 2024-06-07

## Through 2023

**Presentation prepared:** 2023-11-20  
**Organization:** R&D Offshore AI Development Team (ASJ)  
**Grade:** III-2

### Product and project delivery

- From October 2022-February 2024, led ASJ-side work on the [Anomaly Detection Platform](projects.md#anomaly-detection-platform), contributing backend and React frontend development, UI performance/usability ideas, implementation, and `17 + 8` merged pull requests.
- From March-April 2023, optimized [IFL 360](projects.md#ifl-360-image-enhancement) from approximately 42 seconds to 12-13 seconds per sample without retraining or output changes; the deck reports 3.2x speed-up against a 2x target.
- Trained artist-specific LoRA models and delivered Kivy GUI, backend, and deployment work for [Ukiyolator-v2](projects.md#ukiyolator-v2).
- Prepared approximately four research/project demos and built the portal, Azure VM infrastructure, Nginx proxy, SSL, deployment, and maintenance for the [Sapporo Subsidy Demo Portal](projects.md#sapporo-subsidy-demo-portal).

### Research and knowledge-sharing

- Compared state-of-the-art approaches, prepared reusable internal documentation, and gave three Vision Group presentations for [Overlapped-Object Segmentation Research](projects.md#overlapped-object-segmentation-research).
- Proposed and conducted [Generative Image Privacy and Adversarial Defense Research](projects.md#generative-image-privacy-and-adversarial-defense-research), delivering one Vision Group presentation and submitting a blog.

### Reliability and working style

- Reported never exceeding a deadline.
- Reported rarely missing meetings.
- Described the working approach as: "plan first then work."

### Organizational contributions

- Represented the company at Code Samurai 2023, where Chowa Giken was a sponsor.
- Judged participants for internship opportunities.
- Helped colleagues complete tasks; the deck names Takuma Suzuki, Mursalin, Shafiqul, Innat, and Jahirul.
- Attended meetings with DU.
- Purchased laptops for four ASJ members, purchased business cards, and handled other equipment-related work, including broken HDDs.

## Through 2024

**Presentation prepared:** 2024-11-21  
**Organization:** R&D Offshore AI Development Team (ASJ)  
**Grade:** III-4

### Product and project delivery

- Extended [Ukiyolator-v2](projects.md#ukiyolator-v2) with multi-region backend/frontend work and a GDINO/SAM/SDXL pipeline constrained to one 16 GB GPU.
- Continued the [Sapporo Subsidy Demo Portal](projects.md#sapporo-subsidy-demo-portal), including the web portal, Nginx, SSL, deployment, and maintenance.
- Added Apple Silicon / ARM-based M-series MacBook support to the [Anomaly Detection Platform](projects.md#anomaly-detection-platform) without direct Mac hardware, using coworker feedback for testing.

### Presales demos

- Delivered the [FanMagic Stadium Demo](projects.md#fanmagic-stadium-demo) in a short time and within the deadline.
- Built the [Executive Speech Generator](projects.md#executive-speech-generator) for easier introductory client meetings.
- Built the [Smart Water Meter Chatbot](projects.md#smart-water-meter-chatbot) UI in one week and contributed sales materials.

### Technical-development leadership

- From September-December 2024, served as Tech Lead and primary contributor for [Prediction + GPT / ForecastSense](projects.md#prediction--gpt--forecastsense), completing development early and contributing more than 75% by first-hand estimate to the related patent application.
- Originated and began leading the [MRAG Multimodal Document Chatbot](projects.md#mrag-multimodal-document-chatbot) near the end of 2024. It was marked in progress in the 2024 deck and completed in February 2025.
- Developed only the Gradio UI for the [2D Image to 3D Demo](projects.md#2d-image-to-3d-demo-ui).

### Research and writing

- Proposed and led the [Commercial-Friendly Object Detection Benchmark](projects.md#commercial-friendly-object-detection-benchmark), creating a reusable alternative-model reference and mentoring Jahirul-san.
- Wrote the blog associated with the 2023 image privacy research and addressed reviewer concerns.

### Infrastructure, external engagement, and team support

- Began managing internal company servers and portions of GCP and Azure used for client projects.
- Studied Google Cloud Associate Cloud Engineer and Azure Solutions Architect material to support company certification goals.
- Represented Chowa Giken at Code Samurai 2024 and judged participants.
- The selected participant won a prize. The team's initially preferred candidate achieved a higher placement but was unavailable because a company with a larger sponsorship commitment had already selected that person.
- Attended meetings with JICA, BCC, the ICT Minister, CodeBreaks, and a2i.
- Presented company projects and technical capabilities to a2i, the ICT Minister, and BCC.
- Helped other members solve problems and complete tasks.
- Ordered and purchased ID cards for ASJ members.

## Through 2025

**Presentation prepared:** 2025-12-07  
**Organization:** R&D Offshore AI Development Team (ASJ)  
**Grade:** III-5

### Project delivery

- Completed the [MRAG Multimodal Document Chatbot](projects.md#mrag-multimodal-document-chatbot) in February 2025, including PDF image extraction, semantic image placement, clean text/image streaming, a sales demo, a patent application, and mentoring.
- Owned Stable Diffusion 1.5 color-segment generation, contributed dataset annotation, prepared the REST API, and handled deployment/operations for [EII FloorPlan Generation](projects.md#eii-floorplan-generation). The client supplied 150 samples initially and later 580, compared with 50,000 used by the reference publication. First-hand patent contribution estimate: 20-30%.
- Owned design-rule-aware house-side generation using SDXL for [KMEW House Image Generation](projects.md#kmew-house-image-generation), while another engineer primarily handled texture retrieval.
- Researched feasibility and created an implementation plan and estimate for [Morita Foil Stamping Anomaly Detection](projects.md#morita-foil-stamping-anomaly-detection).

### Education and mentoring

- From September-December 2025, performed lecturer-equivalent work for the completed first-cohort LinkedIn entry for [Global South Subsidy / Dhaka AI Dojo](projects.md#global-south-subsidy--dhaka-ai-dojo). The official program itself ran through January 2026.
- Prepared one-third of the lecture materials and delivered some lectures.
- Lectures were broadcast to North South University.
- Mentored BRAC University students; one mentored group won the final prize across participating BRACU and NSU teams.
- Prepared all material for an ICT Ministry seminar and helped address practical student issues such as Colab Pro access.

### Research and writing

- Wrote a technical blog about Prediction + GPT. Issues involving the name "ForecastSense" and competing project commitments made publication harder.

### Infrastructure and team support

- Continued managing internal servers and portions of GCP and Azure.
- Completed the Google Cloud Associate Cloud Engineer certification.
- Helped colleagues tackle problems and complete tasks.
- Handled car rental for Japanese members visiting Bangladesh.

## 2026 to date

**Coverage date:** 2026-08-11  
**Source:** First-hand account; no annual presentation has been reviewed for this period

### Project progression

- Direct house-exterior development for [KMEW House Image Generation](projects.md#kmew-house-image-generation) is confirmed as February 2025-February 2026. Related work in the broader KMEW phase continued until May 2026.
- During the final KMEW phase, proposed and led the [FLUX.2 Klein 4B Floorplan Feasibility Study](projects.md#flux2-klein-4b-floorplan-feasibility-study).
- Served primarily as Development Lead while contributing a smaller amount of research and coding.
- Completed the feasibility project successfully and established that the candidate model could directly generate final floorplans, potentially replacing the older two-stage Stable Diffusion 1.5 workflow.

### MRAG v2 technical development

- Prepared an additional MRAG V1 demo published by Chowa Giken as ["Demo Video No.2 Visual Response RAG"](https://www.chowagiken.co.jp/future-studio/demo-visual-response-rag/) on 2026-03-13; the public page is intentionally high-level and does not disclose internal techniques.
- From April-July 2026, proposed and completed the [MRAG v2 / OCR-Based Multi-Document RAG](projects.md#mrag-v2--ocr-based-multi-document-rag) technical-development project.
- Led the complete project and also contributed as a hands-on engineer.
- Replaced V1's single-document limitation with a robust multi-document corpus workflow.
- Used OCR-extracted text and page images to improve text, image, table, and formula extraction; organize topics/subtopics across pages; and generate image descriptions for RAG input.
- Implemented multi-step retrieval of appropriate subtopics or complete topics as evidence for answer generation.
- Completed the project successfully. V2 was more capable, performed better, and generated responses faster than V1; exact metrics are not yet recorded.

### Education and mentoring

- Began a second phase of [Nippon AI Dojo](projects.md#nippon-ai-dojo---phase-2) mentoring with BRAC University students.
- Reused earlier lectures and made minor updates to previous slides when necessary.
- Continued lecturer-equivalent mentoring and student guidance.
- The University of Asia Pacific publicly records its 2026 participation as June-September 2026. Lectures are shared across participating campuses, including broadcasts to and from the BRAC University group.
- This cohort remains ongoing as of August 2026. Add its final LinkedIn timeline only after it finishes.
