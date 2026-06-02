import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

type Project = {
  name: string;
  title: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  repo: string;
  homepage?: string;
  featured?: boolean;
  tags?: string[];
};

const PROJECTS: Project[] = [
  {
    name: 'MCP-India-Stack',
    title: 'MCP-India-Stack',
    description:
      'MCP server for Indian APIs — GSTIN, IFSC, PAN, UPI, pincode, HSN/SAC. Zero auth. Offline-first. Built for AI agents.',
    language: 'Python',
    stars: 17,
    forks: 4,
    repo: 'https://github.com/rehan1020/MCP-India-Stack',
    homepage: 'https://pypi.org/project/mcp-india-stack/',
    featured: true,
    tags: ['MCP', 'AI Agents', 'Indian APIs', 'Open Source'],
  },
  {
    name: 'OBI-Terminal',
    title: 'OBI Terminal',
    description:
      'Real-Time Bitget Futures Order Book Imbalance indicator. Streams live USDT-Futures order book and trade data, calculates OBI metrics, and visualizes them through a professional intraday trading UI.',
    language: 'JavaScript',
    stars: 3,
    forks: 0,
    repo: 'https://github.com/rehan1020/OBI-Terminal',
    tags: ['Trading', 'WebSocket', 'Full-Stack', 'Realtime'],
  },
  {
    name: 'Max-The-AI-powered-Personal-Assistant-',
    title: 'Max — AI Personal Assistant',
    description:
      'Full-featured AI-powered Windows orchestration engine. Listens for wake word "Max", converts voice commands into structured action plans via LLMs, and executes them on the desktop.',
    language: 'Python',
    stars: 0,
    forks: 0,
    repo: 'https://github.com/rehan1020/Max-The-AI-powered-Personal-Assistant-',
    tags: ['AI', 'Voice', 'LLMs', 'Automation'],
  },
  {
    name: 'CRYPMAX',
    title: 'CRYPMAX',
    description:
      'AI-based crypto trading bot running on a personal laptop, trading on the Bitget exchange. Educational reference — not financial advice.',
    language: 'Python',
    stars: 0,
    forks: 0,
    repo: 'https://github.com/rehan1020/CRYPMAX',
    tags: ['AI', 'Trading Bot', 'Crypto'],
  },
  {
    name: 'tgbot',
    title: 'tgbot — Signal-Based DEX Trader',
    description:
      'Reads trading signals from a Telegram group and uses Web3 wallet funds to execute trades on a decentralized exchange. Educational reference only.',
    language: 'Python',
    stars: 0,
    forks: 0,
    repo: 'https://github.com/rehan1020/tgbot',
    tags: ['Web3', 'DEX', 'Telegram', 'Bot'],
  },
  {
    name: 'policy-sim-env',
    title: 'Policy Sim Env',
    description:
      'Built for the Meta-PyTorch Hackathon hosted by Scaler School of Technology. Hosted as a HuggingFace Space.',
    language: 'Python',
    stars: 0,
    forks: 0,
    repo: 'https://github.com/rehan1020/policy-sim-env',
    homepage: 'https://huggingface.co/spaces/rehanshashi/policy-sim-env',
    tags: ['Hackathon', 'PyTorch', 'Simulation'],
  },
  {
    name: 'Deloitte-Project',
    title: 'Deloitte Project',
    description:
      'Solutions and notebooks tackling problems from the Deloitte Australia job simulation — Cyber, Technology, and Data Analytics tracks.',
    language: 'Python',
    stars: 0,
    forks: 0,
    repo: 'https://github.com/rehan1020/Deloitte-Project',
    tags: ['Data Analysis', 'Job Sim'],
  },
  {
    name: 'Quantative-analysis-and-data-filtering',
    title: 'Quantitative Analysis & Data Filtering',
    description:
      'Workbook from a J.P. Morgan job simulation — quantitative analysis, data filtering, and credit-risk modelling exercises.',
    language: 'Python',
    stars: 0,
    forks: 0,
    repo: 'https://github.com/rehan1020/Quantative-analysis-and-data-filtering',
    tags: ['Quant', 'Data Analysis', 'Job Sim'],
  },
];

const LANG_COLORS: Record<string, string> = {
  Python:     'text-blue-300 border-blue-300/40',
  JavaScript: 'text-yellow-300 border-yellow-300/40',
  TypeScript: 'text-sky-300 border-sky-300/40',
};

function MatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;
    const cols = Math.floor(W / 14);
    const drops: number[] = Array(cols).fill(0).map(() => Math.random() * -H);
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ01';

    const draw = () => {
      ctx.fillStyle = 'rgba(5,5,5,0.12)';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#00FF41';
      ctx.font = '12px JetBrains Mono, monospace';

      drops.forEach((y, i) => {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(ch, i * 14, y);
        drops[i] = y > H + Math.random() * 200 ? 0 : y + 14;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-canvas absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={p.repo}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="relative block border border-primary/25 bg-card hover:border-primary transition-all p-5 group flex flex-col gap-3 h-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Matrix rain overlay */}
      <div className={`matrix-canvas ${hovered ? 'active' : ''}`}>
        {hovered && <MatrixCanvas />}
      </div>

      <div className="relative z-10 flex flex-col gap-3 h-full">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className={`text-[10px] border px-2 py-0.5 font-mono tracking-widest ${LANG_COLORS[p.language] ?? 'text-primary border-primary/40'}`}>
            {p.language}
          </span>
          <div className="flex items-center gap-3 text-primary/50 text-[10px] font-mono">
            <span className="flex items-center gap-1"><FaStar /> {p.stars}</span>
            <span className="flex items-center gap-1"><FaCodeBranch /> {p.forks}</span>
          </div>
        </div>

        <h3 className="text-base font-bold text-primary group-hover:crt-text-glow leading-snug transition-all">
          {p.title}
        </h3>
        <p className="text-primary/70 text-xs leading-relaxed flex-1">{p.description}</p>

        {p.tags && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: hovered ? 1 : 0.6, height: 'auto' }}
            className="flex flex-wrap gap-1"
          >
            {p.tags.map(t => (
              <span key={t} className="text-[9px] bg-primary/10 border border-primary/20 text-primary/70 px-1.5 py-0.5 font-mono">
                {t}
              </span>
            ))}
          </motion.div>
        )}

        <div className="flex items-center gap-3 text-[10px] font-mono pt-2 border-t border-primary/10 mt-auto">
          <span className="flex items-center gap-1 text-primary/60 group-hover:text-primary transition-colors">
            <FaGithub /> Source
          </span>
          {p.homepage && (
            <span className="flex items-center gap-1 text-primary/60">
              <FaExternalLinkAlt /> Live
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
}

export function Projects() {
  const [featHovered, setFeatHovered] = useState(false);
  const featured = PROJECTS.filter(p => p.featured);
  const others = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 min-h-screen">
      <div className="max-w-5xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl font-display crt-text-glow">04. BUILDS</h2>
            <div className="flex-1 h-[1px] bg-primary/20" />
          </div>
          <p className="text-primary/50 text-xs font-mono mb-10 tracking-widest">
            TOTAL_REPOS: {PROJECTS.length} &nbsp;|&nbsp; SOURCE: github.com/rehan1020 &nbsp;|&nbsp; HOVER_TO_SCAN
          </p>

          {/* Featured */}
          {featured.map(p => (
            <motion.a
              key={p.name}
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative block border border-primary bg-primary/5 hover:bg-primary/10 transition-all crt-box-glow-strong p-6 mb-8 group overflow-hidden"
              onMouseEnter={() => setFeatHovered(true)}
              onMouseLeave={() => setFeatHovered(false)}
            >
              {/* Matrix overlay on featured */}
              <div className={`matrix-canvas ${featHovered ? 'active' : ''}`}>
                {featHovered && <MatrixCanvas />}
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] border border-primary text-primary px-2 py-0.5 font-mono tracking-widest crt-text-glow">
                      [ FEATURED ]
                    </span>
                    <span className={`text-[10px] border px-2 py-0.5 font-mono tracking-widest ${LANG_COLORS[p.language] ?? 'text-primary border-primary/40'}`}>
                      {p.language}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-primary/60 text-xs font-mono">
                    <span className="flex items-center gap-1"><FaStar /> {p.stars}</span>
                    <span className="flex items-center gap-1"><FaCodeBranch /> {p.forks}</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-display crt-text-glow mb-2 group-hover:underline">
                  {p.title}
                </h3>
                <p className="text-primary/80 text-sm leading-relaxed mb-4">{p.description}</p>

                {p.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map(t => (
                      <span key={t} className="text-[10px] bg-primary/10 border border-primary/20 text-primary/70 px-2 py-0.5 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 text-xs font-mono pt-3 border-t border-primary/20">
                  <span className="flex items-center gap-1.5 text-primary hover:underline">
                    <FaGithub /> View Source
                  </span>
                  {p.homepage && (
                    <span className="flex items-center gap-1.5 text-primary/70 hover:text-primary hover:underline">
                      <FaExternalLinkAlt /> Live / Package
                    </span>
                  )}
                </div>
              </div>
            </motion.a>
          ))}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {others.map((p, i) => (
              <ProjectCard key={p.name} p={p} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
