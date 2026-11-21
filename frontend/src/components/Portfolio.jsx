import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, GraduationCap, Mail, MapPin, Menu,
  Phone, Rocket, Terminal, X, ExternalLink, Globe
} from 'lucide-react';
import { translations } from '../translations';

/* ─── Social Icons ──────────────────────────────────────────────── */
const GithubIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* ─── Static Constants ──────────────────────────────────────────── */
const contactInfo = {
  name: 'Sidiahmed Moulay Abass',
  short: 'Sidiahmed',
  email: '24110@supnum.mr',
  phone: '34521001',
  github: 'https://github.com/SidA7MD',
  linkedin: 'https://linkedin.com',
};

const techStack = [
  { name: 'HTML5',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'PHP',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'Python',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'MySQL',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Prisma',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
  { name: 'Flutter',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'Git',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Docker',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
];

const reveal = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stars = [
  [8,12,2,.8],[15,78,1,.5],[22,32,1,.7],[27,88,2,.9],[34,18,1,.4],[39,66,2,.6],
  [46,9,1,.8],[52,42,1,.5],[57,92,2,.7],[63,25,1,.9],[68,74,1,.4],[73,14,2,.6],
  [78,56,1,.8],[83,38,2,.5],[88,82,1,.7],[93,17,1,.4],[96,63,2,.9],[12,52,1,.6],
  [31,48,1,.3],[71,34,2,.6],[49,70,1,.7],[18,95,1,.5],[42,28,2,.4],[59,8,1,.6],
];

/* ─── Project Card ──────────────────────────────────────────────── */
function ProjectCard({ project, index, previewText, isRtl }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="project-card-v2 group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e1118] flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Preview */}
      <div className="relative overflow-hidden" style={{ height: 220 }}>
        <img
          src={project.image}
          alt={`${project.name} preview`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay with button */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${project.color}25, #00000099)`,
            opacity: hovered ? 1 : 0,
          }}
        >
          <span
            className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white backdrop-blur-md border border-white/20 shadow-lg"
            style={{ background: `${project.color}35` }}
          >
            {previewText} <ExternalLink size={14} className={isRtl ? 'scale-x-[-1]' : ''} />
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0e1118] to-transparent" />
      </div>

      {/* Card Info */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-3 gap-2">
          <div>
            <span
              className="inline-block text-xs font-bold tracking-wider uppercase mb-1"
              style={{ color: project.color }}
            >
              {project.date} · {project.type}
            </span>
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
          </div>
          <div
            className="shrink-0 grid size-9 place-items-center rounded-full border transition-colors duration-300"
            style={{
              borderColor: hovered ? project.color : 'rgba(255,255,255,0.1)',
              color: hovered ? project.color : 'rgba(255,255,255,0.4)',
            }}
          >
            <ArrowUpRight size={16} className={isRtl ? 'scale-x-[-1]' : ''} />
          </div>
        </div>

        <p className="text-sm leading-6 text-white/50 flex-1">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border px-2.5 py-1 text-xs font-medium transition-colors duration-300"
              style={{
                borderColor: hovered ? `${project.color}40` : 'rgba(255,255,255,0.07)',
                color: hovered ? project.color : 'rgba(255,255,255,0.45)',
                background: hovered ? `${project.color}0d` : 'rgba(255,255,255,0.02)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Main Portfolio Component ───────────────────────────────────── */
export default function Portfolio() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'en';
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const t = translations[lang] || translations.en;
  const isRtl = t.dir === 'rtl';

  useEffect(() => {
    document.documentElement.setAttribute('dir', t.dir);
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('portfolio_lang', lang);
  }, [lang, t.dir]);

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
  };

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5).toFixed(3);
    const y = ((e.clientY - rect.top) / rect.height - 0.5).toFixed(3);
    e.currentTarget.style.setProperty('--mx', x);
    e.currentTarget.style.setProperty('--my', y);
  };

  const handlePointerLeave = (e) => {
    e.currentTarget.style.setProperty('--mx', '0');
    e.currentTarget.style.setProperty('--my', '0');
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = [
    { label: t.nav.about,     id: 'apropos' },
    { label: t.nav.stack,     id: 'stack' },
    { label: t.nav.projects,  id: 'projets' },
    { label: t.nav.education, id: 'formation' },
  ];

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'عربي' },
  ];

  return (
    <div
      dir={t.dir}
      className={`min-h-screen overflow-hidden portfolio-space ${isRtl ? 'rtl-mode' : ''}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* ── 3D Background Canvas ── */}
      <div className="space-canvas" aria-hidden="true">
        <div className="grid-3d-wrap">
          <div className="grid-3d" />
          <div className="grid-3d-accent" />
        </div>
        <div className="space-nebula space-nebula-one" />
        <div className="space-nebula space-nebula-two" />
        <div className="star-layer star-layer-far">
          {stars.map(([l, t, s, o], i) => (
            <span key={i} className="star" style={{ left:`${l}%`, top:`${t}%`, width:`${s}px`, height:`${s}px`, opacity:o }} />
          ))}
        </div>
        <div className="star-layer star-layer-near">
          {[12,29,57,76,91].map((l,i) => (
            <span key={i} className="bright-star" style={{ left:`${l}%`, top:`${[22,68,42,88,55][i]}%`, animationDelay:`${i*0.7}s` }} />
          ))}
        </div>
      </div>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-5 py-4">
        <div className="mx-auto max-w-6xl h-16 px-4 md:px-7 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0a0d14]/80 backdrop-blur-xl shadow-2xl">
          {/* Logo */}
          <button onClick={() => scrollTo('accueil')} className="flex items-center gap-3 text-white font-bold tracking-tight">
            <span className="grid size-9 place-items-center rounded-lg bg-[#10b981] text-[#11141b]">
              <Terminal size={18} strokeWidth={2.5} />
            </span>
            <span className="hidden sm:block">
              {contactInfo.short}<span className="text-[#10b981]">.dev</span>
            </span>
          </button>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-7 text-sm text-white/50">
            {navItems.map(({ label, id }) => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-link hover:text-white transition-colors">
                {label}
              </button>
            ))}
          </div>

          {/* Right items: Language Switcher + Contact */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <div className="flex items-center rounded-xl border border-white/10 bg-white/[0.04] p-1 gap-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => handleLanguageChange(l.code)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                    lang === l.code
                      ? 'bg-[#10b981] text-[#11141b] shadow-sm'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                  aria-label={`Switch language to ${l.label}`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:grid size-9 place-items-center rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/25 transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon size={16} />
            </a>

            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:flex items-center gap-2 rounded-lg bg-[#10b981] px-4 py-2 text-sm font-bold text-[#11141b] hover:bg-[#059669] transition-colors"
            >
              {t.nav.hireMe}
              <ArrowUpRight size={14} className={isRtl ? 'scale-x-[-1]' : ''} />
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#11151d] p-3 shadow-xl"
          >
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full rounded-lg px-4 py-3 text-start text-white/70 hover:bg-white/5 hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 mt-2">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#10b981] py-2.5 text-sm font-bold text-[#11141b]"
              >
                {t.nav.hireMe}
                <ArrowUpRight size={14} className={isRtl ? 'scale-x-[-1]' : ''} />
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        {/* ═══ HERO ════════════════════════════════════════════════ */}
        <section id="accueil" className="relative min-h-screen px-5 pt-36 pb-24 flex items-center">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />

          <div className="relative mx-auto max-w-6xl w-full grid lg:grid-cols-[1fr_420px] gap-16 items-center">
            {/* Left Content */}
            <motion.div initial="hidden" animate="visible" variants={reveal}>
              {/* Availability badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#10b981]/25 bg-[#10b981]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#34d399]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#10b981]" />
                </span>
                {t.hero.statusBadge}
              </div>

              {/* Name */}
              <h1 className="text-[clamp(2.8rem,7vw,6.2rem)] leading-[0.95] font-black tracking-[-0.04em] text-white">
                {contactInfo.short}
                <br />
                <span className="text-outline">{t.hero.titleSuffix}</span>
              </h1>

              {/* Role */}
              <div className="mt-6 flex items-center gap-4">
                <div className="h-px w-10 bg-[#10b981]" />
                <p className="text-lg md:text-xl font-semibold text-white/65">{t.hero.role}</p>
              </div>

              <p className="mt-6 max-w-lg text-base md:text-lg leading-8 text-white/45">
                {t.hero.tagline}
              </p>

              {/* Metrics */}
              <div className="mt-10 flex flex-wrap gap-10">
                {t.hero.stats.map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-3xl font-black text-white">{value}</p>
                    <p className="mt-0.5 text-sm text-white/40">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo('projets')}
                  className="group flex items-center gap-2 rounded-xl bg-[#10b981] px-6 py-3.5 font-bold text-[#11141b] shadow-[0_8px_32px_rgba(16,185,129,.25)] hover:bg-[#059669] transition-all"
                >
                  {t.hero.viewProjects}
                  <ArrowUpRight size={16} className={`transition-transform ${isRtl ? 'group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 scale-x-[-1]' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
                </button>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-bold text-white hover:border-white/25 hover:bg-white/[0.06] transition-all"
                >
                  <GithubIcon size={17} /> {t.hero.github}
                </a>
                <button
                  onClick={() => scrollTo('contact')}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-bold text-white hover:border-white/25 transition-all"
                >
                  <Mail size={17} /> {t.hero.contact}
                </button>
              </div>
            </motion.div>

            {/* Right — Developer Portrait Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, rotate: 1.5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.85, delay: 0.12 }}
              className="relative mx-auto lg:mx-0 w-full max-w-[420px]"
            >
              <div className="absolute -inset-4 rounded-[2.2rem] border border-[#10b981]/20 bg-gradient-to-tr from-[#10b981]/15 to-transparent rotate-3 blur-sm" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1119] p-3 shadow-2xl group">
                {/* Photo container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.6rem] bg-[#161b24]">
                  <img
                    src="/profile.jpg"
                    alt={contactInfo.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark vignette & gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1119] via-transparent to-transparent opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0d1119]/50 via-transparent to-transparent opacity-60" />

                  {/* Top-corner floating badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0d1119]/80 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold text-white shadow-lg">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-[#10b981]" />
                      </span>
                      <span>{t.hero.statusBadge}</span>
                    </div>
                    <div className="grid size-9 place-items-center rounded-full border border-white/15 bg-[#0d1119]/80 backdrop-blur-md text-[#10b981] shadow-lg">
                      <Rocket size={16} className={isRtl ? 'scale-x-[-1]' : ''} />
                    </div>
                  </div>

                  {/* Bottom glassmorphism info card */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#0d1119]/85 backdrop-blur-md p-4 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-[#10b981]">{t.hero.role}</p>
                        <p className="text-sm font-bold text-white">{contactInfo.name}</p>
                      </div>
                      <div className="text-end">
                        <p className="text-[10px] uppercase tracking-wider text-white/40">{t.hero.codeCard.locationLabel}</p>
                        <p className="text-xs font-medium text-white/80">{t.hero.codeCard.locationValue}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ ABOUT ═══════════════════════════════════════════════ */}
        <section id="apropos" className="px-5 py-24 border-t border-white/[0.05]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="mx-auto max-w-6xl grid md:grid-cols-[200px_1fr] gap-10 items-start"
          >
            <div>
              <p className="section-kicker">{t.about.kicker}</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">{t.about.title}</h2>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-[#0e1118] p-8 md:p-10">
              <p className="text-lg md:text-xl leading-relaxed text-white/70">{t.about.bio}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-[#10b981] transition-colors"
                >
                  <Mail size={15} /> {contactInfo.email}
                </a>
                <span className="flex items-center gap-2 text-sm text-white/50">
                  <MapPin size={15} /> {t.about.location}
                </span>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <GithubIcon size={15} /> {t.hero.github}
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ═══ TECH STACK ══════════════════════════════════════════ */}
        <section id="stack" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-12">
              <p className="section-kicker">{t.stack.kicker}</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">{t.stack.title}</h2>
              <p className="mt-4 text-white/40">{t.stack.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="tech-logo-card group flex flex-col items-center gap-2.5 rounded-xl border border-white/[0.07] bg-[#0e1118] p-4 hover:border-[#10b981]/30 hover:bg-[#111520] transition-all duration-250 cursor-default"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-8 w-8 object-contain transition-transform duration-250 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span className="text-center text-[10px] font-medium text-white/40 group-hover:text-white/70 transition-colors leading-tight">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PROJECTS ════════════════════════════════════════════ */}
        <section id="projets" className="px-5 py-24 border-t border-white/[0.05]">
          <div className="mx-auto max-w-6xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-12">
              <p className="section-kicker">{t.projects.kicker}</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">{t.projects.title}</h2>
              <p className="mt-4 text-white/40">{t.projects.subtitle}</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.projects.items.map((project, i) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={i}
                  previewText={t.projects.previewBtn}
                  isRtl={isRtl}
                />
              ))}
            </div>

            {/* Explore More Callout Banner */}
            {t.projects.githubCta && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0e121a]/70 backdrop-blur-sm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-white/15 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 text-[#10b981]">
                    <GithubIcon size={22} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">GitHub</h4>
                    <p className="text-sm text-white/50 max-w-xl leading-relaxed">{t.projects.githubCta.text}</p>
                  </div>
                </div>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-bold text-sm text-white hover:border-[#10b981]/40 hover:bg-[#10b981]/10 transition-all"
                >
                  {t.projects.githubCta.button}
                  <ArrowUpRight size={15} className={isRtl ? 'scale-x-[-1]' : ''} />
                </a>
              </motion.div>
            )}
          </div>
        </section>

        {/* ═══ EDUCATION ═══════════════════════════════════════════ */}
        <section id="formation" className="px-5 py-24">
          <div className="mx-auto max-w-6xl grid md:grid-cols-[200px_1fr] gap-10">
            <div>
              <p className="section-kicker">{t.education.kicker}</p>
              <h2 className="mt-3 text-4xl font-bold">{t.education.title}</h2>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              className="relative rounded-2xl border border-white/[0.07] bg-[#0e1118] p-8 md:p-10 overflow-hidden"
            >
              {/* Accent bar */}
              <div className={`absolute top-8 h-20 w-1 ${isRtl ? 'right-0 rounded-l' : 'left-0 rounded-r'} bg-[#10b981]`} />
              <div className="absolute right-0 top-0 w-48 h-48 bg-[#10b981] opacity-5 blur-[60px] rounded-full pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div>
                  <div className="mb-5 grid size-12 place-items-center rounded-xl bg-[#10b981]/10 text-[#34d399]">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{t.education.degree}</h3>
                  <p className="mt-2 font-semibold text-[#10b981]">{t.education.institution}</p>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-sm text-white/40">
                  {t.education.period}
                </span>
              </div>

              <p className="mt-7 leading-7 text-white/50">
                {t.education.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {t.education.topics.map((s) => (
                  <span key={s} className="rounded-md border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-sm text-white/45">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ CONTACT ═════════════════════════════════════════════ */}
        <section id="contact" className="px-5 py-24 border-t border-white/[0.05]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mx-auto max-w-6xl">
            <div className="rounded-2xl bg-[#10b981] p-10 md:p-14 overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")' }}
              />
              <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] opacity-60">{t.contact.kicker}</p>
                  <h2 className="mt-4 max-w-xl text-4xl md:text-5xl font-black tracking-tight text-[#11141b]">
                    {t.contact.title}
                  </h2>
                  <p className="mt-4 text-[#11141b] opacity-65 max-w-md">
                    {t.contact.subtitle}
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-w-[280px]">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 rounded-xl bg-[#11141b] px-5 py-4 font-bold text-white hover:bg-[#1a1f2b] transition-colors"
                  >
                    <Mail size={18} /> {contactInfo.email}
                  </a>
                  <a
                    href={`tel:+222${contactInfo.phone}`}
                    className="flex items-center gap-3 rounded-xl bg-[#11141b]/20 px-5 py-4 font-bold text-[#11141b] hover:bg-[#11141b]/30 transition-colors"
                  >
                    <Phone size={18} /> +222 {contactInfo.phone}
                  </a>
                  <div className="flex gap-3">
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#11141b]/20 px-4 py-3 font-bold text-[#11141b] hover:bg-[#11141b]/30 transition-colors text-sm"
                    >
                      <GithubIcon size={16} /> {t.contact.github}
                    </a>
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#11141b]/20 px-4 py-3 font-bold text-[#11141b] hover:bg-[#11141b]/30 transition-colors text-sm"
                    >
                      <LinkedinIcon size={16} /> {t.contact.linkedin}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="px-5 py-10 border-t border-white/[0.04]">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>© {new Date().getFullYear()} {contactInfo.name}. {t.footer.rights}</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2"><MapPin size={13} /> {t.footer.location}</span>
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <GithubIcon size={16} />
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
