import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FILE_TREE, FileNode } from './fileTree';

interface LeftSidebarProps {
  selectedFile: string;
  onSelectFile: (id: string) => void;
}

const INITIALLY_OPEN = new Set(['about', 'builds', 'skills', 'credentials', 'contact']);

function FileItem({
  node,
  depth,
  selectedFile,
  onSelectFile,
  openFolders,
  toggleFolder,
}: {
  node: FileNode;
  depth: number;
  selectedFile: string;
  onSelectFile: (id: string) => void;
  openFolders: Set<string>;
  toggleFolder: (id: string) => void;
}) {
  const isSelected = selectedFile === node.id;
  const isOpen = openFolders.has(node.id);
  const indent = depth * 12;

  if (node.type === 'folder') {
    return (
      <div>
        <button
          onClick={() => toggleFolder(node.id)}
          className="w-full flex items-center gap-1 py-0.5 text-[11px] font-mono text-primary/50 hover:text-primary/80 transition-colors text-left"
          style={{ paddingLeft: `${indent + 8}px` }}
        >
          <span className="shrink-0 w-3 text-center">{isOpen ? '▾' : '▸'}</span>
          <span>{node.name}</span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && node.children && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="overflow-hidden"
            >
              {node.children.map(child => (
                <FileItem
                  key={child.id}
                  node={child}
                  depth={depth + 1}
                  selectedFile={selectedFile}
                  onSelectFile={onSelectFile}
                  openFolders={openFolders}
                  toggleFolder={toggleFolder}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <button
      onClick={() => onSelectFile(node.id)}
      className={`w-full flex items-center gap-1.5 py-0.5 text-[11px] font-mono transition-all text-left group ${
        isSelected
          ? 'bg-primary text-primary-foreground'
          : 'text-primary/70 hover:text-primary hover:bg-primary/10'
      }`}
      style={{ paddingLeft: `${indent + 20}px`, paddingRight: '8px' }}
    >
      {node.icon && (
        <span className={`shrink-0 text-[10px] ${isSelected ? 'text-primary-foreground' : 'text-primary'}`}>
          {node.icon}
        </span>
      )}
      <span className="truncate">{node.name}</span>
    </button>
  );
}

export function LeftSidebar({ selectedFile, onSelectFile }: LeftSidebarProps) {
  const [openFolders, setOpenFolders] = useState<Set<string>>(INITIALLY_OPEN);

  const toggleFolder = (id: string) => {
    setOpenFolders(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="flex flex-col h-full border-r border-primary/30 overflow-hidden">
      {/* Header */}
      <div className="shrink-0 border-b border-primary/30 bg-primary/5 px-3 py-1.5">
        <span className="text-primary/60 text-[10px] font-mono tracking-widest font-bold">
          [ 01_NAVIGATOR ]
        </span>
      </div>

      {/* Workspace label */}
      <div className="shrink-0 px-2 py-2 border-b border-primary/10">
        <div className="text-[10px] font-mono text-primary/40 px-2 mb-1">WORKSPACE</div>
        <div className="text-[11px] font-mono text-primary/70 px-2 flex items-center gap-1.5">
          <span className="w-2 h-2 bg-primary rounded-sm shrink-0" />
          rehan-shashi/
        </div>
      </div>

      {/* File tree */}
      <div className="flex-1 overflow-y-auto py-1">
        {FILE_TREE.map(node => (
          <FileItem
            key={node.id}
            node={node}
            depth={0}
            selectedFile={selectedFile}
            onSelectFile={onSelectFile}
            openFolders={openFolders}
            toggleFolder={toggleFolder}
          />
        ))}
      </div>

      {/* Footer stats */}
      <div className="shrink-0 border-t border-primary/20 px-3 py-2 space-y-1">
        {[
          { label: 'REPOS', value: '8' },
          { label: 'CERTS', value: '22+' },
          { label: 'STATUS', value: 'ACTIVE' },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between text-[10px] font-mono">
            <span className="text-primary/40">{label}</span>
            <span className="text-primary/70">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
