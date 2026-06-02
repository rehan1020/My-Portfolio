import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Mail, Github, Linkedin, Clock, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const { contact, profile } = PORTFOLIO_DATA;
  
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="pt-24 pb-12 px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div variants={container} initial="hidden" animate="show" className="w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <Send className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let's Connect</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {contact.availability}. I typically respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a href={`mailto:${contact.email}`} className="bento-card group hover:border-primary/50 flex flex-col items-center text-center">
            <Mail className="w-8 h-8 text-muted-foreground mb-4 group-hover:text-primary transition-colors" />
            <h3 className="font-bold mb-1">Email</h3>
            <p className="text-sm text-primary">{contact.email}</p>
          </a>
          
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="bento-card group hover:border-primary/50 flex flex-col items-center text-center">
            <Linkedin className="w-8 h-8 text-muted-foreground mb-4 group-hover:text-primary transition-colors" />
            <h3 className="font-bold mb-1">LinkedIn</h3>
            <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Connect with me</p>
          </a>

          <a href={contact.github} target="_blank" rel="noreferrer" className="bento-card group hover:border-primary/50 flex flex-col items-center text-center">
            <Github className="w-8 h-8 text-muted-foreground mb-4 group-hover:text-primary transition-colors" />
            <h3 className="font-bold mb-1">GitHub</h3>
            <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">View my repos</p>
          </a>
          
          <div className="bento-card flex flex-col justify-center items-center text-center bg-primary/5 border-primary/20">
            <Clock className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-1">Timezone</h3>
            <p className="text-sm text-muted-foreground">{contact.timezone}</p>
            <div className="flex items-center gap-1 mt-2 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
              <MapPin className="w-3 h-3" /> {profile.location}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
