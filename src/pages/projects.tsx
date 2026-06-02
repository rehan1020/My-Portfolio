import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <FolderGit2 className="w-10 h-10 text-primary" /> Projects
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A collection of my recent work, open-source contributions, and experiments.
        </p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.projects.map((p) => (
          <motion.div key={p.id} variants={item} className="bento-card group flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              {p.featured && <div className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">Featured Project</div>}
              <div className="flex gap-2 ml-auto">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{p.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
              {p.tags.map(tag => (
                <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-md font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
