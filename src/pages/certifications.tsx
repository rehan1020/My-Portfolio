import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Award, ArrowUpRight } from 'lucide-react';

export default function Certifications() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="pt-24 pb-12 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <Award className="w-10 h-10 text-primary" /> Certifications
        </h1>
        <p className="text-muted-foreground text-lg">
          Credentials, courses, and job simulations I've completed.
        </p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.certifications.map((category, idx) => (
          <motion.div key={idx} variants={item} className="bento-card flex flex-col">
            <h2 className="text-xl font-bold mb-4 border-b border-border pb-3 flex items-center justify-between">
              {category.category}
              <Award className="w-5 h-5 text-primary/50" />
            </h2>
            <div className="space-y-4 flex-1">
              {category.items.map((cert, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{cert.title}</h3>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary shrink-0 ml-2">
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded">{cert.date}</span>
                    {cert.details && <span className="text-[10px] text-muted-foreground ml-2 text-right">{cert.details}</span>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
