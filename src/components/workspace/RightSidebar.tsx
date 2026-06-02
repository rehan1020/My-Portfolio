import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type LogEntry = {
  id: number;
  tag: string;
  msg: string;
  time: string;
  level: 'INFO' | 'SYSTEM' | 'WARN' | 'OK' | 'NET' | 'AI';
};

const LOG_POOL = [
  { tag: 'SYSTEM', msg: 'MCP-Stack v0.3.0 initialized', level: 'SYSTEM' },
  { tag: 'STATUS', msg: 'Active — India', level: 'OK' },
  { tag: 'GOAL', msg: 'AI Researcher & Builder', level: 'INFO' },
  { tag: 'NET', msg: 'GitHub sync complete', level: 'NET' },
  { tag: 'MCP', msg: 'Server running on /dev/mcp', level: 'SYSTEM' },
  { tag: 'AI', msg: 'Model inference active', level: 'AI' },
  { tag: 'TRADE', msg: 'Futures market monitor ON', level: 'INFO' },
  { tag: 'BUILD', msg: 'OBI-Terminal compiled', level: 'OK' },
  { tag: 'WARN', msg: 'Sleep module deprecated', level: 'WARN' },
  { tag: 'NET', msg: 'PyPI package published', level: 'OK' },
  { tag: 'AI', msg: 'OpenRouter LLM connected', level: 'AI' },
  { tag: 'SYSTEM', msg: 'RS_OS uptime: 17y 0d', level: 'SYSTEM' },
  { tag: 'BUILD', msg: 'CRYPMAX trading bot ONLINE', level: 'OK' },
  { tag: 'IBM', msg: 'Bob AI hackathon: JOINED', level: 'INFO' },
  { tag: 'MCP', msg: 'India API stack: 17 stars', level: 'OK' },
  { tag: 'NET', msg: 'HuggingFace space deployed', level: 'NET' },
  { tag: 'AI', msg: 'Ollama local model loaded', level: 'AI' },
  { tag: 'WARN', msg: 'Caffeine levels critical', level: 'WARN' },
  { tag: 'BUILD', msg: 'Max assistant wake detected', level: 'OK' },
  { tag: 'SYSTEM', msg: 'Portfolio v2 compiled: OK', level: 'SYSTEM' },
] as const;

const LEVEL_COLOR: Record<string, string> = {
  SYSTEM: 'text-primary',
  OK:     'text-primary',
  AI:     'text-cyan-accent',
  NET:    'text-primary/70',
  INFO:   'text-primary/70',
  WARN:   'text-amber',
};

function timestamp() {
  return new Date().toLocaleTimeString('en-GB', { hour12: false });
}

let uid = 100;

export function RightSidebar() {
  const [logs, setLogs] = useState<LogEntry[]>(() =>
    LOG_POOL.slice(0, 6).map((l, i) => ({
      id: i,
      tag: l.tag,
      msg: l.msg,
      level: l.level as LogEntry['level'],
      time: timestamp(),
    }))
  );
  const bottomRef = useRef<HTMLDivElement>(null);
  const poolIndex = useRef(6);

  useEffect(() => {
    const interval = setInterval(() => {
      const entry = LOG_POOL[poolIndex.current % LOG_POOL.length];
      poolIndex.current++;
      setLogs(prev => [
        ...prev.slice(-30),
        {
          id: uid++,
          tag: entry.tag,
          msg: entry.msg,
          level: entry.level as LogEntry['level'],
          time: timestamp(),
        },
      ]);
    }, Math.random() * 2000 + 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="flex flex-col h-full border-l border-primary/30 overflow-hidden">
      {/* Header */}
      <div className="shrink-0 border-b border-primary/30 bg-primary/5 px-3 py-1.5 flex items-center justify-between">
        <span className="text-primary/60 text-[10px] font-mono tracking-widest font-bold">
          [ 03_TELEMETRY ]
        </span>
        <span className="flex items-center gap-1 text-[10px] text-primary/40">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          LIVE
        </span>
      </div>

      {/* Log feed */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1 font-mono text-[10px]">
        <AnimatePresence initial={false}>
          {logs.map(log => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="leading-tight"
            >
              <span className="text-primary/30">{log.time} </span>
              <span className={`font-bold ${LEVEL_COLOR[log.level] ?? 'text-primary/70'}`}>
                [{log.tag}]
              </span>
              <span className="text-primary/60"> {log.msg}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
