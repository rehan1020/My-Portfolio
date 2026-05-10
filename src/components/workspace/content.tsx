import React from 'react';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <div className="text-primary/40 text-xs font-bold tracking-widest border-b border-primary/20 pb-1">{title}</div>
      {children}
    </div>
  );
}

function Field({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex gap-2 text-xs font-mono">
      <span className="text-primary/50 w-24 shrink-0">{label}</span>
      <span className="text-primary/30">:</span>
      <span className={highlight ? 'text-primary font-bold crt-text-glow' : 'text-primary/80'}>{value}</span>
    </div>
  );
}

function AsciiBar({ name, level, category }: { name: string; level: number; category: string }) {
  const filled = Math.round((level / 100) * 10);
  const bar = '█'.repeat(filled) + '░'.repeat(10 - filled);
  const catColor = category === 'TECH' ? 'text-cyan-accent' : category === 'BUSINESS' ? 'text-amber' : 'text-primary/60';
  return (
    <div className="font-mono text-xs">
      <div className="flex justify-between mb-0.5">
        <span className="text-primary/90">{name}</span>
        <span className={`text-[10px] border border-primary/20 px-1 ${catColor}`}>{category}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-primary/70 tracking-wide">[{bar}]</span>
        <span className="text-primary font-bold">{level}%</span>
      </div>
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="text-[10px] border border-primary/25 text-primary/70 px-2 py-0.5 font-mono">
      {label}
    </span>
  );
}

export const FILE_CONTENTS: Record<string, React.ReactNode> = {
  readme: (
    <div className="space-y-6 font-mono text-sm">
      <div>
        <pre className="text-primary crt-text-glow text-[0.55rem] leading-tight hidden md:block">{`
██████╗ ███████╗██╗  ██╗ █████╗ ███╗   ██╗
██╔══██╗██╔════╝██║  ██║██╔══██╗████╗  ██║
██████╔╝█████╗  ███████║███████║██╔██╗ ██║
██╔══██╗██╔══╝  ██╔══██║██╔══██║██║╚██╗██║
██║  ██║███████╗██║  ██║██║  ██║██║ ╚████║
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝

███████╗██╗  ██╗ █████╗ ███████╗██╗  ██╗██╗
██╔════╝██║  ██║██╔══██╗██╔════╝██║  ██║██║
███████╗███████║███████║███████╗███████║██║
╚════██║██╔══██║██╔══██║╚════██║██╔══██║██║
███████║██║  ██║██║  ██║███████║██║  ██║██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝`.trim()}</pre>
        <h1 className="text-4xl font-display crt-text-glow md:hidden">REHAN SHASHI</h1>
      </div>
      <div className="flex items-center gap-3 text-xs">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        <span className="text-primary/60">STATUS:</span>
        <span className="text-primary font-bold">ACTIVE &amp; BUILDING</span>
        <span className="text-primary/30">|</span>
        <span className="text-primary/50">India</span>
      </div>
      <div className="text-primary/70 text-xs leading-relaxed max-w-xl">
        <p>AI Researcher &amp; Developer · Owner of <span className="text-primary font-bold">MCP-India-Stack</span> · 17-year-old student building at the intersection of AI, trading, and software.</p>
      </div>
      <div className="border border-primary/20 bg-primary/5 p-4 space-y-2">
        <div className="text-primary/40 text-[10px] tracking-widest mb-3">QUICK_NAV — click files in the navigator →</div>
        {[
          { id: 'profile', label: '/about/profile.md', desc: 'Bio and user profile' },
          { id: 'mcp-india-stack', label: '/builds/mcp-india-stack.md ★', desc: 'Featured project — v0.3.0' },
          { id: 'capabilities', label: '/skills/capabilities.sh', desc: 'Skill diagnostics' },
          { id: 'ping', label: '/contact/ping.sh', desc: 'Get in touch' },
        ].map(({ label, desc }) => (
          <div key={label} className="flex items-center gap-3 text-xs">
            <span className="text-primary/50">{'>'}</span>
            <span className="text-primary">{label}</span>
            <span className="text-primary/30">—</span>
            <span className="text-primary/50">{desc}</span>
          </div>
        ))}
      </div>
    </div>
  ),

  profile: (
    <div className="space-y-6 font-mono text-xs">
      <Section title="root@rs_os:~$ cat /about/profile.md">
        <div className="text-primary/80 space-y-2 leading-relaxed text-sm">
          <p>Curious 12th grader studying PCM with a strong focus on Artificial Intelligence.</p>
          <p>Owner and Founder of <span className="text-primary font-bold">MCP-India-Stack</span> — an MCP server ecosystem for Indian APIs. Ex Co-Founder of <span className="text-primary font-bold">Redarted</span>.</p>
          <p>Currently serving as Community Coordinator at <span className="text-primary font-bold">YOTTA</span> and Club President at <span className="text-primary font-bold">Unison Community</span>, building at the intersection of AI, trading, and startup culture.</p>
        </div>
      </Section>
      <Section title="profile.json">
        <div className="space-y-1.5">
          <Field label="USER_ID" value="rehan_shashi" />
          <Field label="AGE" value="17" highlight />
          <Field label="GRADE" value="12th — PCM + AI" />
          <Field label="LOCATION" value="India" />
          <Field label="AFFILIATION" value="MCP-India-Stack (Owner)" highlight />
          <Field label="PREV_ROLE" value="Co-Founder @ Redarted" />
          <Field label="INTERNSHIP" value="Young Innovator Challenge 7.0" />
          <Field label="STATUS" value="ACTIVE & BUILDING ■" highlight />
        </div>
      </Section>
      <Section title="INTERESTS[]">
        {['AI Research & Model Building', 'Full-Stack App Development', 'Cryptocurrency & Futures Trading', 'Tech Startups & Ventures', 'Prompt Engineering', 'Social Media Growth'].map(i => (
          <div key={i} className="flex gap-2">
            <span className="text-primary/40">{'>'}</span>
            <span className="text-primary/80">{i}</span>
          </div>
        ))}
      </Section>
    </div>
  ),

  'work-history': (
    <div className="space-y-6 font-mono text-xs">
      <Section title="root@rs_os:~$ cat /about/work-history.log">
        <div className="space-y-6">
          {[
            {
              title: 'Community Coordinator',
              company: 'YOTTA',
              type: 'Internship',
              period: 'May 2026 – Present · 1 mo',
              location: '',
              desc: 'Community Building, Community Networking, and related skills.',
            },
            {
              title: 'Club President',
              company: 'Unison Community',
              type: 'Internship',
              period: 'May 2026 – Present · 1 mo',
              location: 'Remote',
              desc: 'Club Operations, Club Management, and related skills.',
            },
            {
              title: 'Owner / Founder',
              company: 'MCP-India-Stack',
              type: '',
              period: 'Mar 2026 – Present',
              location: 'India (Remote)',
              desc: 'Leading technical strategy, architecture, and overall vision for the MCP-India-Stack ecosystem. Built and published to PyPI. 19★ on GitHub.',
            },
            {
              title: 'Co-Founder',
              company: 'Redarted',
              type: '',
              period: 'Oct 2025 – Dec 2025 · 3 months',
              location: 'India',
              desc: 'Early-stage startup venture. Gained experience in team building, product ideation, and early-stage company operations.',
            },
          ].map((exp, i) => (
            <div key={i} className="border-l-2 border-primary/40 pl-4 space-y-1">
              <div className="text-primary/40 text-[10px]">{exp.period}</div>
              <div className="text-primary font-bold text-sm">{exp.title}</div>
              <div className="text-primary/70">@ {exp.company}{exp.type ? <span className="text-primary/40 ml-2">· {exp.type}</span> : null}</div>
              {exp.location ? <div className="text-primary/40 text-[10px] uppercase tracking-wider">{exp.location}</div> : null}
              <div className="text-primary/60 mt-2 leading-relaxed">{exp.desc}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  ),

  capabilities: (
    <div className="space-y-6 font-mono text-xs">
      <Section title="root@rs_os:~$ bash /skills/capabilities.sh">
        <div className="text-primary/40 text-[10px] mb-4">Running skill diagnostic scan...</div>
        <div className="space-y-4">
          <AsciiBar name="Team Collaboration" level={95} category="SOFT" />
          <AsciiBar name="Start-up Ventures" level={90} category="BUSINESS" />
          <AsciiBar name="App Development" level={85} category="TECH" />
          <AsciiBar name="Social Media Mgmt" level={85} category="SOFT" />
          <AsciiBar name="AI Research" level={80} category="TECH" />
          <AsciiBar name="Futures Trading" level={75} category="FINANCE" />
          <AsciiBar name="Prompt Engineering" level={70} category="TECH" />
        </div>
        <div className="mt-4 border-t border-primary/20 pt-3 text-primary/40 text-[10px]">
          SCAN COMPLETE — 7 modules loaded · 0 errors
        </div>
      </Section>
      <Section title="DIAGNOSTICS">
        {[
          { label: 'Leadership modules', ok: true },
          { label: 'Market analysis algorithms', ok: true },
          { label: 'AI model integration', ok: true },
          { label: 'Community engagement', ok: true },
          { label: 'Sleep module', ok: false },
        ].map(({ label, ok }) => (
          <div key={label} className="flex gap-2">
            <span className={ok ? 'text-primary font-bold' : 'text-amber font-bold'}>{ok ? '[ OK ]' : '[ !! ]'}</span>
            <span className={ok ? 'text-primary/70' : 'text-amber/70'}>{label}</span>
          </div>
        ))}
      </Section>
    </div>
  ),

  stack: (
    <div className="space-y-4 font-mono text-xs">
      <Section title="root@rs_os:~$ cat /skills/stack.json">
        <pre className="text-primary/80 text-[10px] leading-relaxed whitespace-pre-wrap">{JSON.stringify({
          languages: ['Python', 'JavaScript', 'TypeScript'],
          ai_ml: ['Ollama', 'OpenRouter', 'LangChain', 'HuggingFace', 'scikit-learn', 'XGBoost', 'Random Forest'],
          web: ['React', 'Vite', 'Node.js', 'Express'],
          trading: ['Bitget API', 'WebSocket', 'Futures'],
          blockchain: ['Web3', 'DEX', 'Telegram Bots'],
          tools: ['Git', 'GitHub', 'PyPI'],
          protocols: ['MCP (Model Context Protocol)', 'REST', 'WebSocket'],
        }, null, 2)}</pre>
      </Section>
    </div>
  ),

  'mcp-india-stack': (
    <div className="space-y-6 font-mono text-xs">
      <div className="border border-primary bg-primary/5 p-4 crt-box-glow-strong">
        <div className="flex items-center gap-3 mb-3">
          <span className="border border-primary text-primary text-[10px] px-2 py-0.5 tracking-widest font-bold crt-text-glow">[ FEATURED ]</span>
          <span className="border border-blue-300/40 text-blue-300 text-[10px] px-2 py-0.5 tracking-widest">Python</span>
          <span className="text-primary/50 text-[10px] ml-auto">★ 19 · fork 6</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-display crt-text-glow mb-1">MCP-India-Stack</h2>
        <div className="text-primary/50 text-[10px] tracking-widest mb-3">v0.3.0 · ACTIVE DEVELOPMENT</div>
        <p className="text-primary/80 leading-relaxed mb-4">
          MCP server for Indian APIs — GSTIN, IFSC, PAN, UPI, pincode, HSN/SAC. Zero auth. Offline-first. For AI agents.
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {['fastmcp', 'MCP', 'GSTIN', 'IFSC', 'UPI', 'HSN', 'Pincode', 'PAN', 'PyPI', 'Python'].map(t => <Tag key={t} label={t} />)}
        </div>
        <div className="space-y-1 text-[10px]">
          <a href="https://github.com/rehan1020/MCP-India-Stack" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary hover:underline">
            <span>{'>'}</span> github.com/rehan1020/MCP-India-Stack
          </a>
          <a href="https://pypi.org/project/mcp-india-stack/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary/70 hover:text-primary hover:underline">
            <span>{'>'}</span> pypi.org/project/mcp-india-stack/
          </a>
        </div>
      </div>
      <Section title="CHANGELOG — v0.3.0">
        {['Added GSTIN validation endpoint', 'HSN/SAC code lookup improved', 'Offline-first caching layer', 'PyPI package published'].map((c, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-primary/30">+</span>
            <span className="text-primary/70">{c}</span>
          </div>
        ))}
      </Section>
      <Section title="TECHNICAL ARCHITECTURE">
        <div className="space-y-1 text-[11px]">
          <Field label="Protocol" value="Model Context Protocol (MCP)" />
          <Field label="Runtime" value="Python 3.10+" />
          <Field label="APIs" value="GSTIN · IFSC · PAN · UPI · Pincode · HSN/SAC" />
          <Field label="Auth" value="None required (zero-auth)" />
          <Field label="Mode" value="Offline-first with caching" />
          <Field label="Install" value="pip install mcp-india-stack" highlight />
        </div>
      </Section>
    </div>
  ),

  'obi-terminal': (
    <div className="space-y-5 font-mono text-xs">
      <div className="border border-primary/40 p-4 bg-primary/3">
        <div className="flex items-center gap-2 mb-2">
          <span className="border border-yellow-300/40 text-yellow-300 text-[10px] px-2 py-0.5">JavaScript</span>
          <span className="text-primary/50 text-[10px] ml-auto">★ 3 · fork 1</span>
        </div>
        <h2 className="text-xl font-display crt-text-glow mb-2">OBI Terminal</h2>
        <p className="text-primary/70 leading-relaxed">A full-stack web application designed as a Real-Time Bitget Futures Order Book Imbalance Indicator. Streams real-time USDT-Futures order book and trade data from Bitget's public WebSocket API, calculates Order Book Imbalance (OBI) metrics, and visualizes the data through a professional, dense intraday trading UI featuring a DOM-style view.</p>
      </div>
      <Section title="TECH STACK">
        {['JavaScript', 'WebSocket', 'Full-Stack', 'Realtime', 'Bitget API'].map(t => <div key={t} className="flex gap-2"><span className="text-primary/40">{'>'}</span><span className="text-primary/70">{t}</span></div>)}
      </Section>
      <a href="https://github.com/rehan1020/OBI-Terminal" target="_blank" rel="noreferrer" className="block text-primary hover:underline text-[10px]">{'>'} github.com/rehan1020/OBI-Terminal</a>
    </div>
  ),

  'max-assistant': (
    <div className="space-y-5 font-mono text-xs">
      <div className="border border-primary/40 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="border border-blue-300/40 text-blue-300 text-[10px] px-2 py-0.5">Python</span>
          <span className="text-primary/50 text-[10px] ml-auto">★ 0 · fork 0</span>
        </div>
        <h2 className="text-xl font-display crt-text-glow mb-2">Max — AI Personal Assistant</h2>
        <p className="text-primary/70 leading-relaxed">Max is a full-featured AI-powered Windows orchestration engine with a voice interface. It listens for the wake word "Max", converts voice commands into structured action plans using your choice of local Ollama or cloud OpenRouter LLMs, validates them for safety, and executes them on your real desktop — browser automation, file management, and system control.</p>
      </div>
      <Section title="CAPABILITIES">
        {['Wake word detection: "Max"', 'LLM action planning (Ollama / OpenRouter)', 'Browser automation', 'File management', 'System control', 'Safety validation layer'].map(c => (
          <div key={c} className="flex gap-2"><span className="text-primary/40">{'>'}</span><span className="text-primary/70">{c}</span></div>
        ))}
      </Section>
      <a href="https://github.com/rehan1020/Max-The-AI-powered-Personal-Assistant-" target="_blank" rel="noreferrer" className="block text-primary hover:underline text-[10px]">{'>'} github.com/rehan1020/Max-The-AI-powered-Personal-Assistant-</a>
    </div>
  ),

  crypmax: (
    <div className="space-y-5 font-mono text-xs">
      <div className="border border-primary/40 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="border border-blue-300/40 text-blue-300 text-[10px] px-2 py-0.5">Python</span>
          <span className="text-primary/50 text-[10px] ml-auto">★ 0 · fork 0</span>
        </div>
        <h2 className="text-xl font-display crt-text-glow mb-2">CRYPMAX</h2>
        <p className="text-primary/70 leading-relaxed">An AI-based trading bot that works on your personal laptop or computer and trades on the Bitget exchange. Educational reference only — no further updates will be provided. Any money lost is not the author's responsibility.</p>
      </div>
      <Section title="TAGS"><div className="flex flex-wrap gap-1">{['AI', 'Trading Bot', 'Crypto', 'Bitget', 'Python'].map(t => <Tag key={t} label={t} />)}</div></Section>
      <a href="https://github.com/rehan1020/CRYPMAX" target="_blank" rel="noreferrer" className="block text-primary hover:underline text-[10px]">{'>'} github.com/rehan1020/CRYPMAX</a>
    </div>
  ),

  tgbot: (
    <div className="space-y-5 font-mono text-xs">
      <div className="border border-primary/40 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="border border-blue-300/40 text-blue-300 text-[10px] px-2 py-0.5">Python</span>
          <span className="text-primary/50 text-[10px] ml-auto">★ 0 · fork 0</span>
        </div>
        <h2 className="text-xl font-display crt-text-glow mb-2">tgbot — Signal-Based DEX Trader</h2>
        <p className="text-primary/70 leading-relaxed">A signal-based DEX trader that takes trading signals from a Telegram group and uses the money in your Web3 wallet to trade the pair on a decentralised exchange. Educational reference only — no further updates will be provided. Any money lost is not the author's responsibility.</p>
      </div>
      <Section title="TAGS"><div className="flex flex-wrap gap-1">{['Web3', 'DEX', 'Telegram', 'Bot', 'Python', 'Crypto'].map(t => <Tag key={t} label={t} />)}</div></Section>
      <a href="https://github.com/rehan1020/tgbot" target="_blank" rel="noreferrer" className="block text-primary hover:underline text-[10px]">{'>'} github.com/rehan1020/tgbot</a>
    </div>
  ),

  'policy-sim': (
    <div className="space-y-5 font-mono text-xs">
      <div className="border border-primary/40 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="border border-blue-300/40 text-blue-300 text-[10px] px-2 py-0.5">Python</span>
          <span className="text-primary/50 text-[10px] ml-auto">★ 0 · fork 0</span>
        </div>
        <h2 className="text-xl font-display crt-text-glow mb-2">Policy Sim Env</h2>
        <p className="text-primary/70 leading-relaxed">A project built for the Meta-PyTorch Hackathon hosted by Scaler School of Technology. Hosted as a live HuggingFace Space.</p>
      </div>
      <Section title="TAGS"><div className="flex flex-wrap gap-1">{['PyTorch', 'RL', 'Hackathon', 'HuggingFace', 'Python'].map(t => <Tag key={t} label={t} />)}</div></Section>
      <Section title="LINKS">
        <a href="https://github.com/rehan1020/policy-sim-env" target="_blank" rel="noreferrer" className="flex gap-2 text-primary hover:underline text-[10px]"><span>{'>'}</span> github.com/rehan1020/policy-sim-env</a>
        <a href="https://huggingface.co/spaces/rehanshashi/policy-sim-env" target="_blank" rel="noreferrer" className="flex gap-2 text-primary/70 hover:text-primary hover:underline text-[10px]"><span>{'>'}</span> huggingface.co/spaces/rehanshashi/policy-sim-env</a>
      </Section>
    </div>
  ),

  'cred-anthropic': (
    <div className="space-y-4 font-mono text-xs">
      <Section title="ANTHROPIC CERTIFICATIONS">
        {[
          { title: 'AI Fluency Framework & Foundations', date: 'Mar 2026', id: 'g4rpjekjhrev', link: 'https://verify.skilljar.com/c/g4rpjekjhrev' },
          { title: 'Introduction to Agent Skills', date: 'Mar 2026', id: 'rix5vhh2xdbe', link: 'https://verify.skilljar.com/c/rix5vhh2xdbe' },
        ].map(c => (
          <div key={c.id} className="border border-primary/20 p-3 space-y-1 hover:border-primary transition-colors">
            <div className="text-primary font-bold">{c.title}</div>
            <div className="text-primary/50 text-[10px]">DATE: {c.date} · ID: {c.id}</div>
            <a href={c.link} target="_blank" rel="noreferrer" className="text-primary/60 hover:text-primary text-[10px] hover:underline">{'>'} Verify Certificate</a>
          </div>
        ))}
      </Section>
    </div>
  ),

  'cred-ibm': (
    <div className="space-y-4 font-mono text-xs">
      <Section title="IBM CERTIFICATIONS">
        {[
          { title: 'Enterprise Design Thinking Practitioner', date: 'Feb 2026', skills: 'Entrepreneurship, ERP' },
          { title: 'AI Fundamentals: Foundations for Understanding AI', date: 'Jan 2026', skills: 'Artificial Intelligence' },
          { title: 'AI Literacy', date: 'Jan 2026', skills: 'Artificial Intelligence' },
        ].map((c, i) => (
          <div key={i} className="border border-primary/20 p-3 space-y-1 hover:border-primary transition-colors">
            <div className="text-primary font-bold">{c.title}</div>
            <div className="text-primary/50 text-[10px]">DATE: {c.date} · SKILLS: {c.skills}</div>
          </div>
        ))}
      </Section>
    </div>
  ),

  'cred-microsoft': (
    <div className="space-y-4 font-mono text-xs">
      <Section title="MICROSOFT CERTIFICATIONS">
        <div className="border border-primary/20 p-3 space-y-1 hover:border-primary transition-colors">
          <div className="text-primary font-bold">Introduction to Generative AI and Agents</div>
          <div className="text-primary/50 text-[10px]">DATE: Feb 2026 · SKILLS: LLMs, AI Agents</div>
          <a href="https://learn.microsoft.com/en-us/users/rehanshashi-7233/achievements/7bu7denz" target="_blank" rel="noreferrer" className="text-primary/60 hover:text-primary text-[10px] hover:underline">{'>'} View Achievement</a>
        </div>
      </Section>
    </div>
  ),

  'cred-google': (
    <div className="space-y-4 font-mono text-xs">
      <Section title="GOOGLE CERTIFICATIONS">
        {[
          { title: 'Fundamentals of Digital Marketing', date: 'Feb 2026', skills: 'Digital Marketing' },
          { title: 'YouTube Music Certification', date: 'Feb 2026', skills: 'Music' },
          { title: 'YouTube Asset Monetization', date: 'Feb 2026', skills: 'Asset Monetization' },
        ].map((c, i) => (
          <div key={i} className="border border-primary/20 p-3 space-y-1">
            <div className="text-primary font-bold">{c.title}</div>
            <div className="text-primary/50 text-[10px]">DATE: {c.date} · SKILLS: {c.skills}</div>
          </div>
        ))}
      </Section>
    </div>
  ),

  'cred-hp': (
    <div className="space-y-4 font-mono text-xs">
      <Section title="HP CERTIFICATIONS">
        {['Strategic Planning for Business', 'IT for Business Success', 'Agile Project Management', 'Circular Economy', 'Profit and Loss', 'Cash Flow'].map((title, i) => (
          <div key={i} className="border border-primary/20 p-2 hover:border-primary transition-colors">
            <div className="text-primary/80">{title}</div>
            <div className="text-primary/40 text-[10px]">HP LIFE · Feb 2026</div>
          </div>
        ))}
      </Section>
    </div>
  ),

  'cred-forage': (
    <div className="space-y-4 font-mono text-xs">
      <Section title="FORAGE JOB SIMULATIONS">
        {[
          { company: 'Deloitte Australia', roles: ['Cyber', 'Technology', 'Data Analytics'], date: 'Mar 2026' },
          { company: 'Goldman Sachs', roles: ['Risk', 'Operations', 'Controllers'], date: 'Feb–Mar 2026' },
          { company: 'J.P. Morgan', roles: ['Quantitative Research'], date: 'Feb 2026' },
          { company: 'Tata', roles: ['Data Visualisation'], date: 'Mar 2026' },
        ].map((f, i) => (
          <div key={i} className="border border-primary/20 p-3 space-y-1 hover:border-primary transition-colors">
            <div className="text-primary font-bold">{f.company}</div>
            <div className="text-primary/60">{f.roles.join(' · ')} Job Simulation{f.roles.length > 1 ? 's' : ''}</div>
            <div className="text-primary/40 text-[10px]">DATE: {f.date}</div>
          </div>
        ))}
      </Section>
    </div>
  ),

  'cred-tcs': (
    <div className="space-y-4 font-mono text-xs">
      <Section title="TCS CERTIFICATIONS">
        <div className="border border-primary/20 p-3 space-y-1">
          <div className="text-primary font-bold">TCS iON Career Edge — Young Professional</div>
          <div className="text-primary/50 text-[10px]">DATE: Apr 2026 · SKILLS: Communication, Business Etiquette, Soft Skills</div>
          <div className="text-primary/40 text-[10px]">ID: 272697-30514947-1016</div>
        </div>
      </Section>
    </div>
  ),

  ping: (
    <div className="space-y-6 font-mono text-xs">
      <Section title="root@rs_os:~$ bash /contact/ping.sh">
        <div className="text-primary/60 mb-4">System ready for incoming transmissions.</div>
        <div className="space-y-3">
          {[
            { label: 'EMAIL', value: 'rehan01shashi@gmail.com', href: 'mailto:rehan01shashi@gmail.com' },
            { label: 'LINKEDIN', value: 'linkedin.com/in/rehan-shashi', href: 'https://linkedin.com/in/rehan-shashi' },
            { label: 'GITHUB', value: 'github.com/rehan1020', href: 'https://github.com/rehan1020' },
          ].map(({ label, value, href }) => (
            <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
              className="group flex items-center gap-4 border border-primary/25 p-3 hover:border-primary hover:bg-primary/5 transition-all"
            >
              <span className="text-primary/50 w-20 shrink-0">{label}</span>
              <span className="text-primary/30">→</span>
              <span className="text-primary group-hover:underline">{value}</span>
            </a>
          ))}
        </div>
      </Section>
      <Section title="AVAILABILITY">
        <div className="space-y-1">
          <Field label="STATUS" value="Open to collaborations" highlight />
          <Field label="RESPONSE" value="Within 24 hours" />
          <Field label="TIMEZONE" value="IST (UTC+5:30)" />
          <Field label="PREFERRED" value="Email or LinkedIn" />
        </div>
      </Section>
    </div>
  ),
};
