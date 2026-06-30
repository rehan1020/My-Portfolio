import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, TerminalSquare, Briefcase, Award, Cpu } from 'lucide-react';
import { useLocation } from 'wouter';

export function SplitGlassLayout() {
  const [, setLocation] = useLocation();
  const { profile, contact, projects, experience, skills, certifications } = PORTFOLIO_DATA;
  const featuredProject = projects.find(p => p.featured) || projects[0];
  
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Dynamic Background Orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 h-full">
        
        {/* LEFT PANEL: Sticky Header / Bio */}
        <div className="lg:col-span-5 h-full">
          <div className="lg:sticky lg:top-24 flex flex-col justify-between h-full lg:h-[calc(100vh-12rem)] space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{profile.status}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                {profile.name}
              </h1>
              <h2 className="text-2xl text-primary/80 mb-6 font-medium">{profile.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg max-w-md">
                {profile.bio}
              </p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{profile.location} • {contact.timezone}</span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-4">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Experience', path: '/experience' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Skills', path: '/skills' },
                  { name: 'Certifications', path: '/certifications' }
                ].map((link, i) => (
                  <button 
                    key={link.name}
                    onClick={() => setLocation(link.path)}
                    className="group flex items-center gap-4 text-muted-foreground hover:text-white transition-colors w-fit"
                  >
                    <span className="text-xs font-mono opacity-50 group-hover:text-primary group-hover:opacity-100 transition-all">0{i+1}</span>
                    <span className="font-medium tracking-wide">{link.name}</span>
                    <div className="h-[1px] w-8 bg-border group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-6 pt-8 mt-auto">
              <a href={contact.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                <Github className="w-6 h-6" />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* RIGHT PANEL: Scrollable Feed */}
        <div className="lg:col-span-7 pb-24">
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
            
            {/* Featured Project Glass Card */}
            <motion.div variants={item} className="glass-card cursor-pointer group" onClick={() => window.open(featuredProject.github, '_blank')}>
              <div className="flex justify-between items-start mb-4">
                <div className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20 shadow-[0_0_10px_rgba(var(--primary),0.2)]">Featured Project</div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{featuredProject.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{featuredProject.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {featuredProject.tags.map(tag => (
                  <span key={tag} className="glass-panel text-secondary-foreground text-xs px-3 py-1.5 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Recent Experience Glass Card */}
            <motion.div variants={item} className="glass-card group cursor-pointer" onClick={() => setLocation('/experience')}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2 text-white"><Briefcase className="w-5 h-5 text-primary" /> Recent Experience</h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="space-y-6">
                {experience.slice(0, 4).map((exp, i) => (
                  <div key={i} className="flex gap-4 items-start group/item">
                    <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center shrink-0 group-hover/item:border-primary/50 transition-colors">
                      <TerminalSquare className="w-5 h-5 text-muted-foreground group-hover/item:text-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white group-hover/item:text-primary transition-colors">{exp.title}</h4>
                      <div className="text-xs text-primary uppercase font-bold tracking-wider mt-1">{exp.company}</div>
                      <div className="text-xs text-muted-foreground mt-1">{exp.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Skills Glass Card */}
            <motion.div variants={item} className="glass-card group cursor-pointer" onClick={() => setLocation('/skills')}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2 text-white"><Cpu className="w-5 h-5 text-primary" /> Technical Core</h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="flex flex-wrap gap-2">
                {[...skills.languages, ...skills.ai_ml, ...skills.web].slice(0, 15).map(s => (
                  <span key={s} className="glass-panel text-xs px-3 py-1.5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors hover:border-primary/50">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Certifications Highlight */}
            <motion.div variants={item} className="glass-card group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6" onClick={() => setLocation('/certifications')}>
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2 mb-2 text-white"><Award className="w-5 h-5 text-primary" /> Certifications & Awards</h3>
                <p className="text-sm text-muted-foreground">Top tier recognition from Y Combinator, Anthropic, USAII, IBM, and Microsoft.</p>
              </div>
              <div className="glass-panel p-4 rounded-2xl flex items-center justify-center group-hover:border-primary/50 transition-colors shrink-0">
                <span className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                  {certifications.reduce((acc, cat) => acc + cat.items.length, 0)}+
                </span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
