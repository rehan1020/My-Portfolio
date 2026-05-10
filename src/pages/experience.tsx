import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Experience } from '@/components/sections/Experience';

export default function ExperiencePage() {
  return (
    <PageShell currentPath="/experience">
      <Experience />
    </PageShell>
  );
}
