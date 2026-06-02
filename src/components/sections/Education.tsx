import React from 'react';
import { motion } from 'framer-motion';

const EDUCATION = [
  {
    school: 'Prudence School',
    degree: 'PCM + Artificial Intelligence',
    period: 'Apr 2025 – Mar 2027',
    status: 'CURRENT',
    detail: 'Focused on Mathematics, Physics, Chemistry & AI specialisation.',
  },
  {
    school: 'St. Gregorios School',
    degree: 'Primary & Secondary Education',
    period: 'Apr 2012 – Mar 2025',
    status: 'COMPLETED',
    detail: '13 years — foundational education, leadership, and early tech exposure.',
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-display crt-text-glow">05. TRAINING_DATA</h2>
            <div className="flex-1 h-[1px] bg-primary/20" />
          </div>

          {/* ASCII DB Query header */}
          <div className="font-mono text-xs text-primary/40 mb-4 space-y-1">
            <div>root@rs_os:~$ SELECT * FROM education ORDER BY period DESC;</div>
            <div className="text-primary/20">Query executed — {EDUCATION.length} rows returned</div>
          </div>

          {/* ASCII Table */}
          <div className="overflow-x-auto font-mono text-xs">
            <div className="min-w-[600px]">
              {/* Top border */}
              <div className="text-primary/60">
                {'┌' + '─'.repeat(26) + '┬' + '─'.repeat(32) + '┬' + '─'.repeat(20) + '┬' + '─'.repeat(11) + '┐'}
              </div>

              {/* Header row */}
              <div className="flex text-primary font-bold bg-primary/10">
                <span className="border-l border-r border-primary/60 px-2 py-1.5 w-[27ch]">{'INSTITUTION'}</span>
                <span className="border-r border-primary/60 px-2 py-1.5 w-[33ch]">{'DEGREE / TRACK'}</span>
                <span className="border-r border-primary/60 px-2 py-1.5 w-[21ch]">{'PERIOD'}</span>
                <span className="border-r border-primary/60 px-2 py-1.5 w-[12ch]">{'STATUS'}</span>
              </div>

              {/* Header divider */}
              <div className="text-primary/60">
                {'├' + '─'.repeat(26) + '┼' + '─'.repeat(32) + '┼' + '─'.repeat(20) + '┼' + '─'.repeat(11) + '┤'}
              </div>

              {/* Data rows */}
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                >
                  <div className="flex hover:bg-primary/5 transition-colors">
                    <span className="border-l border-r border-primary/40 px-2 py-2 w-[27ch] text-primary truncate">
                      {edu.school}
                    </span>
                    <span className="border-r border-primary/40 px-2 py-2 w-[33ch] text-primary/80 truncate">
                      {edu.degree}
                    </span>
                    <span className="border-r border-primary/40 px-2 py-2 w-[21ch] text-primary/70">
                      {edu.period}
                    </span>
                    <span className={`border-r border-primary/40 px-2 py-2 w-[12ch] font-bold ${edu.status === 'CURRENT' ? 'text-primary crt-text-glow' : 'text-primary/40'}`}>
                      {edu.status}
                    </span>
                  </div>

                  {/* Detail row */}
                  <div className="flex">
                    <span className="border-l border-r border-primary/40 px-2 pb-2 w-[27ch] text-primary/30 text-[10px]" />
                    <span className="border-r border-primary/40 px-2 pb-2 w-[33ch] text-primary/40 text-[10px] col-span-3 whitespace-normal" style={{ width: 'calc(33ch + 21ch + 12ch + 2px)' }}>
                      {'// '}{edu.detail}
                    </span>
                  </div>

                  {i < EDUCATION.length - 1 && (
                    <div className="text-primary/30">
                      {'├' + '─'.repeat(26) + '┼' + '─'.repeat(32) + '┼' + '─'.repeat(20) + '┼' + '─'.repeat(11) + '┤'}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Bottom border */}
              <div className="text-primary/60">
                {'└' + '─'.repeat(26) + '┴' + '─'.repeat(32) + '┴' + '─'.repeat(20) + '┴' + '─'.repeat(11) + '┘'}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="font-mono text-xs text-primary/30 mt-4 space-y-1">
            <div>{EDUCATION.length} row(s) in set</div>
            <div className="text-primary/20">
              {'>>'} Education data compiled. Current status: IN_PROGRESS ■
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
