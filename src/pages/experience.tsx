import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="pt-24 pb-12 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <Briefcase className="w-10 h-10 text-primary" /> Experience
        </h1>
        <p className="text-muted-foreground text-lg">
          My professional journey and leadership roles.
        </p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
        {PORTFOLIO_DATA.experience.map((exp, i) => (
          <motion.div key={i} variants={item} className="bento-card relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                <div className="text-primary font-medium text-lg mb-4">{exp.company} {exp.type && <span className="text-muted-foreground text-sm font-normal">· {exp.type}</span>}</div>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">{exp.desc}</p>
              </div>
              
              <div className="flex flex-col items-start md:items-end gap-2 shrink-0 bg-secondary/30 p-3 rounded-lg border border-border">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{exp.period}</span>
                </div>
                {exp.location && (
                  <div className="text-xs text-muted-foreground px-2 py-1 bg-background rounded">
                    {exp.location}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
