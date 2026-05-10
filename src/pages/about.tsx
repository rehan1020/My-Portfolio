import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { About } from '@/components/sections/About';

export default function AboutPage() {
  return (
    <PageShell currentPath="/about">
      <About />
    </PageShell>
  );
}
