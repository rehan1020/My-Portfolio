import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';

const PAGES = [
  { path: '/', label: '00_INIT', short: 'HOME' },
  { path: '/about', label: '01_ABOUT', short: 'ABOUT' },
  { path: '/skills', label: '02_SKILLS', short: 'SKILLS' },
  { path: '/experience', label: '03_WORK', short: 'WORK' },
  { path: '/projects', label: '04_BUILDS', short: 'BUILDS' },
  { path: '/education', label: '05_DATA', short: 'EDU' },
  { path: '/certifications', label: '06_CERTS', short: 'CERTS' },
  { path: '/contact', label: '07_PING', short: 'CONTACT' },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Desktop Side Nav */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {PAGES.map((page) => {
          const isActive = location === page.path;
          return (
            <Link key={page.path} href={page.path}>
              <button className="group flex items-center justify-end gap-4 text-sm font-mono">
                <span className={cn(
                  "tracking-widest uppercase transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0",
                  isActive ? "text-primary opacity-100 translate-x-0 font-bold" : "text-primary/50"
                )}>
                  {page.label}
                </span>
                <div className={cn(
                  "w-2 h-2 border border-primary transition-all duration-300",
                  isActive ? "bg-primary crt-box-glow scale-150" : "bg-transparent group-hover:bg-primary/50"
                )} />
              </button>
            </Link>
          );
        })}
      </nav>

      {/* Mobile Top Nav */}
      <header className={cn(
        "fixed top-0 left-0 w-full z-50 lg:hidden transition-all duration-300 border-b",
        scrolled ? "bg-background/95 backdrop-blur border-primary/20" : "bg-transparent border-transparent"
      )}>
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/">
            <span className="font-display text-2xl text-primary crt-text-glow cursor-pointer">RS_OS</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary border border-primary px-3 py-1 text-sm crt-box-glow focus:outline-none"
          >
            {isOpen ? "[X]" : "[MENU]"}
          </button>
        </div>

        <div className={cn(
          "absolute top-full left-0 w-full bg-background border-b border-primary/20 overflow-hidden transition-all duration-300 origin-top",
          isOpen ? "max-h-96 border-b" : "max-h-0 border-transparent"
        )}>
          <div className="p-6 flex flex-col gap-4">
            {PAGES.map((page) => {
              const isActive = location === page.path;
              return (
                <Link key={page.path} href={page.path}>
                  <span className={cn(
                    "block text-left text-lg font-mono tracking-wider cursor-pointer",
                    isActive ? "text-primary crt-text-glow" : "text-primary/50 hover:text-primary/80"
                  )}>
                    {isActive && "> "}{page.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
}
