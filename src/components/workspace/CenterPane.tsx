import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FILE_CONTENTS } from './content';

const FILE_LABELS: Record<string, string> = {
  readme: 'README.md',
  profile: '/about/profile.md',
  'work-history': '/about/work-history.log',
  capabilities: '/skills/capabilities.sh',
  stack: '/skills/stack.json',
  'mcp-india-stack': '/builds/mcp-india-stack.md',
  'obi-terminal': '/builds/obi-terminal.md',
  'max-assistant': '/builds/max-assistant.md',
  crypmax: '/builds/crypmax.md',
  tgbot: '/builds/tgbot.md',
  'policy-sim': '/builds/policy-sim.md',
  'cred-anthropic': '/credentials/anthropic.txt',
  'cred-ibm': '/credentials/ibm.txt',
  'cred-microsoft': '/credentials/microsoft.txt',
  'cred-google': '/credentials/google.txt',
  'cred-hp': '/credentials/hp.txt',
  'cred-forage': '/credentials/forage.txt',
  'cred-tcs': '/credentials/tcs.txt',
  ping: '/contact/ping.sh',
};

const glitchVariants = {
  initial: { opacity: 0, x: -6, filter: 'brightness(2) hue-rotate(60deg)' },
  animate: {
    opacity: 1,
    x: 0,
    filter: 'brightness(1) hue-rotate(0deg)',
    transition: { duration: 0.18, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: 6,
    filter: 'brightness(1.5) hue-rotate(-60deg)',
    transition: { duration: 0.1 },
  },
};

interface CenterPaneProps {
  selectedFile: string;
}

export function CenterPane({ selectedFile }: CenterPaneProps) {
  const content = FILE_CONTENTS[selectedFile];
  const label = FILE_LABELS[selectedFile] ?? selectedFile;

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Tab bar */}
      <div className="shrink-0 border-b border-primary/30 bg-primary/5 flex items-center">
        <div className="flex items-center gap-0 overflow-x-auto">
          <div className="flex items-center gap-2 border-r border-primary/30 bg-background px-4 py-1.5 shrink-0">
            <span className="text-primary text-[10px] font-mono tracking-wide">{label}</span>
            <span className="text-primary/30 text-[9px]">●</span>
          </div>
        </div>
        <div className="ml-auto px-3 text-[10px] font-mono text-primary/30 tracking-widest shrink-0">
          [ 02_BUFFER ]
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-y-auto p-5 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFile}
            variants={glitchVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {content ?? (
              <div className="font-mono text-xs text-primary/40 space-y-2">
                <div>{'>'} File not found: {selectedFile}</div>
                <div>Try selecting a file from the navigator.</div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
