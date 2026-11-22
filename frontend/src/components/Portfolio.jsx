import { useState, useEffect, useRef } from 'react';
import { translations } from '../translations';

// ── Inline SVG icons ────────────────────────────────────────────────────────
const GithubIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const ExternalIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

// ── Tech logos ────────────────────────────────────────────────────────────────
const techLogos = [
  { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Flutter',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Arduino',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  { name: 'C++',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Prisma',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
  { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Linux',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
];

const skills = [
  { name: 'React / Next.js', pct: 90 },
  { name: 'Node.js / Express', pct: 85 },
  { name: 'Flutter / Mobile', pct: 80 },
  { name: 'Python / AI Scripts', pct: 75 },
  { name: 'MySQL / MongoDB', pct: 85 },
  { name: 'Arduino / IoT', pct: 70 },
];

function SkillBar({ name, pct, animate }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: animate ? `${pct}%` : '0%' }} />
      </div>
    </div>
  );
}

function ProjectCard({ project, previewLabel }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-top">
        <span className="project-type">{project.type}</span>
        <span className="project-date">{project.date}</span>
      </div>
      <div className={`project-img-wrap${hovered ? ' hovered' : ''}`}>
        <img src={project.image} alt={project.name} className="project-img" />
        <div className="project-img-overlay" style={{ background: `${project.color}22` }} />
      </div>
      <div className="project-body">
        <h3 className="project-name" style={{ color: project.color }}>{project.name}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-stack">
          {project.stack.map((t) => (
            <span key={t} className="stack-pill" style={{ borderColor: project.color, color: project.color }}>{t}</span>
          ))}
        </div>
        <div className={`project-cta${hovered ? ' visible' : ''}`}>
          <span className="project-preview-btn">{previewLabel} <ExternalIcon /></span>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio_lang') || 'en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const t = translations[lang];
  const isRTL = t.dir === 'rtl';

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  // Lock scroll on body when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = ['home', 'about', 'stack', 'projects', 'education', 'contact'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      return obs;
    });

    const skillsEl = document.getElementById('stack');
    if (skillsEl) {
      const skillObs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setSkillsVisible(true); },
        { threshold: 0.15 }
      );
      skillObs.observe(skillsEl);
      observers.push(skillObs);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observers.forEach((o) => o && o.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const homeLabel = lang === 'ar' ? 'الرئيسية' : lang === 'fr' ? 'Accueil' : 'Home';
  const contactLabel = lang === 'ar' ? 'تواصل' : 'Contact';

  const navLinks = [
    { id: 'home',      label: homeLabel },
    { id: 'about',     label: t.nav.about },
    { id: 'stack',     label: t.nav.stack },
    { id: 'projects',  label: t.nav.projects },
    { id: 'education', label: t.nav.education },
    { id: 'contact',   label: contactLabel },
  ];

  const contactInfo = {
    email: '24110@supnum.mr',
    github: 'https://github.com/SidA7MD',
    linkedin: 'https://linkedin.com',
  };

  const specialties = [
    {
      num: '01',
      title: lang === 'en' ? 'Web Development' : lang === 'fr' ? 'Développement Web' : 'تطوير الويب',
      desc: lang === 'en'
        ? 'Full-stack platforms using React, Node.js, and modern databases.'
        : lang === 'fr'
        ? 'Plateformes full-stack avec React, Node.js et bases de données modernes.'
        : 'منصات متكاملة باستخدام React وNode.js وقواعد بيانات حديثة.',
    },
    {
      num: '02',
      title: lang === 'en' ? 'Mobile Apps' : lang === 'fr' ? 'Apps Mobiles' : 'تطبيقات الجوال',
      desc: lang === 'en'
        ? 'Cross-platform apps built with Flutter & React Native.'
        : lang === 'fr'
        ? 'Applications multiplateformes avec Flutter & React Native.'
        : 'تطبيقات جوال متعددة المنصات بـ Flutter وReact Native.',
    },
    {
      num: '03',
      title: lang === 'en' ? 'IoT & Embedded' : lang === 'fr' ? 'IoT & Embarqué' : 'إنترنت الأشياء',
      desc: lang === 'en'
        ? 'Hardware + software systems, drones, sensors, and real-time monitoring.'
        : lang === 'fr'
        ? 'Systèmes matériel + logiciel, drones, capteurs et surveillance temps réel.'
        : 'أنظمة عتاد وبرمجيات، طائرات مسيّرة، حساسات، ومراقبة فورية.',
    },
  ];

  return (
    <div className={`pf-root${isRTL ? ' rtl' : ''}`}>

      {/* ── Sidebar / Drawer ─────────────────────────── */}
      <aside className={`sidebar${scrolled ? ' scrolled' : ''}${menuOpen ? ' open' : ''}`}>
        <div className="sidebar-top-bar">
          <div className="sidebar-logo" onClick={() => scrollTo('home')}>
            Sidiahmed<span className="logo-dot">.</span>
          </div>
          <button
            className="sidebar-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link${activeSection === link.id ? ' active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              <span>{link.label}</span>
              {activeSection === link.id && <ArrowIcon />}
            </button>
          ))}
        </nav>

        <div className="lang-switcher">
          {['en', 'fr', 'ar'].map((l) => (
            <button key={l} className={`lang-btn${lang === l ? ' active' : ''}`} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <a href={`mailto:${contactInfo.email}`} className="sidebar-email">{contactInfo.email}</a>

        <div className="sidebar-socials">
          <a href={contactInfo.github} target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub"><GithubIcon size={18} /></a>
          <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
        </div>
      </aside>

      {/* ── Mobile header ───────────────────────────── */}
      <header className={`mobile-header${scrolled ? ' scrolled' : ''}`}>
        <div className="mobile-header-logo" onClick={() => scrollTo('home')}>
          Sidiahmed<span className="logo-dot">.</span>
        </div>
        <div className="mobile-header-right">
          <div className="mobile-header-lang">
            {['en', 'fr', 'ar'].map((l) => (
              <button
                key={l}
                className={`mobile-lang-pill${lang === l ? ' active' : ''}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}

      {/* ── Main content ─────────────────────────────── */}
      <main className="pf-main">

        {/* ══ HERO ══════════════════════════════════════ */}
        <section id="home" className="section hero-section">
          <span className="section-number-bg" aria-hidden="true">01</span>

          <div className="hero-inner">
            {/* Portrait with diamond accent shape */}
            <div className="diamond-wrap">
              <div className="diamond-bg" />
              <img src="/profile.jpg" alt="Sidiahmed Moulay Abass" className="diamond-photo" />
              <div className="avatar-badge">
                <span className="avatar-status-dot-wrap">
                  <span className="avatar-status-ping" />
                  <span className="avatar-status-dot" />
                </span>
                <span className="avatar-status-text">
                  {lang === 'ar' ? 'متاح للمشاريع' : lang === 'fr' ? 'Disponible' : 'Available for work'}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="hero-text">
              <span className="role-label">
                {lang === 'en' ? 'FULL-STACK & IoT ENGINEER'
                  : lang === 'fr' ? 'INGÉNIEUR FULL-STACK & IoT'
                  : 'مهندس برمجيات شامل وإنترنت الأشياء'}
              </span>
              <h1 className="hero-name">
                <span className="name-first">Sidiahmed</span>
                <span className="name-last">Moulay Abass</span>
              </h1>
              <p className="hero-tagline">{t.hero.tagline}</p>

              <div className="hero-actions">
                <button className="btn-primary" onClick={() => scrollTo('projects')}>
                  {lang === 'en' ? 'VIEW ALL WORKS' : lang === 'fr' ? 'VOIR MES TRAVAUX' : 'عرض كل الأعمال'}
                </button>
                <a href={contactInfo.github} target="_blank" rel="noreferrer" className="btn-outline">
                  GitHub&nbsp;<GithubIcon size={15} />
                </a>
              </div>

              <div className="hero-stats">
                {t.hero.stats.map((s) => (
                  <div key={s.label} className="stat-item">
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specialties */}
          <div className="specialties-row">
            {specialties.map((sp) => (
              <div key={sp.num} className="specialty-col">
                <span className="sp-num">{sp.num}</span>
                <h4 className="sp-title">{sp.title}</h4>
                <p className="sp-desc">{sp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ ABOUT ══════════════════════════════════════ */}
        <section id="about" className="section about-section">
          <span className="section-number-bg" aria-hidden="true">02</span>
          <div className="section-kicker">{t.about.kicker}</div>
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-grid">
            <div className="about-bio">
              <p>{t.about.bio}</p>
              <div className="about-location">
                <span className="location-dot" />{t.about.location}
              </div>
            </div>
            <div className="about-highlights">
              {[
                { n: '15+', l: lang === 'en' ? 'Projects Built' : lang === 'fr' ? 'Projets réalisés' : 'مشروعاً منجزاً' },
                { n: '3+',  l: lang === 'en' ? 'Years of Coding' : lang === 'fr' ? 'Années de code'   : 'سنوات خبرة' },
                { n: '14+', l: lang === 'en' ? 'Technologies'    : lang === 'fr' ? 'Technologies'      : 'تقنية' },
              ].map((h) => (
                <div key={h.n} className="highlight-card">
                  <span className="highlight-num">{h.n}</span>
                  <span className="highlight-label">{h.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TECH STACK ═════════════════════════════════ */}
        <section id="stack" className="section stack-section">
          <span className="section-number-bg" aria-hidden="true">03</span>
          <div className="section-kicker">{t.stack.kicker}</div>
          <h2 className="section-title">{t.stack.title}</h2>
          <p className="section-subtitle">{t.stack.subtitle}</p>

          <div className="stack-skills-grid">
            <div className="skills-col">
              {skills.map((s) => (
                <SkillBar key={s.name} name={s.name} pct={s.pct} animate={skillsVisible} />
              ))}
              <button className="btn-primary view-works-btn" onClick={() => scrollTo('projects')}>
                {lang === 'en' ? 'VIEW ALL WORKS' : lang === 'fr' ? 'VOIR MES TRAVAUX' : 'عرض الأعمال'}
              </button>
            </div>
            <div className="logos-col">
              <div className="tech-logos-grid">
                {techLogos.map((tech) => (
                  <div key={tech.name} className="tech-logo-item">
                    <img src={tech.icon} alt={tech.name} className="tech-logo-img" />
                    <span className="tech-logo-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROJECTS ═══════════════════════════════════ */}
        <section id="projects" className="section projects-section">
          <span className="section-number-bg" aria-hidden="true">04</span>
          <div className="section-kicker">{t.projects.kicker}</div>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>

          <div className="projects-grid">
            {t.projects.items.map((p) => (
              <ProjectCard key={p.name} project={p} previewLabel={t.projects.previewBtn} />
            ))}
          </div>

          <div className="github-cta">
            <p className="github-cta-text">{t.projects.githubCta.text}</p>
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="btn-primary">
              {t.projects.githubCta.button}&nbsp;<GithubIcon size={15} />
            </a>
          </div>
        </section>

        {/* ══ EDUCATION ══════════════════════════════════ */}
        <section id="education" className="section edu-section">
          <span className="section-number-bg" aria-hidden="true">05</span>
          <div className="section-kicker">{t.education.kicker}</div>

          <div className="edu-grid">
            <div className="edu-col">
              <h2 className="edu-big-title">
                {lang === 'en' ? 'Education' : lang === 'fr' ? 'Formation' : 'التعليم'}
              </h2>
              <div className="edu-timeline">
                <div className="edu-entry">
                  <span className="edu-period">{t.education.period}</span>
                  <h3 className="edu-degree">{t.education.degree}</h3>
                  <p className="edu-institution">{t.education.institution}</p>
                  <p className="edu-desc">{t.education.description}</p>
                  <div className="edu-topics">
                    {t.education.topics.map((tp) => (
                      <span key={tp} className="topic-pill">{tp}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="edu-col">
              <h2 className="edu-big-title">
                {lang === 'en' ? 'Experiences' : lang === 'fr' ? 'Expériences' : 'الخبرات'}
              </h2>
              <div className="edu-timeline">
                <div className="edu-entry">
                  <span className="edu-period">2025 – {lang === 'en' ? 'Present' : lang === 'fr' ? 'Présent' : 'الحاضر'}</span>
                  <h3 className="edu-degree">
                    {lang === 'en' ? 'Freelance Full-Stack Developer'
                      : lang === 'fr' ? 'Développeur Full-Stack Freelance'
                      : 'مطوّر مستقل شامل'}
                  </h3>
                  <p className="edu-institution">Self-employed</p>
                  <p className="edu-desc">
                    {lang === 'en'
                      ? 'Building web and mobile platforms for local clients — e-learning, charity, and attendance management systems.'
                      : lang === 'fr'
                      ? "Développement de plateformes web et mobiles pour clients locaux — systèmes d'e-learning, caritatifs et de gestion des présences."
                      : 'تطوير منصات ويب وجوال للعملاء المحليين — أنظمة تعليمية وخيرية وإدارة حضور.'}
                  </p>
                </div>
                <div className="edu-entry">
                  <span className="edu-period">2024 – 2025</span>
                  <h3 className="edu-degree">
                    {lang === 'en' ? 'IoT & Robotics Engineer (Academic)'
                      : lang === 'fr' ? 'Ingénieur IoT & Robotique (Académique)'
                      : 'مهندس IoT وروبوتيكا (أكاديمي)'}
                  </h3>
                  <p className="edu-institution">SupNum — Nouakchott</p>
                  <p className="edu-desc">
                    {lang === 'en'
                      ? 'Designed and built autonomous drone hardware, sensor networks, and real-time environmental monitoring stations.'
                      : lang === 'fr'
                      ? "Conception et réalisation de drones autonomes, réseaux de capteurs et stations de surveillance environnementale temps réel."
                      : 'تصميم وبناء طائرات مسيّرة ذاتية، شبكات حساسات ومحطات رصد بيئي فوري.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ CONTACT ════════════════════════════════════ */}
        <section id="contact" className="section contact-section">
          <span className="section-number-bg" aria-hidden="true">06</span>
          <div className="section-kicker">{t.contact.kicker}</div>
          <h2 className="contact-title">{t.contact.title}</h2>
          <p className="contact-sub">{t.contact.subtitle}</p>

          <div className="contact-cards">
            <a href={`mailto:${contactInfo.email}`} className="contact-card">
              <span className="contact-card-label">Email</span>
              <span className="contact-card-value">{contactInfo.email}</span>
            </a>
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-card-label">GitHub</span>
              <span className="contact-card-value">github.com/SidA7MD</span>
            </a>
          </div>

          <div className="contact-cta-row">
            <a href={`mailto:${contactInfo.email}`} className="btn-primary large">
              {lang === 'en' ? "Let's Talk" : lang === 'fr' ? 'Discutons' : 'تواصل معي'}
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
              <LinkedinIcon size={15} />&nbsp;LinkedIn
            </a>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────── */}
        <footer className="pf-footer">
          <span>© {new Date().getFullYear()} Sidiahmed Moulay Abass · {t.footer.rights}</span>
          <span>{t.footer.location}</span>
        </footer>
      </main>

      {/* ── Floating Back to Top Button ──────────────── */}
      <button
        className={`back-to-top-btn${showBackToTop ? ' visible' : ''}`}
        onClick={() => scrollTo('home')}
        aria-label="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}
