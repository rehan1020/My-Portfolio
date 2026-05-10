import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  { text: 'RS_OS v1.0 BIOS INITIALIZING...', status: null },
  { text: 'CPU: REHAN SHASHI INTELLIGENCE ENGINE v17.0', status: 'OK' },
  { text: 'MEMORY CHECK: 17 YEARS EXPERIENCE LOADED', status: 'OK' },
  { text: 'LOADING BIOS...', status: 'OK' },
  { text: 'INITIALIZING AI PROTOCOLS...', status: 'OK' },
  { text: 'MOUNTING /DEV/PORTFOLIO...', status: 'OK' },
  { text: 'SCANNING NEURAL NETWORKS...', status: 'OK' },
  { text: 'LOADING MCP-INDIA-STACK MODULE...', status: 'OK' },
  { text: 'CONNECTING TO MATRIX...', status: 'OK' },
  { text: 'IMPORTING SKILLS: [AI, TRADING, DEVELOPMENT, RESEARCH]...', status: 'OK' },
  { text: 'STARTUP COMPLETE. WELCOME TO RS_OS.', status: null },
];

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setVisibleLines(index);
      if (index >= BOOT_LINES.length) {
        clearInterval(interval);
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 700);
        }, 500);
      }
    }, 130);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[200] flex flex-col justify-center px-8 md:px-20 lg:px-40"
          style={{ background: '#050505' }}
        >
          <div className="scanlines" />
          <div className="crt-vignette" />

          <div className="space-y-1.5 max-w-2xl">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.08 }}
                className="flex items-center gap-3 font-mono text-xs md:text-sm"
              >
                {line.status ? (
                  <>
                    <span className="text-primary/50 flex-1">{line.text}</span>
                    <span className="text-primary crt-text-glow font-bold shrink-0">[ {line.status} ]</span>
                  </>
                ) : (
                  <span className={`font-bold ${i === 0 ? 'text-amber text-base md:text-lg' : 'text-primary crt-text-glow text-xs md:text-sm'}`}>
                    {i === BOOT_LINES.length - 1 ? '> ' : ''}{line.text}
                  </span>
                )}
              </motion.div>
            ))}

            {visibleLines > 0 && visibleLines < BOOT_LINES.length && (
              <div className="flex items-center gap-1 mt-2">
                <span className="text-primary/40 text-xs">{'> '}</span>
                <span className="inline-block w-2.5 h-4 bg-primary cursor-blink" />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
