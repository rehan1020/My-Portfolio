import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Code2, Cpu, Globe, TrendingUp, Users, Briefcase } from 'lucide-react';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;
  
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const categories = [
    { title: "Languages", data: skills.languages, icon: <Code2 className="w-6 h-6 text-primary" /> },
    { title: "AI & Machine Learning", data: skills.ai_ml, icon: <Cpu className="w-6 h-6 text-primary" /> },
    { title: "Web Technologies", data: skills.web, icon: <Globe className="w-6 h-6 text-primary" /> },
    { title: "Trading & Finance", data: skills.trading, icon: <TrendingUp className="w-6 h-6 text-primary" /> },
    { title: "Management & Strategy", data: skills.management, icon: <Briefcase className="w-6 h-6 text-primary" /> },
    { title: "Soft Skills & Community", data: skills.soft_skills, icon: <Users className="w-6 h-6 text-primary" /> },
  ];

  return (
    <div className="pt-24 pb-12 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 flex items-center justify-center md:justify-start gap-3">
          <Code2 className="w-10 h-10 text-primary" /> Technical Stack
        </h1>
        <p className="text-muted-foreground text-lg">
          The tools, languages, and frameworks I use to build.
        </p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <motion.div key={i} variants={item} className="bento-card">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="p-3 bg-primary/10 rounded-xl">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold">{cat.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {cat.data.map(skill => (
                <div key={skill} className="bg-secondary/50 border border-border px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-colors cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
