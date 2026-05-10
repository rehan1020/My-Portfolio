import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-display crt-text-glow">01. ABOUT_ME</h2>
            <div className="flex-1 h-[1px] bg-primary/20" />
          </div>

          {/* User Profile Readout */}
          <div className="border border-primary crt-box-glow-strong bg-background/80 font-mono text-sm mb-8">
            {/* Header bar */}
            <div className="bg-primary/10 border-b border-primary/30 px-4 py-2 flex items-center justify-between">
              <span className="text-primary/60 text-xs tracking-widest">USER_PROFILE.DAT — READ MODE</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary text-xs font-bold tracking-widest">STATUS: ACTIVE &amp; BUILDING</span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Bio block */}
              <div>
                <div className="text-primary/40 text-xs mb-2 tracking-widest">root@rs_os:~$ cat summary.txt</div>
                <div className="text-primary/80 space-y-3 leading-relaxed">
                  <p>
                    Curious 12th grader studying PCM with a strong focus on Artificial Intelligence. I operate at the intersection of development, research, and strategy.
                  </p>
                  <p>
                    As the Owner and Founder of{' '}
                    <span className="text-primary font-bold">MCP-India-Stack</span>, I build applications and
                    research AI models. My interests extend beyond code into cryptocurrency, futures trading,
                    and startup ventures.
                  </p>
                  <p>
                    Currently participating in the{' '}
                    <span className="text-primary font-bold">Young Innovator Internship Challenge 7.0</span>.
                    I thrive in cross-functional team collaboration, constantly looking to build the next big thing.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-primary/20 pt-6">
                <div className="text-primary/40 text-xs mb-4 tracking-widest">root@rs_os:~$ cat profile.json</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* System fields */}
                  <div className="space-y-2">
                    {[
                      { key: 'USER_ID', val: 'rehan_shashi' },
                      { key: 'AGE', val: '17' },
                      { key: 'GRADE', val: '12th — PCM + AI' },
                      { key: 'LOCATION', val: 'India' },
                      { key: 'AFFILIATION', val: 'MCP-India-Stack (Owner)' },
                      { key: 'CHALLENGE', val: 'Young Innovator v7.0' },
                    ].map(({ key, val }) => (
                      <div key={key} className="flex gap-2 text-xs">
                        <span className="text-primary/50 w-28 shrink-0">{key}</span>
                        <span className="text-primary/30">:</span>
                        <span className="text-primary">{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interests */}
                  <div>
                    <div className="text-primary/50 text-xs mb-2 tracking-widest">INTERESTS[]</div>
                    <div className="space-y-1.5">
                      {[
                        'AI Research & Model Building',
                        'Full-Stack App Development',
                        'Cryptocurrency & Futures Trading',
                        'Tech Startups & Ventures',
                        'Prompt Engineering',
                        'Social Media Growth',
                      ].map((interest, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs group cursor-default">
                          <span className="text-primary/40 group-hover:text-primary transition-colors">{'>'}</span>
                          <span className="text-primary/80 group-hover:text-primary transition-colors">{interest}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer status */}
              <div className="border-t border-primary/20 pt-4 flex items-center justify-between text-xs text-primary/40">
                <span>EOF — summary.txt</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  PROCESS RUNNING
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
