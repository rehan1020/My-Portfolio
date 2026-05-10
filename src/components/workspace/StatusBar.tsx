import React, { useState, useEffect } from 'react';

interface StatusBarProps {
  selectedFile: string;
}

export function StatusBar({ selectedFile }: StatusBarProps) {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString('en-GB', { hour12: false }));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { hour12: false }));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-between bg-primary text-primary-foreground px-4 text-[10px] font-mono font-bold tracking-wider h-7 shrink-0 z-30">
      <div className="flex items-center gap-4">
        <span>REHAN_OS v1.0.0</span>
        <span className="opacity-50">|</span>
        <span>UTF-8</span>
        <span className="opacity-50">|</span>
        <span>Branch: main</span>
        <span className="opacity-50">|</span>
        <span className="opacity-70">17y · India</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="opacity-70">{selectedFile}</span>
        <span className="opacity-50">|</span>
        <span>{time}</span>
        <span className="opacity-50">|</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse inline-block" />
          ACTIVE
        </span>
      </div>
    </div>
  );
}
