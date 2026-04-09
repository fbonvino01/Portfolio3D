/**
 * portfolio.js
 * Single source of truth for all CV/portfolio content.
 * Edit this file to update the website content.
 */

export const meta = {
  name: 'Francesco Bonvino',
  role: 'Frontend Developer',
  email: 'francescobonvino2001@gmail.com',
  phone: '+39 346 942 4568',
  github: 'https://github.com/FrancescoBonvino',
  relocation: ['🇳🇱 Netherlands', '🇩🇪 Germany', '🇪🇸 Spain'],
};

export const stats = [
  { number: '4+',      label: 'Years of experience' },
  { number: '10+',     label: 'Enterprise campaigns' },
  { number: '3',       label: 'Core frameworks mastered' },
  { number: 'WCAG\n2.1', label: 'Accessibility specialist' },
];

export const skills = [
  {
    icon: '⚡', colorClass: 'icon-blue',
    title: 'Frontend',
    tags: ['Angular 2+', 'Vue.js 3', 'React', 'Redux', 'TypeScript',
           'JavaScript ES2023', 'HTML5', 'CSS3 / SCSS', 'Bootstrap', 'jQuery'],
  },
  {
    icon: '🌐', colorClass: 'icon-purple',
    title: '3D / XR',
    tags: ['Three.js', 'WebXR', 'LottieFiles', 'GLSL Shaders', '3D Web'],
  },
  {
    icon: '✅', colorClass: 'icon-green',
    title: 'Testing & QA',
    tags: ['Storybook', 'WAVE (WCAG 2.1)', 'Lighthouse', 'Gtmetrix',
           'AB Testing', 'Adobe Target'],
  },
  {
    icon: '📦', colorClass: 'icon-orange',
    title: 'CMS & SEO',
    tags: ['Adobe AEM', 'Builder.io', 'Google Analytics', 'Websitecarbon', 'SEO'],
  },
  {
    icon: '🔧', colorClass: 'icon-pink',
    title: 'DevOps & Tools',
    tags: ['Git / GitLab', 'Docker', 'Azure Web Apps', 'Gulp', 'Figma',
           'Jira / Trello', 'Mural'],
  },
  {
    icon: '⚙️', colorClass: 'icon-teal',
    title: 'Back-end Basics',
    tags: ['Node.js', 'Java / JavaEE', 'SQL', 'PostgreSQL', 'ChatGPT API', 'Agile / Scrum'],
  },
];

export const experience = [
  {
    period: 'May 2022 — Present',
    company: 'Exprivia S.p.A.',
    location: 'Molfetta (BA), Italy',
    role: 'Frontend Developer',
    client: '⚡ Client: Plenitude / ENI Group',
    bullets: [
      'Led frontend development of high-visibility digital campaigns: <strong>Sanremo 2023/24, UEFA Euro 2024, Caritas, Free Market</strong> — shipped on time within Agile sprints.',
      'Built and maintained an internal <strong>Single-Page Application (Digital Console)</strong> with Azure AD authentication, serving hundreds of internal users.',
      'Developed a <strong>Vue.js + ChatGPT live API chatbot</strong> integrated on eniplenitude.com, reducing customer service load.',
      'Created and integrated <strong>AEM editorial components</strong>, enabling non-technical editors to manage content autonomously.',
      'Implemented <strong>WCAG 2.1 accessibility</strong> standards across all projects; achieved Green Coding targets measured via Websitecarbon & Lighthouse.',
      'Participated in the <strong>Plenitude Hackathon (Milan, Mar 2024)</strong>: delivered a no-code landing page with Builder.io + Vercel within 5 days, presented to C-level stakeholders.',
    ],
  },
  {
    period: 'Nov 2021 — Apr 2022',
    company: 'Exprivia S.p.A.',
    location: 'Molfetta (BA), Italy',
    role: 'Frontend Developer Intern',
    client: '⚡ Clients: ENI Group · Mooney · Banca5',
    bullets: [
      'Developed and maintained <strong>Angular/AngularJS features</strong> for MyEni (ENI Group), Mooney WebbApp and Banca5 WebApp.',
      'Handled bug-fixing and UI enhancements using <strong>OpenText CMS</strong> and Angular component architecture.',
    ],
  },
];

export const projects = [
  {
    featured: true,
    tag: '✦ Open Source · Thesis Project',
    title: 'ARchive — Virtual Museum',
    desc: 'A WebXR virtual museum built with Three.js where any user can exhibit their own artwork. Showcases advanced 3D web capabilities, immersive UX and accessible design patterns.',
    tech: ['Three.js', 'WebXR', 'JavaScript', '3D Web', 'Open Source'],
    link: { label: 'github.com/FrancescoBonvino/archive-project', href: 'https://github.com/FrancescoBonvino/archive-project' },
    hasCanvas: true,
  },
  {
    tag: '⚡ Enterprise Campaign',
    title: 'Plenitude Special Projects',
    desc: 'Sole frontend developer within a dedicated Agile squad, owning end-to-end delivery of multiple concurrent campaigns under eniplenitude.com.',
    tech: ['Vue.js', 'Angular', 'AEM', 'TypeScript', 'SCSS', 'Azure'],
  },
  {
    tag: '🤖 AI Integration',
    title: 'AI Chatbot — eniplenitude.com',
    desc: 'Developed a live Vue.js + ChatGPT API chatbot integrated on the ENI Plenitude website, improving user self-service and reducing support requests.',
    tech: ['Vue.js 3', 'ChatGPT API', 'TypeScript', 'REST API'],
  },
  {
    tag: '🚀 Hackathon · 5 days',
    title: 'Plenitude Hackathon — Milan 2024',
    desc: 'Delivered a no-code landing page with Builder.io + Vercel within 5 days. Presented final solution to C-level stakeholders at ENI headquarters.',
    tech: ['Builder.io', 'Vercel', 'No-code', 'Rapid Prototyping'],
  },
];

export const education = [
  {
    year: '2024 — 2025',
    degree: 'B.Sc. Computer Engineering — Web Development',
    school: 'Università Mercatorum, Italy',
    note: 'Thesis: ARchive (WebXR virtual museum). Modules: web technologies, software architecture, databases.',
  },
  {
    year: '2020 — 2022',
    degree: 'ITS Diploma — Developer 4.0',
    grade: '93/100',
    school: 'Higher Technical Institute, Italy',
    note: 'Focus: Angular, Agile, QA, UX/UI, Java, SQL, Big Data & Cloud, Technical English.',
  },
  {
    year: '2016 — 2020',
    degree: 'Diploma — Arts & Multimedia (Liceo Artistico)',
    school: 'Italy',
    note: 'Multimedia, audiovisual production, graphic design, basic Python.',
  },
];

export const certifications = [
  '🛡️ ICDL Full-Standard & ICDL IT Security',
  '⚡ Vue.js — Udemy',
  '⚛️ React & Redux — Udemy',
  '🤖 AI Fundamentals — Udemy',
  '🌐 IT Support — Coursera',
  '🔗 Networking Fundamentals — Coursera',
  '📋 Project Management — Udemy',
  '🏆 EIPAS Certification',
];
