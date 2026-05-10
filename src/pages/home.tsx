import React, { useState } from 'react';
import { WorkspaceLayout } from '@/components/workspace/WorkspaceLayout';
import { BootSequence } from '@/components/sections/BootSequence';

export default function Home() {
  const [booted, setBooted] = useState(() => {
    try { return sessionStorage.getItem('rs_booted') === '1'; } catch { return true; }
  });

  const handleBootComplete = () => {
    try { sessionStorage.setItem('rs_booted', '1'); } catch {}
    setBooted(true);
  };

  return (
    <>
      {!booted && <BootSequence onComplete={handleBootComplete} />}
      {booted && <WorkspaceLayout />}
    </>
  );
}
