import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { RetroCard } from '@/components/ui/RetroCard';

const SNAKE_FRAMES = [
  "  ╔══════════╗",
  "  ║ >===>    ║",
  "  ║    *     ║",
  "  ╚══════════╝",
  "  [SNAKE v0.1 — retro mode activated]",
  "  Score: 1337  |  Status: LEGENDARY",
];

const COMMANDS: Record<string, string | string[]> = {
  help: [
    "┌─────────────────────────────────────────┐",
    "│           AVAILABLE COMMANDS            │",
    "├─────────────────────────────────────────┤",
    "│  whoami      → Display user profile     │",
    "│  skills      → List system capabilities │",
    "│  projects    → Show active builds       │",
    "│  contact     → Display contact info     │",
    "│  status      → System status report     │",
    "│  clear       → Wipe terminal buffer     │",
    "│  sudo        → Attempt privilege esc.   │",
    "│  play snake  → Launch retro game        │",
    "└─────────────────────────────────────────┘",
  ],
  whoami: [
    "┌─ USER PROFILE ──────────────────────────┐",
    "│ NAME     : Rehan Shashi                 │",
    "│ ROLE     : AI Researcher & Developer    │",
    "│ AGE      : 17                           │",
    "│ GRADE    : 12th — PCM + AI              │",
    "│ LOCATION : India                        │",
    "│ ORG      : MCP-India-Stack (Owner)      │",
    "│ STATUS   : Active & Building ■          │",
    "└─────────────────────────────────────────┘",
  ],
  skills: [
    "RUNNING DIAGNOSTIC SCAN...",
    "",
    "Start-up Ventures    [█████████░]  90%",
    "App Development      [████████░░]  85%",
    "Social Media Mgmt    [████████░░]  85%",
    "AI Research          [████████░░]  80%",
    "Futures Trading      [███████░░░]  75%",
    "Prompt Engineering   [███████░░░]  70%",
    "Team Collaboration   [██████████]  95%",
    "",
    "[ ALL MODULES LOADED SUCCESSFULLY ]",
  ],
  projects: [
    "┌─ ACTIVE BUILDS ─────────────────────────┐",
    "│ [★] MCP-India-Stack  — Python / AI      │",
    "│     Stars: 17 | Forks: 4               │",
    "│ [ ] OBI Terminal     — JS / WebSocket   │",
    "│ [ ] Max AI Assistant — Python / LLMs    │",
    "│ [ ] CRYPMAX          — Python / Crypto  │",
    "│ [ ] tgbot DEX Trader — Python / Web3    │",
    "└─────────────────────────────────────────┘",
    "TYPE: cd /projects — to view full builds",
  ],
  contact: [
    "┌─ CONTACT INFO ──────────────────────────┐",
    "│ EMAIL    : rehan01shashi@gmail.com      │",
    "│ LINKEDIN : linkedin.com/in/rehan-shashi │",
    "│ GITHUB   : github.com/rehan1020        │",
    "└─────────────────────────────────────────┘",
  ],
  status: [
    "SCANNING SYSTEM...",
    "",
    "[ OK ] AI Research module — ONLINE",
    "[ OK ] Development stack  — ONLINE",
    "[ OK ] Trading algorithms — ONLINE",
    "[ OK ] Startup ventures   — ONLINE",
    "[ !! ] Sleep module       — DEPRECATED",
    "",
    "UPTIME: 17 years | LOAD: HIGH | MOOD: BUILDING",
  ],
  sudo: [
    "Password: ••••••••",
    "sudo: permission denied. Nice try.",
    "This incident has been logged.",
    "[ALERT] Unauthorized access attempt — reported to /dev/null",
  ],
  'play snake': [...SNAKE_FRAMES],
};

type HistoryEntry = { command: string; response: string | string[] };

export function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { command: '', response: ["Welcome to RS_OS v1.0. Type 'help' to begin."] },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      setInput('');
      setHistoryIndex(-1);

      if (!cmd) return;

      if (cmd === 'clear') {
        setHistory([]);
        return;
      }

      setCmdHistory(prev => [cmd, ...prev]);
      const response =
        COMMANDS[cmd] ||
        `Command not found: '${cmd}'. Type 'help' for available commands.`;
      setHistory(prev => [...prev, { command: cmd, response }]);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = historyIndex + 1;
      if (next < cmdHistory.length) {
        setHistoryIndex(next);
        setInput(cmdHistory[next]);
      }
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = historyIndex - 1;
      if (next < 0) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(next);
        setInput(cmdHistory[next]);
      }
    }
  }, [input, cmdHistory, historyIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Window chrome */}
      <div className="border border-primary bg-background crt-box-glow-strong">
        {/* Title bar */}
        <div className="flex items-center justify-between bg-primary/10 border-b border-primary/30 px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70 border border-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70 border border-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-primary/70 border border-primary/40" />
          </div>
          <span className="text-primary/60 text-xs font-mono tracking-widest">rs_terminal — bash — 80×24</span>
          <div className="text-primary/30 text-xs font-mono">RS_OS v1.0</div>
        </div>

        {/* Terminal body */}
        <div
          className="h-[380px] flex flex-col font-mono text-xs md:text-sm p-4 cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {history.map((entry, i) => (
              <div key={i} className="space-y-0.5">
                {entry.command && (
                  <div className="flex items-center gap-2">
                    <span className="text-primary/40 shrink-0">guest@rs_os:~$</span>
                    <span className="text-primary">{entry.command}</span>
                  </div>
                )}
                <div className="text-primary/75 pl-0 space-y-0.5">
                  {Array.isArray(entry.response) ? (
                    entry.response.map((line, j) => (
                      <div key={j} className={line.startsWith('[ !! ]') ? 'text-amber' : line.startsWith('[★]') ? 'text-primary crt-text-glow' : ''}>
                        {line}
                      </div>
                    ))
                  ) : (
                    <div>{entry.response}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Input line */}
            <div className="flex items-center gap-2">
              <span className="text-primary/40 shrink-0">guest@rs_os:~$</span>
              <div className="relative flex-1 flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent outline-none border-none focus:ring-0 text-primary caret-transparent"
                  autoComplete="off"
                  spellCheck="false"
                />
                <span
                  className="absolute top-0 left-0 text-transparent pointer-events-none select-none"
                  aria-hidden
                >
                  {input}
                </span>
                <span className="inline-block w-2 h-4 bg-primary cursor-blink shrink-0" />
              </div>
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
