export const profile = {
  name: 'Nazmus Sakib Abir',
  role: 'AI/ML Engineer · Technical Lead',
  location: 'Dhaka, Bangladesh',
  employer: 'Chowa Giken Corporation',
  email: 'nsabir2011@gmail.com',
  summary:
    'Applied AI engineer with professional experience since 2018, working across computer vision, generative AI, multimodal RAG, product engineering, and cloud deployment.',
  detail:
    'Current responsibilities combine technical investigation, project leadership, hands-on implementation, and delivery of usable AI systems under practical hardware, data, licensing, and timeline constraints.',
} as const;

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Public work', href: '#public-work' },
] as const;

export const socialLinks = [
  {
    label: 'LinkedIn',
    handle: 'in/nsabir2011',
    href: 'https://www.linkedin.com/in/nsabir2011/',
  },
  {
    label: 'GitHub',
    handle: '@nsabir2011',
    href: 'https://github.com/nsabir2011',
  },
] as const;

export const aboutPoints = [
  'End-to-end delivery across model research, AI pipelines, REST APIs, product interfaces, deployment, and operations.',
  'Experience proposing and leading technical projects while remaining directly involved in engineering and evaluation.',
  'Strong focus on practical constraints—including GPU memory, latency, data availability, commercial-use restrictions, and delivery time.',
  'Regular contributions beyond implementation through research documentation, mentoring, university teaching, demos, and technical presentations.',
] as const;

export const experiences = [
  {
    status: 'Current employer',
    organization: 'Chowa Giken Corporation',
    role: 'AI/ML Engineering · Technical-Development Leadership',
    period: 'Oct 2022 — Present',
    summary:
      'Applied research and product development spanning computer vision, generative AI, multimodal RAG, backend and frontend engineering, infrastructure, and technical leadership.',
    highlights: [
      'Proposed and led internal technical-development and research initiatives.',
      'Delivered AI systems, APIs, interfaces, demonstrations, and cloud deployments.',
      'Contributed to patents, public technical material, mentoring, and stakeholder presentations.',
    ],
  },
  {
    status: 'Previous',
    organization: 'MononAI Limited',
    role: 'Full Stack Developer · Deep Learning Engineer',
    period: 'Jun 2018 — 2022',
    summary:
      'Development of AI-powered video-surveillance products and the production software required to deploy, operate, and expose them to users.',
    highlights: [
      'Object detection, tracking, face recognition, vehicle ANPR, and analytics.',
      'Deep-learning services, REST APIs, production inference optimization, and deployment.',
      'React interfaces, application features, and SQL/NoSQL data workflows.',
    ],
  },
] as const;

export const projects = [
  {
    title: 'Multimodal RAG',
    period: '2024–2026',
    summary:
      'Proposed and led two generations of document-chat systems that combine written answers with relevant source visuals; contributed directly to engineering, demos, and team guidance.',
    tags: ['RAG', 'OCR', 'LLMs', 'Development lead'],
  },
  {
    title: 'Vision Inference Optimization',
    period: '2023',
    summary:
      'Optimized a high-resolution image-processing pipeline and reduced per-sample runtime from approximately 42 seconds to 12–13 seconds without retraining or output changes.',
    tags: ['Computer vision', 'PyTorch', 'Performance'],
  },
  {
    title: 'Generative Floorplan Development',
    period: '2025–2026',
    summary:
      'Contributed model development, dataset annotation, REST API work, and deployment; later proposed and led an evaluation that demonstrated a simpler generation workflow.',
    tags: ['Generative AI', 'Stable Diffusion', 'FastAPI'],
  },
  {
    title: 'Product Anomaly Detection',
    period: '2023–2024',
    summary:
      'Led ASJ-side work across the backend and React interface for data upload, model training, and inference, including performance and usability improvements.',
    tags: ['Anomaly detection', 'React', 'Backend'],
  },
  {
    title: 'Forecast Explainability',
    period: '2024',
    summary:
      'Led development of an AI system that provides useful context around forecast-model predictions, with responsibility spanning the solution, demonstration, and related patent contribution.',
    tags: ['Explainable AI', 'LLMs', 'Tech lead'],
  },
  {
    title: 'Generative House Exterior',
    period: '2025–2026',
    summary:
      'Developed model workflows for generating consistent house-exterior views from elevation plans while following supplied textures and design requirements.',
    tags: ['SDXL', 'Image generation', 'Multi-view'],
  },
  {
    title: 'Multi-Style Image Transformation',
    period: '2023–2024',
    summary:
      'Worked across model training, desktop GUI, backend, frontend, and deployment for a component-aware artistic image-transformation system.',
    tags: ['LoRA', 'Kivy', 'SDXL', 'SAM'],
  },
  {
    title: 'AI Demo Delivery Platform',
    period: '2023–2024',
    summary:
      'Prepared several AI demonstrations and developed the shared portal, cloud infrastructure, Nginx setup, SSL, deployments, and ongoing maintenance.',
    tags: ['Azure', 'Nginx', 'Deployment'],
  },
  {
    title: 'Commercial-Friendly Model Research',
    period: '2023–2024',
    summary:
      'Proposed and conducted model-comparison studies for segmentation and object detection, producing reusable internal references for future project selection.',
    tags: ['Model evaluation', 'Computer vision', 'Research'],
  },
  {
    title: 'Applied AI Demonstrations',
    period: '2024',
    summary:
      'Delivered multiple short-cycle demonstrations covering conversational AI, executive communication, stadium experiences, and 2D-to-3D interfaces.',
    tags: ['LLMs', 'Gradio', 'Rapid prototyping'],
  },
] as const;

export const skillGroups = [
  {
    title: 'AI & machine learning',
    skills: [
      'Computer Vision',
      'Anomaly Detection',
      'Object Detection',
      'Segmentation',
      'Generative AI',
      'Inpainting',
      'Multimodal RAG',
      'OCR',
      'Forecast Explainability',
    ],
  },
  {
    title: 'Models & frameworks',
    skills: [
      'PyTorch',
      'OpenCV',
      'Stable Diffusion 1.5',
      'SDXL',
      'LoRA',
      'GDINO',
      'SAM',
      'TensorRT',
      'Language Models',
    ],
  },
  {
    title: 'Backend & interfaces',
    skills: [
      'Python',
      'FastAPI',
      'Flask',
      'REST APIs',
      'React',
      'JavaScript',
      'Kivy',
      'Gradio',
      'Testing',
    ],
  },
  {
    title: 'Infrastructure & data',
    skills: [
      'Docker',
      'Linux',
      'Google Cloud',
      'Azure',
      'Nginx',
      'PostgreSQL',
      'MongoDB',
      'Git',
      'Shell',
    ],
  },
] as const;

export const publications = [
  {
    type: 'Authored article',
    title: 'Combating the Malicious Use of AI-Powered Image Editing',
    year: '2024',
    href: 'https://www.chowagiken.co.jp/future-studio/combating_malicious_use/',
  },
  {
    type: 'Project overview',
    title: 'Visual Response RAG',
    year: '2026',
    href: 'https://www.chowagiken.co.jp/future-studio/visual-response-rag/',
  },
  {
    type: 'Video demonstration',
    title: 'Visual Response RAG in Action',
    year: '2026',
    href: 'https://www.chowagiken.co.jp/future-studio/demo-visual-response-rag/',
  },
  {
    type: 'Project overview',
    title: 'Forecast Visualization AI',
    year: '2026',
    href: 'https://www.chowagiken.co.jp/future-studio/forecast-visualization-ai/',
  },
] as const;

export const contributionCards = [
  {
    title: 'University AI mentoring',
    summary:
      'Lecturer-equivalent contribution to university AI programs through material preparation, lecture delivery, technical guidance, and project mentoring.',
    points: [
      "Prepared approximately one-third of the first program's lecture material.",
      'Delivered sessions shared with BRAC University and North South University students.',
      "Supported a mentored group that won the program's final prize.",
    ],
  },
  {
    title: 'Team and external contribution',
    summary:
      'Research documentation, junior-engineer support, Code Samurai participation, and presentation of company projects and technical capabilities to external stakeholders.',
    points: [
      'Reusable model-comparison documentation.',
      'Mentoring for engineers moving into unfamiliar AI work.',
      'Technical and project presentations for varied audiences.',
    ],
  },
] as const;

export const credentials = [
  {
    marker: 'GCP',
    title: 'Google Cloud Associate Cloud Engineer',
    detail: 'Professional cloud certification · Completed by 2025',
  },
  {
    marker: 'BSc',
    title: 'Electrical & Electronic Engineering',
    detail: 'BRAC University · 2014–2018 · CGPA 3.67',
  },
] as const;
