import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit at 100% before finishing
          return 100;
        }
        // Accelerating progress
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="text-3xl font-bold tracking-tight">
          <span className="text-primary">RS</span>_PORTFOLIO
        </div>
        
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
          />
        </div>
        
        <div className="text-sm text-muted-foreground font-mono">
          Loading interface... {Math.min(progress, 100)}%
        </div>
      </motion.div>
    </div>
  );
}
