export const profile = {
  name: 'Nazmus Sakib Abir',
  role: 'AI/ML Engineer · Technical Lead',
  location: 'Dhaka, Bangladesh',
  employer: 'Chowa Giken Corporation | Japan',
  email: 'nsabir2011@gmail.com',
  summary:
    'Applied AI engineer with professional experience since 2018, working across computer vision, generative AI, multimodal RAG, product engineering, and cloud deployment.',
  detail:
    'Current responsibilities combine technical investigation, project leadership, hands-on implementation, and delivery of usable AI systems under practical hardware, data, licensing, and timeline constraints.',
  patentHighlight: {
    lead: 'Contributor to',
    emphasis: 'three patent applications',
    detail: 'with lead contributions to two.',
  },
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
    organization: 'Chowa Giken Corporation | Japan',
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
      'Created and evolved computer-vision products for live video monitoring, owning core AI pipelines and production backends while expanding into full-stack product delivery.',
    highlights: [
      'Built real-time systems spanning face recognition, vehicle detection and ANPR, REST APIs, databases, caching, and WebSocket interactions.',
      'Improved recognition accuracy, multi-camera throughput, query performance, and application responsiveness.',
      'Expanded into frontend features and workflow improvements, including a substantial registration-system redesign.',
    ],
  },
] as const;

export const projects = [
  {
    title: 'Visual Response RAG',
    icon: 'document-visuals',
    period: '2024–2026',
    summary:
      'Proposed and led two generations of document-chat systems that combine written answers with relevant source visuals; contributed to a related patent application alongside hands-on engineering, demos, and team guidance.',
    tags: ['RAG', 'OCR', 'LLMs', 'Tech lead', 'Patent application'],
  },
  {
    title: 'Vision Inference Optimization',
    icon: 'speed',
    period: '2023',
    summary:
      'Optimized a 360-degree image-processing pipeline in about one week, making it more than 3× faster without retraining or changing its outputs.',
    tags: ['Computer vision', 'PyTorch', 'Performance'],
  },
  {
    title: 'Generative Floorplan Development',
    icon: 'floorplan',
    period: '2025–2026',
    summary:
      'Led first-stage base-floorplan preparation for constrained floorplan generation, then drove model development and evaluation, REST API delivery, deployment, and a related patent application.',
    tags: ['Generative AI', 'Image generation', 'FastAPI', 'Patent application'],
  },
  {
    title: 'Product Anomaly Detection',
    icon: 'anomaly',
    period: '2023–2024',
    summary:
      'Led the Bangladesh engineering team across backend and React interface development for data upload, model training, and inference, including performance and usability improvements.',
    tags: ['Anomaly detection', 'React', 'Backend'],
  },
  {
    title: 'Forecast Explainability',
    icon: 'forecast',
    period: '2024',
    summary:
      'Led development of an AI system that provides useful context around forecast-model predictions, with responsibility spanning the solution, demonstration, and related patent contribution.',
    tags: ['Explainable AI', 'LLMs', 'Tech lead'],
  },
  {
    title: 'Generative House Exterior',
    icon: 'house',
    period: '2025–2026',
    summary:
      'Developed model workflows for generating consistent house-exterior views from elevation plans while following supplied textures and design requirements.',
    tags: ['Image generation', 'Multi-view'],
  },
  {
    title: 'Multi-Camera Face Intelligence',
    icon: 'face-camera',
    period: '2018–2022',
    summary:
      'Built the entire production AI and backend system for real-time CCTV face monitoring, then expanded into performance optimization and full-stack product improvements.',
    tags: ['Face recognition', 'Real-time systems', 'Backend ownership'],
    link: {
      label: 'Watch product walkthrough',
      href: 'https://www.youtube.com/watch?v=htZk24_gaVs',
    },
  },
  {
    title: 'Vehicle & Number-Plate Intelligence',
    icon: 'vehicle',
    period: '2019–2022',
    summary:
      'Created a vehicle-monitoring prototype and owned its core AI and backend work for detecting vehicles and extracting number plates from CCTV feeds; later fixed and improved the adapted interface.',
    tags: ['Object detection', 'ANPR', 'Prototype'],
  },
  {
    title: 'Multi-Style Image Transformation',
    icon: 'styles',
    period: '2023–2024',
    summary:
      'Worked across model training, backend development, web UI development, and deployment for a component-aware artistic image-transformation system.',
    tags: ['Image generation', 'Segmentation', 'Deployment'],
  },
  {
    title: 'AI Demo Delivery Platform',
    icon: 'platform',
    period: '2023–2024',
    summary:
      'Prepared several AI demonstrations and developed the shared portal, cloud infrastructure, Nginx setup, SSL, deployments, and ongoing maintenance.',
    tags: ['Azure', 'Nginx', 'Deployment'],
  },
  {
    title: 'Commercial-Friendly Model Research',
    icon: 'research',
    period: '2023–2024',
    summary:
      'Proposed and led model-comparison research with a junior engineer across segmentation and object detection, producing reusable internal references for future project selection.',
    tags: ['Model evaluation', 'Computer vision', 'Research lead'],
  },
  {
    title: 'Applied AI Demonstrations',
    icon: 'demo',
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
      'Face Recognition',
      'Anomaly Detection',
      'Object Detection',
      'Object Tracking',
      'Keypoint Detection',
      'Segmentation',
      'Video Analytics',
      'ANPR',
      'Generative AI',
      'Inpainting',
      'Multimodal RAG',
      'OCR',
      'Forecast Explainability',
    ],
  },
  {
    title: 'Frameworks & model tooling',
    skills: [
      'PyTorch',
      'OpenCV',
      'Hugging Face Diffusers',
      'PEFT',
      'TensorRT',
      'vLLM',
      'LangChain',
      'LangGraph',
      'Language Models',
      'Image Generation Models',
    ],
  },
  {
    title: 'Backend & interfaces',
    skills: [
      'Python',
      'FastAPI',
      'Flask',
      'REST APIs',
      'WebSockets',
      'React',
      'Next.js',
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
      'SQLite',
      'Redis',
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
    links: [
      {
        label: 'View',
        href: 'https://www.chowagiken.co.jp/future-studio/combating_malicious_use/',
      },
    ],
  },
  {
    type: 'Project overview & demonstration',
    title: 'Visual Response RAG',
    year: '2026',
    links: [
      {
        label: 'Overview',
        href: 'https://www.chowagiken.co.jp/future-studio/visual-response-rag/',
      },
      {
        label: 'Video demo',
        href: 'https://www.chowagiken.co.jp/future-studio/demo-visual-response-rag/',
      },
    ],
  },
  {
    type: 'Project overview',
    title: 'Forecast Visualization AI',
    year: '2026',
    links: [
      {
        label: 'View',
        href: 'https://www.chowagiken.co.jp/future-studio/forecast-visualization-ai/',
      },
    ],
  },
] as const;

export const contributionCards = [
  {
    title: 'University AI teaching & mentoring',
    summary:
      'Helped conduct two annual NIPPON AI Dojo cohorts at BRAC University since 2025, delivering university-level AI lectures and mentoring students in both cohorts.',
    points: [
      "Prepared approximately one-third of the first program's lecture material.",
      'Delivered lecture sessions shared with BRAC University and North South University students.',
      "Supported a mentored group that won the program's final prize.",
    ],
    link: {
      label: 'About NIPPON AI Dojo at BRAC University',
      href: 'https://www.bracu.ac.bd/news/brac-university-collaborates-japan-ai-training-program',
    },
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
    link: null,
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
