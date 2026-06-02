import React from 'react';
import { Link, useRoute } from 'wouter';
import { ArrowLeft, Home, Briefcase, Code2, FolderGit2, Mail, Award, User, GraduationCap } from 'lucide-react';

export function Navigation() {
  const [isHome] = useRoute('/');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {!isHome ? (
          <Link href="/">
            <div className="glass pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer text-foreground">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden md:inline">Back to Hub</span>
            </div>
          </Link>
        ) : (
          <div className="w-10"></div> // Spacer to keep center alignment
        )}
        
        <div className="glass pointer-events-auto hidden md:flex items-center gap-1 p-1 rounded-full text-sm font-medium overflow-x-auto no-scrollbar">
          <NavLink href="/about" icon={<User className="w-4 h-4" />} label="About" />
          <NavLink href="/projects" icon={<FolderGit2 className="w-4 h-4" />} label="Projects" />
          <NavLink href="/experience" icon={<Briefcase className="w-4 h-4" />} label="Experience" />
          <NavLink href="/education" icon={<GraduationCap className="w-4 h-4" />} label="Education" />
          <NavLink href="/skills" icon={<Code2 className="w-4 h-4" />} label="Skills" />
          <NavLink href="/certifications" icon={<Award className="w-4 h-4" />} label="Certs" />
          <NavLink href="/contact" icon={<Mail className="w-4 h-4" />} label="Contact" />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  const [isActive] = useRoute(href);
  return (
    <Link href={href}>
      <div className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full cursor-pointer transition-colors ${isActive ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'}`}>
        {icon}
        <span className="hidden md:inline">{label}</span>
      </div>
    </Link>
  );
}
