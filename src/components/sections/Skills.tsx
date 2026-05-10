import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  { name: 'Team Collaboration',   level: 95, category: 'SOFT' },
  { name: 'Start-up Ventures',    level: 90, category: 'BUSINESS' },
  { name: 'App Development',      level: 85, category: 'TECH' },
  { name: 'Social Media Mgmt',    level: 85, category: 'SOFT' },
  { name: 'AI Research',          level: 80, category: 'TECH' },
  { name: 'Futures Trading',      level: 75, category: 'FINANCE' },
  { name: 'Prompt Engineering',   level: 70, category: 'TECH' },
];

const CATEGORY_COLORS: Record<string, string> = {
  TECH:     'text-cyan-accent',
  BUSINESS: 'text-amber',
  FINANCE:  'text-yellow-400',
  SOFT:     'text-primary',
};

function asciiBar(level: number, total = 10): string {
  const filled = Math.round((level / 100) * total);
  return '[' + '█'.repeat(filled) + '░'.repeat(total - filled) + ']';
}

const DIAGNOSTICS = [
  { label: 'Leadership modules',          ok: true },
  { label: 'Market analysis algorithms',  ok: true },
  { label: 'AI model integration',        ok: true },
  { label: 'Community engagement',        ok: true },
  { label: 'Sleep module',               ok: false },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-display crt-text-glow">02. CAPABILITIES</h2>
            <div className="flex-1 h-[1px] bg-primary/20" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ASCII skill bars */}
            <div className="border border-primary/30 bg-background/60 crt-box-glow">
              <div className="bg-primary/10 border-b border-primary/20 px-4 py-2 text-xs text-primary/60 tracking-widest">
                SYSTEM_DIAGNOSTICS.EXE
              </div>
              <div className="p-5 space-y-4">
                <div className="text-primary/40 text-xs mb-4">
                  root@rs_os:~$ run --skill-scan --output=ascii
                </div>
                {SKILLS.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07, duration: 0.4 }}
                    className="font-mono text-xs group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`${CATEGORY_COLORS[skill.category] ?? 'text-primary'} font-bold`}>
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-primary/40 border border-primary/20 px-1.5 py-0.5">
                        {skill.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.07 }}
                        className="text-primary/80 tracking-wider"
                      >
                        {asciiBar(skill.level)}
                      </motion.span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
                <div className="text-primary/30 text-xs mt-4 pt-3 border-t border-primary/10">
                  SCAN COMPLETE — 7 modules loaded
                </div>
              </div>
            </div>

            {/* System Diagnostics panel */}
            <div className="border border-primary/30 bg-background/60 crt-box-glow">
              <div className="bg-primary/10 border-b border-primary/20 px-4 py-2 text-xs text-primary/60 tracking-widest">
                SYS_INFO.LOG
              </div>
              <div className="p-5 font-mono text-xs space-y-5">
                <div>
                  <div className="text-primary/40 mb-3">Executing core competency analysis...</div>
                  <div className="space-y-2">
                    {DIAGNOSTICS.map(({ label, ok }) => (
                      <div key={label} className="flex items-center gap-2">
                        <span className={ok ? 'text-primary font-bold' : 'text-amber font-bold'}>
                          {ok ? '[ OK ]' : '[ !! ]'}
                        </span>
                        <span className={ok ? 'text-primary/80' : 'text-amber/80'}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-primary/20 pt-4 space-y-2">
                  <div className="text-primary/40 mb-2">TECH STACK</div>
                  {[
                    { label: 'Languages',   val: 'Python, JavaScript, TypeScript' },
                    { label: 'AI / ML',     val: 'Ollama, OpenRouter, LLMs' },
                    { label: 'Web',         val: 'React, Vite, Node.js' },
                    { label: 'Trading',     val: 'Bitget API, WebSocket' },
                    { label: 'Blockchain',  val: 'Web3, DEX, Telegram Bots' },
                  ].map(({ label, val }) => (
                    <div key={label} className="flex gap-2">
                      <span className="text-primary/50 w-20 shrink-0">{label}</span>
                      <span className="text-primary/30">→</span>
                      <span className="text-primary/80">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="border border-primary/20 bg-primary/5 p-3 mt-2">
                  <span className="text-primary/50">uptime:</span>{' '}
                  <span className="text-primary font-bold">17 years</span>
                  <span className="text-primary/30 mx-2">|</span>
                  <span className="text-primary/50">load:</span>{' '}
                  <span className="text-primary font-bold">HIGH</span>
                  <div className="mt-1.5 text-primary/40 animate-pulse">Awaiting new inputs...</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
