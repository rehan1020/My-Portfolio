import React from 'react';
import { motion } from 'framer-motion';
import { RetroCard } from '../ui/RetroCard';

const EXPERIENCE = [
  {
    title: "Owner / Founder",
    company: "MCP-India-Stack",
    period: "Current",
    location: "India",
    description: "Leading technical strategy, architecture, and overall vision for the MCP-India-Stack ecosystem."
  },
  {
    title: "Co-Founder",
    company: "Redarted",
    period: "Oct 2025 - Dec 2025 (3 months)",
    location: "India",
    description: "Startup venture focusing on innovative solutions. Gained crucial experience in early-stage company building."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 flex-row-reverse">
            <h2 className="text-4xl font-display crt-text-glow">03. WORK_HISTORY</h2>
            <div className="flex-1 h-[1px] bg-primary/20"></div>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
            {EXPERIENCE.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 crt-box-glow z-10">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <RetroCard className="p-5">
                    <div className="flex flex-col mb-2">
                      <span className="text-primary/60 text-sm mb-1">{exp.period}</span>
                      <h3 className="text-xl font-bold crt-text-glow">{exp.title}</h3>
                      <span className="text-primary font-display text-lg">@ {exp.company}</span>
                    </div>
                    <div className="text-sm text-primary/40 mb-3 uppercase tracking-wider">{exp.location}</div>
                    <p className="text-primary/80 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </RetroCard>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
