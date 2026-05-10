import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Projects } from '@/components/sections/Projects';

export default function ProjectsPage() {
  return (
    <PageShell currentPath="/projects">
      <Projects />
    </PageShell>
  );
}
