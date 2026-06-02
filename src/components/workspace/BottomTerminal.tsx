import React, { useState, useRef, useEffect, useCallback } from 'react';

const COMMANDS: Record<string, string | string[]> = {
  help: [
    '┌─ AVAILABLE COMMANDS ─────────────────┐',
    '│ whoami      → user profile           │',
    '│ skills      → capability scan        │',
    '│ projects    → active builds          │',
    '│ contact     → contact info           │',
    '│ status      → system status          │',
    '│ clear       → wipe buffer            │',
    '│ sudo        → attempt root access    │',
    '│ play snake  → easter egg 🐍          │',
    '└──────────────────────────────────────┘',
  ],
  whoami: [
    'NAME     : Rehan Shashi',
    'AGE      : 17  |  GRADE: 12th — PCM + AI',
    'LOCATION : India',
    'ROLE     : AI Researcher & Developer',
    'ORG      : MCP-India-Stack (Owner)',
    'STATUS   : Active & Building ■',
  ],
  skills: [
    'Team Collaboration   [██████████]  95%',
    'Start-up Ventures    [█████████░]  90%',
    'App Development      [████████░░]  85%',
    'Social Media Mgmt    [████████░░]  85%',
    'AI Research          [████████░░]  80%',
    'Futures Trading      [███████░░░]  75%',
    'Prompt Engineering   [███████░░░]  70%',
  ],
  projects: [
    '[★] MCP-India-Stack v0.3.0  — Python · Stars: 17',
    '[ ] OBI Terminal             — JS · WebSocket',
    '[ ] Max AI Assistant         — Python · LLMs',
    '[ ] CRYPMAX                  — Python · Crypto',
    '[ ] tgbot DEX Trader         — Python · Web3',
    '[ ] Policy Sim Env           — Python · PyTorch',
  ],
  contact: [
    'EMAIL    : rehan01shashi@gmail.com',
    'LINKEDIN : linkedin.com/in/rehan-shashi',
    'GITHUB   : github.com/rehan1020',
  ],
  status: [
    '[ OK ] AI Research     — ONLINE',
    '[ OK ] Dev stack       — ONLINE',
    '[ OK ] Trading algos   — ONLINE',
    '[ !! ] Sleep module    — DEPRECATED',
    'UPTIME: 17 years | LOAD: HIGH',
  ],
  sudo: [
    'Password: ••••••••',
    'sudo: permission denied.',
    'Incident logged → /dev/null',
  ],
  'play snake': [
    '  ╔══════════╗',
    '  ║ >===>  * ║',
    '  ╚══════════╝',
    '  Score: 1337 | Status: LEGENDARY',
  ],
};

type Entry = { command: string; response: string | string[] };

export function BottomTerminal() {
  const [history, setHistory] = useState<Entry[]>([
    { command: '', response: ["RS_OS terminal — type 'help' for commands"] },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      setInput('');
      setHistIdx(-1);
      if (!cmd) return;
      if (cmd === 'clear') { setHistory([]); return; }
      setCmdHistory(p => [cmd, ...p]);
      setHistory(p => [...p, {
        command: cmd,
        response: COMMANDS[cmd] ?? `command not found: ${cmd}. Try 'help'.`,
      }]);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = histIdx + 1;
      if (next < cmdHistory.length) { setHistIdx(next); setInput(cmdHistory[next]); }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = histIdx - 1;
      if (next < 0) { setHistIdx(-1); setInput(''); }
      else { setHistIdx(next); setInput(cmdHistory[next]); }
    }
  }, [input, cmdHistory, histIdx]);

  return (
    <div
      className="flex flex-col border-t border-primary/40 bg-background overflow-hidden cursor-text"
      style={{ height: '150px' }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal header */}
      <div className="shrink-0 border-b border-primary/30 bg-primary/5 px-3 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
          <span className="text-primary/40 text-[10px] font-mono ml-2 tracking-widest">
            [ 04_TERMINAL ] rs_terminal — bash — 80×12
          </span>
        </div>
      </div>

      {/* Terminal body */}
      <div className="flex-1 overflow-y-auto px-3 py-1.5 font-mono text-[11px] space-y-0.5">
        {history.map((entry, i) => (
          <div key={i}>
            {entry.command && (
              <div className="flex gap-2">
                <span className="text-primary/40 shrink-0">guest@rs_os:~$</span>
                <span className="text-primary">{entry.command}</span>
              </div>
            )}
            <div className="text-primary/70 pl-0">
              {Array.isArray(entry.response)
                ? entry.response.map((l, j) => <div key={j}>{l}</div>)
                : <div>{entry.response}</div>}
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-primary/40 shrink-0">guest@rs_os:~$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            className="flex-1 bg-transparent outline-none border-none text-primary caret-transparent"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="w-2 h-3.5 bg-primary cursor-blink shrink-0" />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
