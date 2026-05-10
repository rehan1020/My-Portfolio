export type FileNode = {
  id: string;
  name: string;
  type: 'file' | 'folder';
  icon?: string;
  children?: FileNode[];
};

export const FILE_TREE: FileNode[] = [
  {
    id: 'readme',
    name: 'README.md',
    type: 'file',
    icon: '★',
  },
  {
    id: 'about',
    name: '/about',
    type: 'folder',
    children: [
      { id: 'profile', name: 'profile.md', type: 'file' },
      { id: 'work-history', name: 'work-history.log', type: 'file' },
    ],
  },
  {
    id: 'skills',
    name: '/skills',
    type: 'folder',
    children: [
      { id: 'capabilities', name: 'capabilities.sh', type: 'file' },
      { id: 'stack', name: 'stack.json', type: 'file' },
    ],
  },
  {
    id: 'builds',
    name: '/builds',
    type: 'folder',
    children: [
      { id: 'mcp-india-stack', name: 'mcp-india-stack.md', type: 'file', icon: '★' },
      { id: 'obi-terminal', name: 'obi-terminal.md', type: 'file' },
      { id: 'max-assistant', name: 'max-assistant.md', type: 'file' },
      { id: 'crypmax', name: 'crypmax.md', type: 'file' },
      { id: 'tgbot', name: 'tgbot.md', type: 'file' },
      { id: 'policy-sim', name: 'policy-sim.md', type: 'file' },
    ],
  },
  {
    id: 'credentials',
    name: '/credentials',
    type: 'folder',
    children: [
      { id: 'cred-anthropic', name: 'anthropic.txt', type: 'file' },
      { id: 'cred-ibm', name: 'ibm.txt', type: 'file' },
      { id: 'cred-microsoft', name: 'microsoft.txt', type: 'file' },
      { id: 'cred-google', name: 'google.txt', type: 'file' },
      { id: 'cred-hp', name: 'hp.txt', type: 'file' },
      { id: 'cred-forage', name: 'forage.txt', type: 'file' },
      { id: 'cred-tcs', name: 'tcs.txt', type: 'file' },
    ],
  },
  {
    id: 'contact',
    name: '/contact',
    type: 'folder',
    children: [
      { id: 'ping', name: 'ping.sh', type: 'file' },
    ],
  },
];

export const DEFAULT_FILE = 'readme';
