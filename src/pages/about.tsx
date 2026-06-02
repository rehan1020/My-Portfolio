import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { User, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const { profile } = PORTFOLIO_DATA;
  
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="pt-24 pb-12 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <User className="w-10 h-10 text-primary" /> About Me
        </h1>
        <p className="text-muted-foreground text-lg">
          Who I am, what I do, and what I care about.
        </p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
        <motion.div variants={item} className="bento-card">
          <h2 className="text-2xl font-bold mb-4">Background</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{profile.bio}</p>
            <p>{profile.currentRoles}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={item} className="bento-card bg-primary/5">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" /> Core Interests
            </h2>
            <ul className="space-y-3">
              {profile.interests.map((interest, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {interest}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="bento-card flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-muted-foreground">Age</span>
                <span className="font-bold">{profile.age}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-muted-foreground">Location</span>
                <span className="font-bold">{profile.location}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="text-muted-foreground">Grade</span>
                <span className="font-bold">{profile.grade}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
