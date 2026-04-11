import React from 'react';
import { Globe, Mail, Phone, MapPin, ExternalLink, Code2, GraduationCap, Briefcase, Languages, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const cvData = {
        name: "Sid Ahmed Moulay Abass",
        title: "Software Engineer",
        contact: {
            phone: "+222 34521001",
            email: "24110@supnum.mr",
            location: "Nouakchott, Tevrag-Zeyna, SND",
            github: "https://github.com/SidA7MD"
        },
        about: "Développeur logiciel motivé, passionné par la création d’applications pratiques et centrées utilisateur, et par la résolution de problèmes réels grâce à la technologie. Compétent en développement front-end et back-end, avec une expérience dans la réalisation de projets full-stack utilisant des outils et frameworks modernes. Intéressé par l’écriture d’un code propre, l’apprentissage continu et le développement de solutions numériques innovantes.",
        formation: [
            {
                university: "SupNum University",
                degree: "Licence en Génie Logiciel",
                period: "2024 – Présent"
            }
        ],
        skills: {
            programming: ["Java", "C++", "Python", "PHP", "Shell", "Javascript (Node.js)"],
            frameworks: ["React.js", "Express.js", "Laravel"],
            databases: ["SQL", "MongoDB"],
            tools: ["Git", "Docker"]
        },
        projects: [
            {
                name: "Environmental Monitoring App",
                description: "Développement d’une application affichant des données environnementales (température, humidité, niveaux de gaz) provenant d’un dispositif.",
                role: "Gestion de l’équipe de développement en tant que leader de projet.",
                link: "https://github.com/SidA7MD/iset"
            },
            {
                name: "IHSAN",
                description: "Création d’une plateforme caritative transparente permettant des dons ciblés et vérifiables tout en préservant la dignité des bénéficiaires.",
                role: "Conception et développement de l’architecture full-stack, incluant les flux de dons sécurisés, les mises à jour en temps réel et la vérification immuable des transactions.",
                link: "https://github.com/SidA7MD/Defi2"
            },
            {
                name: "Smart Decide",
                description: "Contribution au développement d’une plateforme de prise de décision collective sécurisée et alimentée par l’intelligence artificielle.",
                role: "Participation à la conception conceptuelle, à l’architecture système et au modèle économique.",
                link: "https://github.com/SidA7MD/smart-decide-1"
            }
        ],
        languages: ["Arabe", "Anglais", "Français"]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen text-white bg-transparent selection:bg-[#4F7FD4]/30 selection:text-white">
            {/* Header / Hero Section */}
            <header className="relative pt-32 pb-24 px-6 overflow-hidden flex flex-col items-center text-center">
                <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-10">
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative group mt-4 mb-4"
                    >
                        <img 
                            src="/Image.jpeg" 
                            alt={cvData.name} 
                            className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-[4px] border-white/10 shadow-2xl transition duration-500 group-hover:border-white/30 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                        />
                    </motion.div>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            <span className="text-white">{cvData.name.split(' ').slice(0, 2).join(' ')}</span>
                            <br className="hidden md:block" />
                            <span className="md:ml-4 bg-gradient-to-r from-[#4F7FD4] to-[#7C5DBF] bg-clip-text text-transparent">
                                {cvData.name.split(' ').slice(2).join(' ')}
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 mb-10 font-light tracking-wide max-w-2xl">{cvData.title}</p>
                        
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href={`mailto:${cvData.contact.email}`} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <Mail size={18} /> {cvData.contact.email}
                            </a>
                            <a href={`tel:${cvData.contact.phone}`} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <Phone size={18} /> {cvData.contact.phone}
                            </a>
                            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 shadow-lg">
                                <MapPin size={18} /> {cvData.contact.location}
                            </div>
                            <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <Globe size={18} /> GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 pb-20 space-y-32">
                {/* About Section */}
                <motion.section 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass-panel p-8 md:p-12 rounded-3xl hover:border-white/10 hover:shadow-2xl transition-all duration-500"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <User className="text-[#4F7FD4]" />
                        <h2 className="text-2xl font-semibold uppercase tracking-widest text-[#4F7FD4]">À Propos</h2>
                    </div>
                    <p className="text-xl leading-relaxed text-white/80 font-light italic">
                        "{cvData.about}"
                    </p>
                </motion.section>

                {/* Skills Section */}
                <section>
                    <div className="flex items-center gap-3 mb-12">
                        <Code2 className="text-[#4F7FD4]" />
                        <h2 className="text-2xl font-semibold uppercase tracking-widest text-[#4F7FD4]">Compétences</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(cvData.skills).map(([category, skills], idx) => (
                            <motion.div 
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-panel p-6 rounded-3xl hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(79,127,212,0.1)] border border-white/5 hover:border-[#4F7FD4]/30 transition-all duration-300 space-y-5 flex flex-col"
                            >
                                <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map(skill => (
                                        <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-[#4F7FD4]/20 hover:border-[#4F7FD4]/50 hover:text-white transition-all">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section>
                    <div className="flex items-center gap-3 mb-12">
                        <Briefcase className="text-[#4F7FD4]" />
                        <h2 className="text-2xl font-semibold uppercase tracking-widest text-[#4F7FD4]">Projets Highlights</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {cvData.projects.map((project, idx) => (
                            <motion.div 
                                key={project.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="group glass-panel p-8 rounded-3xl flex flex-col hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(79,127,212,0.15)] border border-white/5 hover:border-[#4F7FD4]/50 transition-all duration-500"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold group-hover:text-[#4F7FD4] transition-colors">{project.name}</h3>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-[#4F7FD4]/20 text-white/50 hover:text-[#4F7FD4] transition-all">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                                <p className="text-white/60 mb-6 flex-grow leading-relaxed">{project.description}</p>
                                <div className="pt-6 border-t border-white/5">
                                    <p className="text-sm text-white/40 italic flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#4F7FD4]"></div>
                                        {project.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Formation Section */}
                    <section className="glass-panel p-8 md:p-10 rounded-3xl hover:-translate-y-1 hover:shadow-2xl hover:border-white/10 transition-all duration-500 h-full">
                        <div className="flex items-center gap-3 mb-10">
                            <GraduationCap className="text-[#4F7FD4]" />
                            <h2 className="text-2xl font-semibold uppercase tracking-widest text-[#4F7FD4]">Formation</h2>
                        </div>
                        <div className="space-y-8">
                            {cvData.formation.map((edu, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l border-white/10"
                                >
                                    <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[#4F7FD4] shadow-[0_0_10px_rgba(79,127,212,0.5)]"></div>
                                    <h3 className="text-xl font-bold mb-1">{edu.university}</h3>
                                    <p className="text-[#4F7FD4] font-medium mb-1">{edu.degree}</p>
                                    <p className="text-white/40 text-sm">{edu.period}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Languages Section */}
                    <section className="glass-panel p-8 md:p-10 rounded-3xl hover:-translate-y-1 hover:shadow-2xl hover:border-white/10 transition-all duration-500 h-full">
                        <div className="flex items-center gap-3 mb-10">
                            <Languages className="text-[#4F7FD4]" />
                            <h2 className="text-2xl font-semibold uppercase tracking-widest text-[#4F7FD4]">Langues</h2>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {cvData.languages.map((lang, idx) => (
                                <motion.div 
                                    key={lang}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#4F7FD4]/30 text-center flex-grow transition-colors"
                                >
                                    <span className="text-lg font-semibold tracking-wide text-white/90">{lang}</span>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="py-12 px-6 border-t border-white/5 text-center">
                <p className="text-white/30 text-sm tracking-widest uppercase">
                    © 2024 {cvData.name} • Designed for Excellence
                </p>
            </footer>
        </div>
    );
};

export default Portfolio;
