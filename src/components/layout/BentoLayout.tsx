import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight, 
  MapPin, 
  Code2, 
  Cpu, 
  TerminalSquare, 
  Briefcase,
  User,
  Award
} from 'lucide-react';
import { useLocation } from 'wouter';

export function BentoLayout() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const { profile, contact, projects, skills, experience } = PORTFOLIO_DATA;
  const featuredProject = projects.find(p => p.featured) || projects[0];
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 lg:p-12 overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 relative z-10"
      >
        {/* HERO / BIO (Span 2x2) */}
        <motion.div variants={item} className="bento-card md:col-span-2 md:row-span-2 flex flex-col justify-between group cursor-pointer hover:border-primary/50" onClick={() => setLocation('/about')}>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{profile.status}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{profile.name}</h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">{profile.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{profile.bio}</p>
            <p className="text-muted-foreground leading-relaxed text-sm border-l-2 border-primary/50 pl-4">{profile.currentRoles}</p>
          </div>
        </motion.div>

        {/* MAP / LOCATION (Span 1x1) */}
        <motion.div variants={item} className="bento-card md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center overflow-hidden relative group">
          <MapPin className="w-10 h-10 text-primary/50 mb-3 group-hover:scale-110 transition-transform duration-500" />
          <h3 className="text-lg font-bold">Based in {profile.location}</h3>
          <p className="text-sm text-muted-foreground mt-1">{contact.timezone}</p>
        </motion.div>

        {/* CERTIFICATIONS (Span 1x1) */}
        <motion.div variants={item} className="bento-card bg-primary/10 border-primary/20 md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-primary/20 transition-colors" onClick={() => setLocation('/certifications')}>
          <Award className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
          <div className="text-xl font-bold">Certifications</div>
          <div className="text-muted-foreground mt-1 text-sm">{PORTFOLIO_DATA.certifications.length} Categories</div>
        </motion.div>

        {/* FEATURED PROJECT (Span 2x1) */}
        <motion.div variants={item} className="bento-card md:col-span-2 md:row-span-1 flex flex-col justify-between group cursor-pointer hover:border-primary/50" onClick={() => window.open(featuredProject.github, '_blank')}>
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">Featured Project</div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-3xl font-bold mb-3">{featuredProject.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{featuredProject.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {featuredProject.tags.map(tag => (
                <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-md font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SOCIAL LINKS (Span 2x1) */}
        <motion.div variants={item} className="bento-card md:col-span-2 md:row-span-1 flex items-center justify-around">
          <a href={contact.github} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group p-2">
            <div className="p-4 rounded-full bg-secondary group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">GitHub</span>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group p-2">
            <div className="p-4 rounded-full bg-secondary group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">LinkedIn</span>
          </a>
          <a href={`mailto:${contact.email}`} className="flex flex-col items-center gap-2 group p-2">
            <div className="p-4 rounded-full bg-secondary group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">Email</span>
          </a>
        </motion.div>

        {/* SKILLS (Span 2x1) */}
        <motion.div variants={item} className="bento-card md:col-span-2 md:row-span-1 flex flex-col group cursor-pointer hover:border-primary/50" onClick={() => setLocation('/skills')}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2"><Code2 className="w-5 h-5 text-primary" /> Stack</h3>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-4 flex-1">
            <div>
              <div className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Languages</div>
              <div className="flex flex-wrap gap-1.5">
                {skills.languages.map(s => <span key={s} className="text-[10px] bg-secondary px-1.5 py-0.5 rounded">{s}</span>)}
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">AI / ML</div>
              <div className="flex flex-wrap gap-1.5">
                {skills.ai_ml.slice(0,3).map(s => <span key={s} className="text-[10px] bg-secondary px-1.5 py-0.5 rounded">{s}</span>)}
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Web</div>
              <div className="flex flex-wrap gap-1.5">
                {skills.web.slice(0,3).map(s => <span key={s} className="text-[10px] bg-secondary px-1.5 py-0.5 rounded">{s}</span>)}
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Trading</div>
              <div className="flex flex-wrap gap-1.5">
                {skills.trading.slice(0,3).map(s => <span key={s} className="text-[10px] bg-secondary px-1.5 py-0.5 rounded">{s}</span>)}
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Soft Skills</div>
              <div className="flex flex-wrap gap-1.5">
                {skills.soft_skills.slice(0,3).map(s => <span key={s} className="text-[10px] bg-secondary px-1.5 py-0.5 rounded">{s}</span>)}
              </div>
            </div>
          </div>
        </motion.div>

        {/* EXPERIENCE (Span 4x1) */}
        <motion.div variants={item} className="bento-card md:col-span-4 md:row-span-1 overflow-hidden relative group cursor-pointer hover:border-primary/50" onClick={() => setLocation('/experience')}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2"><Briefcase className="w-5 h-5 text-primary" /> Experience</h3>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {experience.slice(0, 4).map((exp, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <TerminalSquare className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">{exp.title}</h4>
                  <div className="text-[10px] text-primary uppercase font-bold tracking-wider mt-1">{exp.company}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{exp.period}</div>
                  <div className="text-[10px] text-muted-foreground/80 mt-1 line-clamp-2">{exp.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* OTHER PROJECTS (Span 4x1) */}
        <motion.div variants={item} className="bento-card md:col-span-4 md:row-span-1 group cursor-pointer hover:border-primary/50" onClick={() => setLocation('/projects')}>
           <div className="flex items-center justify-between mb-4">
             <h3 className="text-xl font-bold flex items-center gap-2"><Cpu className="w-5 h-5 text-primary" /> All Projects</h3>
             <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {projects.filter(p => !p.featured).slice(0, 3).map(p => (
               <a key={p.id} href={p.github} target="_blank" rel="noreferrer" className="group block bg-secondary/50 rounded-xl p-4 hover:bg-secondary transition-colors border border-transparent hover:border-border">
                 <div className="flex justify-between items-start mb-2">
                   <h4 className="font-bold text-sm">{p.title}</h4>
                   <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                 </div>
                 <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{p.description}</p>
                 <div className="flex flex-wrap gap-1.5">
                   {p.tags.slice(0, 3).map(t => <span key={t} className="text-[10px] bg-background px-2 py-0.5 rounded text-muted-foreground">{t}</span>)}
                 </div>
               </a>
             ))}
           </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
