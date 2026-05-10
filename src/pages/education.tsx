import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Education } from '@/components/sections/Education';

export default function EducationPage() {
  return (
    <PageShell currentPath="/education">
      <Education />
    </PageShell>
  );
}
