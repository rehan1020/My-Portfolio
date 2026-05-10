import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

type Cert = {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  link?: string;
};

const CERTIFICATIONS: Cert[] = [
  // Anthropic
  {
    title: 'AI Fluency Framework & Foundations',
    issuer: 'Anthropic',
    date: 'Mar 2026',
    credentialId: 'g4rpjekjhrev',
    skills: ['Artificial Intelligence'],
    link: 'https://verify.skilljar.com/c/g4rpjekjhrev',
  },
  {
    title: 'Introduction to Agent Skills',
    issuer: 'Anthropic',
    date: 'Mar 2026',
    credentialId: 'rix5vhh2xdbe',
    skills: ['AI Agents'],
    link: 'https://verify.skilljar.com/c/rix5vhh2xdbe',
  },
  // IBM
  {
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    date: 'Feb 2026',
    credentialId: '01458fdc-2f57-4dff-8c2f-15b74d09991b',
    skills: ['Entrepreneurship', 'ERP'],
    link: 'https://www.credly.com/badges/01458fdc-2f57-4dff-8c2f-15b74d09991b/linked_in_profile',
  },
  {
    title: 'AI Fundamentals: Foundations for Understanding AI',
    issuer: 'IBM',
    date: 'Jan 2026',
    credentialId: '1a87822b-6401-4fb7-a688-1320c13960c2',
    skills: ['Artificial Intelligence'],
    link: 'https://www.credly.com/badges/1a87822b-6401-4fb7-a688-1320c13960c2',
  },
  {
    title: 'AI Literacy',
    issuer: 'IBM',
    date: 'Jan 2026',
    credentialId: '03768124-4a7f-48e5-8b45-79a904258877',
    skills: ['Artificial Intelligence'],
    link: 'https://www.credly.com/badges/03768124-4a7f-48e5-8b45-79a904258877/',
  },
  // Microsoft
  {
    title: 'Introduction to Generative AI and Agents',
    issuer: 'Microsoft',
    date: 'Feb 2026',
    credentialId: '4283BE900C4160D9',
    skills: ['LLMs', 'AI Agents'],
    link: 'https://learn.microsoft.com/en-us/users/rehanshashi-7233/achievements/7bu7denz',
  },
  // Google
  {
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google',
    date: 'Feb 2026',
    credentialId: '449824948',
    skills: ['Digital Marketing'],
    link: 'https://skillshop.exceedlms.com/student/award/N1rzucoajRMVP1DzN9BtMMGE',
  },
  {
    title: 'YouTube Music Certification',
    issuer: 'Google',
    date: 'Feb 2026',
    credentialId: '450285296',
    skills: [],
  },
  {
    title: 'YouTube Asset Monetization',
    issuer: 'Google',
    date: 'Feb 2026',
    credentialId: '450447543',
    skills: ['Asset Monetization'],
  },
  // HP
  {
    title: 'Strategic Planning for Business',
    issuer: 'HP',
    date: 'Feb 2026',
    credentialId: '12dcb2dc-7fba-4901-9d7e-c3a4acbe64e9',
    skills: ['Business Strategy'],
    link: 'https://www.life-global.org/certificate/12dcb2dc-7fba-4901-9d7e-c3a4acbe64e9',
  },
  {
    title: 'IT for Business Success',
    issuer: 'HP',
    date: 'Feb 2026',
    credentialId: '1bc1abcb-be8d-4e8f-a4f6-8fff7e4abe77',
    skills: ['IT Business Strategy'],
    link: 'https://www.life-global.org/certificate/1bc1abcb-be8d-4e8f-a4f6-8fff7e4abe77',
  },
  {
    title: 'Agile Project Management',
    issuer: 'HP',
    date: 'Feb 2026',
    credentialId: '05ecaff2-993b-44c0-ae78-b39334f99120',
    skills: ['Agile Project Management'],
  },
  {
    title: 'Circular Economy',
    issuer: 'HP',
    date: 'Feb 2026',
    credentialId: '6a06137c-e5da-4de2-b31e-778e33ff08cf',
    skills: ['Circular Economy'],
    link: 'https://www.life-global.org/certificate/6a06137c-e5da-4de2-b31e-778e33ff08cf',
  },
  {
    title: 'Profit and Loss',
    issuer: 'HP',
    date: 'Feb 2026',
    credentialId: '02640743-bd0c-4417-b31f-728fa7d2e54c',
    skills: ['P&L Management'],
    link: 'https://www.life-global.org/certificate/02640743-bd0c-4417-b31f-728fa7d2e54c',
  },
  {
    title: 'Cash Flow',
    issuer: 'HP',
    date: 'Feb 2026',
    credentialId: 'aa2e3afe-56aa-43db-9780-269541b1fcbd',
    skills: ['Financial Management'],
    link: 'https://www.life-global.org/certificate/aa2e3afe-56aa-43db-9780-269541b1fcbd',
  },
  // Forage — Deloitte (program 9PBTqmSxAf6zZTseP)
  {
    title: 'Deloitte Australia — Cyber Job Simulation',
    issuer: 'Forage',
    date: 'Mar 2026',
    credentialId: 'pGFJC7LPLcn6k9Jjv',
    skills: ['Data Analysis'],
    link: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_6991911777f6324da6a8228f_1773478392420_completion_certificate.pdf',
  },
  {
    title: 'Deloitte Australia — Technology Job Simulation',
    issuer: 'Forage',
    date: 'Mar 2026',
    credentialId: 'LkSDLA9qKZQChq3cG',
    skills: ['Data Analysis', 'Python'],
    link: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_6991911777f6324da6a8228f_1773476730542_completion_certificate.pdf',
  },
  {
    title: 'Deloitte Australia — Data Analytics Job Simulation',
    issuer: 'Forage',
    date: 'Mar 2026',
    credentialId: 'RBKfxENDvLQ6i9uva',
    skills: ['Data Analysis', 'Python'],
    link: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6991911777f6324da6a8228f_1773472857348_completion_certificate.pdf',
  },
  // Forage — Goldman Sachs (program MBA4MnZTNFEoJZGnk)
  {
    title: 'Goldman Sachs — Risk Job Simulation',
    issuer: 'Forage',
    date: 'Mar 2026',
    credentialId: 'aYysxqq88eansTcBR',
    skills: ['Risk Management', 'Critical Thinking'],
    link: 'https://www.theforage.com/completion-certificates/MBA4MnZTNFEoJZGnk/ETGMhLB5eCrYjcH8o_MBA4MnZTNFEoJZGnk_6991911777f6324da6a8228f_1773152755247_completion_certificate.pdf',
  },
  {
    title: 'Goldman Sachs — Operations Job Simulation',
    issuer: 'Forage',
    date: 'Mar 2026',
    credentialId: 'BN9kFxwbxxHmhXsZ6',
    skills: ['Data Analysis'],
    link: 'https://www.theforage.com/completion-certificates/MBA4MnZTNFEoJZGnk/wNge9cjzNTXD2acrv_MBA4MnZTNFEoJZGnk_6991911777f6324da6a8228f_1772359435575_completion_certificate.pdf',
  },
  {
    title: 'Goldman Sachs — Controllers Job Simulation',
    issuer: 'Forage',
    date: 'Feb 2026',
    credentialId: 'dKosnwiGJ5fLfpN8C',
    skills: ['System Controls', 'Fund Analysis'],
    link: 'https://www.theforage.com/completion-certificates/MBA4MnZTNFEoJZGnk/vjFao7z4tXKe2EwvK_MBA4MnZTNFEoJZGnk_6991911777f6324da6a8228f_1772287282720_completion_certificate.pdf',
  },
  // Forage — Others (unique programs)
  {
    title: 'J.P. Morgan — Quantitative Research Job Simulation',
    issuer: 'Forage',
    date: 'Feb 2026',
    credentialId: 'd4AqDnKh4ns5CktQ3',
    skills: ['Algorithm Development', 'Credit Analysis'],
    link: 'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_6991911777f6324da6a8228f_1772201388465_completion_certificate.pdf',
  },
  {
    title: 'Tata — Data Visualisation Job Simulation',
    issuer: 'Forage',
    date: 'Mar 2026',
    credentialId: 'vpnnhwiWvxXA8W2Fz',
    skills: ['Data Analysis'],
    link: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_6991911777f6324da6a8228f_1772345852306_completion_certificate.pdf',
  },
  // TCS
  {
    title: 'TCS iON Career Edge — Young Professional',
    issuer: 'TCS',
    date: 'Apr 2026',
    credentialId: '272697-30514947-1016',
    skills: ['Communication Skills', 'Business Etiquette', 'Soft Skills'],
  },
];

const ISSUERS = ['ALL', 'Anthropic', 'IBM', 'Microsoft', 'Google', 'HP', 'Forage', 'TCS'];

const ISSUER_COLORS: Record<string, string> = {
  Anthropic: 'text-orange-400 border-orange-400/40',
  IBM:       'text-blue-400 border-blue-400/40',
  Microsoft: 'text-sky-400 border-sky-400/40',
  Google:    'text-yellow-400 border-yellow-400/40',
  HP:        'text-indigo-400 border-indigo-400/40',
  Forage:    'text-primary border-primary/40',
  TCS:       'text-cyan-400 border-cyan-400/40',
};

export function Certifications() {
  const [active, setActive] = useState('ALL');

  const filtered = active === 'ALL' ? CERTIFICATIONS : CERTIFICATIONS.filter(c => c.issuer === active);

  return (
    <section id="certifications" className="py-24 min-h-screen">
      <div className="max-w-5xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl font-display crt-text-glow">06. CREDENTIALS</h2>
            <div className="flex-1 h-[1px] bg-primary/20" />
          </div>
          <p className="text-primary/50 text-xs font-mono mb-10 tracking-widest">
            TOTAL_CERTS: {CERTIFICATIONS.length} &nbsp;|&nbsp; LAST_SYNC: Mar 2026 &nbsp;|&nbsp; CLICK_TO_VERIFY
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {ISSUERS.map(issuer => (
              <button
                key={issuer}
                onClick={() => setActive(issuer)}
                className={`px-3 py-1 text-xs border font-mono tracking-wider transition-all ${
                  active === issuer
                    ? 'bg-primary text-background border-primary'
                    : 'border-primary/30 text-primary/60 hover:border-primary/60 hover:text-primary'
                }`}
              >
                {issuer}
                {issuer !== 'ALL' && (
                  <span className="ml-2 opacity-60">
                    [{CERTIFICATIONS.filter(c => c.issuer === issuer).length}]
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((cert, i) => {
                const cardInner = (
                  <>
                    {/* Issuer badge */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] border px-2 py-0.5 font-mono tracking-widest uppercase ${ISSUER_COLORS[cert.issuer] ?? 'text-primary border-primary/40'}`}>
                        {cert.issuer}
                      </span>
                      <span className="text-primary/40 text-[10px] font-mono">{cert.date}</span>
                    </div>

                    {/* Title */}
                    <p className="text-sm text-primary/90 group-hover:text-primary transition-colors leading-snug font-medium">
                      {cert.title}
                    </p>

                    {/* Skills */}
                    {cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map(s => (
                          <span key={s} className="text-[9px] bg-primary/10 border border-primary/20 text-primary/70 px-1.5 py-0.5 font-mono">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Footer: ID + verify link */}
                    <div className="border-t border-primary/10 pt-2 mt-auto flex items-center justify-between gap-2">
                      <p className="text-[9px] text-primary/30 font-mono break-all flex-1">
                        ID: {cert.credentialId}
                      </p>
                      {cert.link ? (
                        <span className="flex items-center gap-1 text-[10px] text-primary/60 group-hover:text-primary font-mono whitespace-nowrap">
                          VERIFY <FaExternalLinkAlt className="w-2.5 h-2.5" />
                        </span>
                      ) : (
                        <span className="text-[10px] text-primary/30 font-mono whitespace-nowrap">
                          [LOCAL]
                        </span>
                      )}
                    </div>
                  </>
                );

                const cardClass = `border border-primary/25 bg-card transition-all p-4 flex flex-col gap-3 group h-full ${
                  cert.link ? 'hover:border-primary hover:bg-primary/5 cursor-pointer' : 'opacity-90'
                }`;

                return (
                  <motion.div
                    key={cert.credentialId + cert.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                  >
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cardClass}
                      >
                        {cardInner}
                      </a>
                    ) : (
                      <div className={cardClass}>{cardInner}</div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
