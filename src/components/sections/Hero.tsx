import React from "react";
import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ROLES = [
  "AI Researcher",
  "Full-Stack Developer",
  "Creator of MCP-India-Stack",
  "Crypto / Algorithmic Trader",
  "Prompt Engineer",
];

const ASCII_NAME = `
██████╗ ███████╗██╗  ██╗ █████╗ ███╗   ██╗
██╔══██╗██╔════╝██║  ██║██╔══██╗████╗  ██║
██████╔╝█████╗  ███████║███████║██╔██╗ ██║
██╔══██╗██╔══╝  ██╔══██║██╔══██║██║╚██╗██║
██║  ██║███████╗██║  ██║██║  ██║██║ ╚████║
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
███████╗██╗  ██╗ █████╗ ███████╗██╗  ██╗██╗
██╔════╝██║  ██║██╔══██╗██╔════╝██║  ██║██║
███████╗███████║███████║███████╗███████║██║
╚════██║██╔══██║██╔══██║╚════██║██╔══██║██║
███████║██║  ██║██║  ██║███████║██║  ██║██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝`.trim();

export function Hero() {
  const typingText = useTypingEffect(ROLES, 80, 40, 2000);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="max-w-5xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block border border-primary/30 bg-primary/5 px-4 py-1 text-primary/70 text-xs mb-4 font-mono tracking-widest"
          >
            INIT_SYSTEM_SEQUENCE... <span className="text-primary">OK</span>
          </motion.div>

          {/* ASCII Art Name — hidden on very small screens, shown md+ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:block"
          >
            <div
              className="glitch-wrapper"
              data-text={ASCII_NAME}
            >
              <pre className="text-primary crt-text-glow leading-tight font-mono whitespace-pre overflow-x-auto"
                style={{ fontSize: 'clamp(0.35rem, 1vw, 0.7rem)' }}
              >
                {ASCII_NAME}
              </pre>
            </div>
          </motion.div>

          {/* Fallback large name for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:hidden"
          >
            <div className="glitch-wrapper" data-text="REHAN SHASHI">
              <h1 className="text-6xl font-display font-bold crt-text-glow leading-none tracking-tight">
                REHAN<br />SHASHI
              </h1>
            </div>
          </motion.div>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-8 text-base md:text-xl text-primary/80 font-mono flex items-center"
          >
            <span className="text-primary/50 mr-2">{">"}</span>
            <span>{typingText}</span>
            <span className="inline-block w-3 h-5 bg-primary ml-1 cursor-blink" />
          </motion.div>

          {/* Status line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-3 text-xs font-mono"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary/60">STATUS:</span>
            <span className="text-primary font-bold tracking-widest">ACTIVE &amp; BUILDING</span>
            <span className="text-primary/30">|</span>
            <span className="text-primary/50">LOCATION: GREATER DELHI AREA</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="pt-6 flex items-center gap-4 flex-wrap"
          >
            <a
              href="mailto:rehan01shashi@gmail.com"
              className="group relative px-6 py-3 border border-primary text-primary retro-hover uppercase text-xs tracking-widest font-bold crt-box-glow transition-all"
            >
              <span className="opacity-0 group-hover:opacity-100 absolute left-2 transition-opacity">&gt;</span>
              <span className="group-hover:ml-3 transition-all">[ Execute_Contact ]_</span>
            </a>
            <a
              href="https://linkedin.com/in/rehan-shashi"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-primary-foreground hover:bg-primary p-3 border border-primary/40 hover:border-primary transition-all crt-box-glow"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/rehan1020"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-primary-foreground hover:bg-primary p-3 border border-primary/40 hover:border-primary transition-all crt-box-glow"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-pulse">
        <span className="text-xs uppercase tracking-widest font-mono">Scroll_Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
