import React from 'react';
import { PageShell } from '@/components/layout/PageShell';
import { Certifications } from '@/components/sections/Certifications';

export default function CertificationsPage() {
  return (
    <PageShell currentPath="/certifications">
      <Certifications />
    </PageShell>
  );
}
