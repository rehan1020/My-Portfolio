import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { GraduationCap } from 'lucide-react';

export default function EducationPage() {
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
          <GraduationCap className="w-10 h-10 text-primary" /> Education
        </h1>
        <p className="text-muted-foreground text-lg">
          My academic journey and institutional training.
        </p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
        {PORTFOLIO_DATA.education.map((edu, i) => (
          <motion.div key={i} variants={item} className="bento-card relative overflow-hidden group">
            <div className={`absolute top-0 left-0 w-1 h-full transition-colors ${edu.status === 'CURRENT' ? 'bg-primary' : 'bg-primary/20'}`} />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-1">{edu.school}</h3>
                <div className="text-primary font-medium text-lg mb-4">{edu.degree}</div>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">{edu.detail}</p>
              </div>
              
              <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                <div className="bg-secondary/30 border border-border px-3 py-1.5 rounded-lg text-sm font-medium">
                  {edu.period}
                </div>
                <div className={`text-xs px-2 py-1 rounded font-bold ${edu.status === 'CURRENT' ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                  {edu.status}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
