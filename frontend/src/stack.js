// ─────────────────────────────────────────────────────────────────────────────
// Tech stack shown in the "Tech Stack" section.
//
// To add a skill: add { name: 'Tool name', icon: 'devicon-name' } to a group.
//   • icon  — optional; the folder name on https://devicon.dev (e.g. 'react', 'docker').
//             Leave it out and the tag shows the name only.
//   • core  — true when you have used it in 3+ projects (shown as a filled tag).
//   • label — use instead of `name` for words that need translating: { en, fr, ar }.
//
// The "core" flags below come from a scan of the public GitHub repos on 2026-11-28.
// ─────────────────────────────────────────────────────────────────────────────

export const iconUrl = (icon) => {
  const variant = icon === 'jest' ? 'plain' : 'original';
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${variant}.svg`;
};

// Tools used in almost every project, shown large at the top of the section.
export const mainStack = [
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Express', icon: 'express' },
  { name: 'MongoDB', icon: 'mongodb' },
];

export const stackGroups = [
  {
    id: 'frontend',
    title: { en: 'Frontend', fr: 'Frontend', ar: 'واجهات الويب' },
    desc: {
      en: 'Responsive interfaces, dashboards and multi-language apps.',
      fr: 'Interfaces responsives, tableaux de bord et applications multilingues.',
      ar: 'واجهات متجاوبة ولوحات تحكم وتطبيقات متعددة اللغات.',
    },
    items: [
      { name: 'React', icon: 'react', core: true },
      { name: 'JavaScript', icon: 'javascript', core: true },
      { name: 'TypeScript', icon: 'typescript', core: true },
      { name: 'HTML & CSS', icon: 'html5', core: true },
      { name: 'Tailwind CSS', icon: 'tailwindcss', core: true },
      { name: 'Vite', icon: 'vitejs', core: true },
      { name: 'React Router', icon: 'reactrouter', core: true },
      { name: 'daisyUI', core: true },
      { name: 'Framer Motion', core: true },
      { name: 'Material UI', icon: 'materialui' },
      { name: 'Zustand', icon: 'zustand' },
      { name: 'React Hook Form' },
      { name: 'TanStack Query' },
      { name: 'Recharts' },
      { name: 'Leaflet maps' },
      { name: 'i18next' },
    ],
  },
  {
    id: 'mobile',
    title: { en: 'Mobile', fr: 'Mobile', ar: 'تطبيقات الجوال' },
    desc: {
      en: 'Cross-platform apps that share one backend with the web.',
      fr: 'Applications multiplateformes qui partagent le même backend que le web.',
      ar: 'تطبيقات متعددة المنصات تتشارك الخادم نفسه مع الويب.',
    },
    items: [
      { name: 'React Native', icon: 'reactnative' },
      { name: 'Expo', icon: 'expo' },
      { name: 'Expo Router' },
      { label: { en: 'Push notifications', fr: 'Notifications push', ar: 'الإشعارات الفورية' } },
      { name: 'Flutter', icon: 'flutter' },
    ],
  },
  {
    id: 'backend',
    title: { en: 'Backend & APIs', fr: 'Backend & API', ar: 'الخوادم والواجهات البرمجية' },
    desc: {
      en: 'REST APIs with authentication, real-time updates and file uploads.',
      fr: 'API REST avec authentification, temps réel et envoi de fichiers.',
      ar: 'واجهات REST مع المصادقة والتحديث الفوري ورفع الملفات.',
    },
    items: [
      { name: 'Node.js', icon: 'nodejs', core: true },
      { name: 'Express', icon: 'express', core: true },
      { label: { en: 'REST APIs', fr: 'API REST', ar: 'واجهات REST' }, core: true },
      { label: { en: 'JWT authentication', fr: 'Authentification JWT', ar: 'مصادقة JWT' }, core: true },
      { name: 'Socket.IO', icon: 'socketio', core: true },
      { label: { en: 'File uploads (Multer)', fr: 'Envoi de fichiers (Multer)', ar: 'رفع الملفات (Multer)' }, core: true },
      { label: { en: 'API security (Helmet, rate limiting)', fr: 'Sécurité API (Helmet, limitation de débit)', ar: 'أمان الواجهات (Helmet، تحديد المعدل)' }, core: true },
      { name: 'Cloudinary' },
      { name: 'PHP', icon: 'php' },
      { name: 'Java (SOAP / WSDL)', icon: 'java' },
    ],
  },
  {
    id: 'data',
    title: { en: 'Databases', fr: 'Bases de données', ar: 'قواعد البيانات' },
    desc: {
      en: 'Document and relational databases, with ORMs and caching.',
      fr: 'Bases documentaires et relationnelles, avec ORM et cache.',
      ar: 'قواعد بيانات وثائقية وعلائقية، مع ORM والتخزين المؤقت.',
    },
    items: [
      { name: 'MongoDB', icon: 'mongodb', core: true },
      { name: 'Mongoose', icon: 'mongoose', core: true },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Redis', icon: 'redis' },
    ],
  },
  {
    id: 'iot',
    title: { en: 'IoT & Embedded', fr: 'IoT & Embarqué', ar: 'إنترنت الأشياء والأنظمة المدمجة' },
    desc: {
      en: 'Sensors, microcontrollers and drones connected to software.',
      fr: 'Capteurs, microcontrôleurs et drones reliés au logiciel.',
      ar: 'حساسات ومتحكمات دقيقة وطائرات مسيّرة متصلة بالبرمجيات.',
    },
    items: [
      { name: 'Arduino', icon: 'arduino' },
      { name: 'C++', icon: 'cplusplus' },
      { label: { en: 'Sensors', fr: 'Capteurs', ar: 'الحساسات' } },
      { label: { en: 'Flight controllers', fr: 'Contrôleurs de vol', ar: 'وحدات التحكم في الطيران' } },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    id: 'ops',
    title: { en: 'Testing & Deployment', fr: 'Tests & Déploiement', ar: 'الاختبار والنشر' },
    desc: {
      en: 'Version control, automated tests and shipping apps online.',
      fr: 'Gestion de versions, tests automatisés et mise en ligne.',
      ar: 'إدارة الإصدارات والاختبارات الآلية ونشر التطبيقات.',
    },
    items: [
      { name: 'Git & GitHub', icon: 'git', core: true },
      { name: 'Vercel', icon: 'vercel', core: true },
      { name: 'Docker', icon: 'docker' },
      { name: 'Render' },
      { name: 'Jest & Supertest', icon: 'jest' },
      { name: 'Linux', icon: 'linux' },
    ],
  },
];
