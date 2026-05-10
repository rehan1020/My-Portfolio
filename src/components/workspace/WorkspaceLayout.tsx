import React, { useState } from 'react';
import { LeftSidebar } from './LeftSidebar';
import { CenterPane } from './CenterPane';
import { RightSidebar } from './RightSidebar';
import { BottomTerminal } from './BottomTerminal';
import { StatusBar } from './StatusBar';
import { DEFAULT_FILE } from './fileTree';

export function WorkspaceLayout() {
  const [selectedFile, setSelectedFile] = useState(DEFAULT_FILE);

  return (
    <div
      className="flex flex-col bg-background"
      style={{ height: '100dvh', overflow: 'hidden' }}
    >
      {/* Overlays */}
      <div className="scanlines pointer-events-none" />
      <div className="crt-vignette pointer-events-none" />
      <div className="crt-flicker pointer-events-none" />

      {/* Header / Title bar */}
      <div className="shrink-0 flex items-center justify-between border-b border-primary/40 bg-primary/5 px-4 py-1.5 z-20">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-primary/70" />
          </div>
          <span className="text-primary font-display text-xl crt-text-glow ml-2">RS_OS</span>
          <span className="text-primary/30 text-xs font-mono">— Tiled Workspace v1.0</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono text-primary/50">
          <span>guest@rs_os</span>
          <span className="text-primary/20">|</span>
          <span className="text-primary/70">MCP-India-Stack v0.3.0</span>
          <span className="text-primary/20">|</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            ACTIVE
          </span>
        </div>
      </div>

      {/* Main tiled area */}
      <div className="flex flex-1 overflow-hidden z-10">
        {/* Left sidebar — Navigator */}
        <div className="shrink-0 overflow-hidden" style={{ width: '22%', minWidth: '160px', maxWidth: '260px' }}>
          <LeftSidebar selectedFile={selectedFile} onSelectFile={setSelectedFile} />
        </div>

        {/* Center pane — Main Buffer */}
        <div className="flex-1 overflow-hidden border-x border-primary/30">
          <CenterPane selectedFile={selectedFile} />
        </div>

        {/* Right sidebar — Telemetry */}
        <div className="shrink-0 overflow-hidden" style={{ width: '22%', minWidth: '160px', maxWidth: '260px' }}>
          <RightSidebar />
        </div>
      </div>

      {/* Bottom terminal — fixed 150px */}
      <div className="shrink-0 z-10">
        <BottomTerminal />
      </div>

      {/* Status bar */}
      <StatusBar selectedFile={selectedFile} />
    </div>
  );
}
