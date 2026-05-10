import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Skills } from '@/components/sections/Skills';

export default function SkillsPage() {
  return (
    <PageShell currentPath="/skills">
      <Skills />
    </PageShell>
  );
}
