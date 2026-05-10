import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { cn } from '@/lib/utils';

const PAGES = [
  { path: '/', label: 'HOME' },
  { path: '/about', label: 'ABOUT' },
  { path: '/skills', label: 'SKILLS' },
  { path: '/experience', label: 'WORK' },
  { path: '/projects', label: 'BUILDS' },
  { path: '/education', label: 'EDU' },
  { path: '/certifications', label: 'CERTS' },
  { path: '/contact', label: 'CONTACT' },
];

interface PageShellProps {
  children: React.ReactNode;
  currentPath: string;
}

export function PageShell({ children, currentPath }: PageShellProps) {
  const currentIndex = PAGES.findIndex(p => p.path === currentPath);
  const prev = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const next = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;

  return (
    <div className="relative min-h-screen">
      <div className="scanlines" />
      <div className="crt-vignette" />
      <div className="crt-flicker" />
      <Navbar />

      <motion.main
        key={currentPath}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative z-10 min-h-screen flex flex-col"
      >
        <div className="flex-1">
          {children}
        </div>

        {/* Page footer nav */}
        <div className="border-t border-primary/20 mt-12 px-6 py-6 flex items-center justify-between font-mono text-sm max-w-4xl mx-auto w-full">
          <div className="flex-1">
            {prev && (
              <Link href={prev.path}>
                <span className="text-primary/50 hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                  <span className="text-primary">{"<"}</span>
                  {prev.label}
                </span>
              </Link>
            )}
          </div>

          <div className="text-primary/30 text-xs tracking-widest">
            RS_OS v1.0 © {new Date().getFullYear()}
          </div>

          <div className="flex-1 flex justify-end">
            {next && (
              <Link href={next.path}>
                <span className="text-primary/50 hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                  {next.label}
                  <span className="text-primary">{">"}</span>
                </span>
              </Link>
            )}
          </div>
        </div>
      </motion.main>
    </div>
  );
}
