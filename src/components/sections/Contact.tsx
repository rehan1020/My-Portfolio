import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const PROMPTS = [
  { key: 'SENDER_NAME', label: 'ENTER_NAME', placeholder: 'Your name...' },
  { key: 'SENDER_EMAIL', label: 'ENTER_EMAIL', placeholder: 'your@email.com' },
  { key: 'MESSAGE', label: 'ENTER_MESSAGE', placeholder: 'Your message...' },
];

export function Contact() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [current, setCurrent] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!submitted) inputRef.current?.focus();
  }, [step, submitted]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (!current.trim()) return;
      const key = PROMPTS[step].key;
      const next = { ...values, [key]: current.trim() };
      setValues(next);
      setCurrent('');
      if (step < PROMPTS.length - 1) {
        setStep(step + 1);
      } else {
        setSubmitted(true);
      }
    }
  };

  const reset = () => {
    setStep(0);
    setValues({});
    setCurrent('');
    setSubmitted(false);
  };

  const mailBody = `Name: ${values.SENDER_NAME}\nEmail: ${values.SENDER_EMAIL}\n\nMessage:\n${values.MESSAGE}`;
  const mailHref = `mailto:rehan01shashi@gmail.com?subject=Contact from ${values.SENDER_NAME}&body=${encodeURIComponent(mailBody)}`;

  return (
    <section id="contact" className="py-24 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="text-center space-y-3">
            <h2 className="text-5xl md:text-7xl font-display crt-text-glow">07_PING</h2>
            <p className="text-primary/60 text-sm font-mono">
              System ready for incoming transmissions.
            </p>
          </div>

          {/* Direct links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {[
              { href: 'mailto:rehan01shashi@gmail.com', icon: <FaEnvelope />, label: 'Send Email' },
              { href: 'https://linkedin.com/in/rehan-shashi', icon: <FaLinkedin />, label: 'LinkedIn', external: true },
              { href: 'https://github.com/rehan1020', icon: <FaGithub />, label: 'GitHub', external: true },
            ].map(({ href, icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="group relative px-6 py-3 bg-primary/5 border border-primary/40 hover:border-primary retro-hover flex items-center gap-3 w-full sm:w-auto justify-center font-mono text-sm crt-box-glow transition-all"
              >
                <span className="text-primary group-hover:text-background transition-colors">{icon}</span>
                <span className="uppercase tracking-widest font-bold text-xs">{label}</span>
              </a>
            ))}
          </div>

          {/* Terminal contact form */}
          <div className="border border-primary crt-box-glow-strong">
            {/* Title bar */}
            <div className="bg-primary/10 border-b border-primary/30 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-primary/70" />
              </div>
              <span className="text-primary/60 text-xs font-mono tracking-widest">ping@rs_os — contact_form.sh</span>
              {submitted && (
                <button
                  onClick={reset}
                  className="text-primary/50 hover:text-primary text-xs font-mono border border-primary/30 px-2 py-0.5 hover:border-primary transition-all"
                >
                  [RESET]
                </button>
              )}
            </div>

            <div className="p-6 font-mono text-sm space-y-3 min-h-[220px]">
              {/* Greeting */}
              <div className="text-primary/40 text-xs mb-2">
                Initiating contact sequence... Type your response and press [ENTER]
              </div>

              {/* Completed steps */}
              {PROMPTS.slice(0, step).map((p, i) => (
                <div key={p.key} className="space-y-0.5">
                  <div className="text-primary/40 text-xs">{p.label}:</div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary/40">{'>'}</span>
                    <span className="text-primary">{values[p.key]}</span>
                    <span className="text-primary/40 text-xs ml-2">✓ OK</span>
                  </div>
                </div>
              ))}

              {/* Current input */}
              {!submitted && step < PROMPTS.length && (
                <div className="space-y-1">
                  <div className="text-primary/60 text-xs">{PROMPTS[step].label}:</div>
                  <div
                    className="flex items-center gap-2 cursor-text"
                    onClick={() => inputRef.current?.focus()}
                  >
                    <span className="text-primary">{'>'}</span>
                    <input
                      ref={inputRef}
                      type={PROMPTS[step].key === 'SENDER_EMAIL' ? 'email' : 'text'}
                      value={current}
                      onChange={e => setCurrent(e.target.value)}
                      onKeyDown={handleKey}
                      placeholder={PROMPTS[step].placeholder}
                      className="flex-1 bg-transparent outline-none border-none text-primary placeholder:text-primary/20 caret-transparent"
                      autoComplete="off"
                      spellCheck="false"
                    />
                    <span className="inline-block w-2 h-4 bg-primary cursor-blink shrink-0" />
                  </div>
                </div>
              )}

              {/* Submitted state */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3 pt-2"
                >
                  <div className="text-primary crt-text-glow text-xs">
                    {'> TRANSMISSION READY. CLICK BELOW TO SEND VIA EMAIL CLIENT.'}
                  </div>
                  <a
                    href={mailHref}
                    className="inline-block border border-primary text-primary retro-hover px-6 py-3 text-xs uppercase tracking-widest font-bold crt-box-glow transition-all"
                  >
                    [ Send_Transmission ]_
                  </a>
                </motion.div>
              )}
            </div>
          </div>

          <div className="text-center text-primary/30 text-xs font-mono border-t border-primary/10 pt-6">
            <p>RS_OS © {new Date().getFullYear()}</p>
            <p className="mt-1">SYSTEM TERMINATION IN 3... 2... 1...</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
