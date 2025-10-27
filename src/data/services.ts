import { Service, ServiceCategory } from '../types';

export const services: Service[] = [
  // Rubix Toolbox
  {
    id: 'simulator',
    name: 'Simulator',
    description: 'Advanced blockchain simulation environment for testing and development',
    url: 'https://simulator.rubix.net/',
    category: 'Rubix Toolbox',
    isExternal: true,
  },
  {
    id: 'ide',
    name: 'IDE',
    description: 'Integrated Development Environment for Rubix blockchain applications',
    url: 'https://ide.rubix.net/',
    category: 'Rubix Toolbox',
    isExternal: true,
  },
  {
    id: 'explorer',
    name: 'Explorer',
    description: 'Blockchain explorer for viewing transactions and network activity',
    url: 'https://rubixexplorer.com/',
    category: 'Rubix Toolbox',
    isExternal: true,
  },
  {
    id: 'faucets',
    name: 'Faucets',
    description: 'Test token distribution system for development purposes',
    url: 'http://103.209.145.177:4000/',
    category: 'Rubix Toolbox',
    isExternal: true,
  },
  {
    id: 'sample-contracts',
    name: 'Sample Contracts',
    description: 'Pre-built smart contract templates and examples',
    url: 'https://github.com/rubixchain/rubix-dapps',
    category: 'Rubix Toolbox',
    isExternal: true,
  },
  {
    id: 'capex-opex-calculator',
    name: 'Capex - Opex Calculator',
    description: 'Financial planning tool for blockchain infrastructure costs',
    url: 'https://calculator.rubix.net/',
    category: 'Rubix Toolbox',
    isExternal: true,
  },

  // Services
  {
    id: 'full-node',
    name: 'Full Node',
    description: 'Complete blockchain node implementation for network participation',
    url: 'https://rubix.net/node',
    category: 'Services',
    isExternal: true,
  },
  {
    id: 'xell',
    name: 'Xell',
    description: 'High-performance transaction processing engine',
    url: 'https://xellwallet.com/',
    category: 'Services',
    isExternal: true,
  },
  {
    id: 'validator-tool',
    name: 'Validator Tool',
    description: 'Comprehensive validator management and monitoring platform',
    url: 'https://validators.universe.rubix.net/',
    category: 'Services',
    isExternal: true,
  },
  {
    id: 'learn',
    name: 'Learn',
    description: 'Educational resources and documentation for blockchain development',
    url: 'https://learn.rubix.net/',
    category: 'Services',
    isExternal: true,
  },

  // AI
  {
    id: 'agent-os',
    name: 'Agent OS',
    description: 'Operating system for autonomous blockchain agents',
    url: 'https://ai-agent.universe.rubix.net/',
    category: 'AI',
    isExternal: true,
  },
  {
    id: 'trie-network',
    name: 'Trie Network',
    description: 'Decentralized AI network built on advanced data structures',
    url: 'https://testnet.trie.network/dashboard/all/',
    category: 'AI',
    isExternal: true,
  },

  // DeFi
  {
    id: 'stablecoin-launcher',
    name: 'Stablecoin Launcher',
    description: 'Platform for creating and managing custom stablecoins',
    url: 'https://rubix.net/stablecoin',
    category: 'DeFi',
    isExternal: true,
  },
  {
    id: 'lending-borrowing',
    name: 'Lending & Borrowing',
    description: 'Decentralized finance platform for lending and borrowing assets',
    url: 'https://rubix.net/lending',
    category: 'DeFi',
    isExternal: true,
  },
  {
    id: 'yield-asset-management',
    name: 'Yield & Asset Management',
    description: 'Advanced yield farming and asset management protocols',
    url: 'https://rubix.net/yield',
    category: 'DeFi',
    isExternal: true,
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Rubix Toolbox',
    services: services.filter(service => service.category === 'Rubix Toolbox'),
  },
  {
    title: 'Services',
    services: services.filter(service => service.category === 'Services'),
  },
  {
    title: 'AI',
    services: services.filter(service => service.category === 'AI'),
  },
  {
    title: 'DeFi',
    services: services.filter(service => service.category === 'DeFi'),
  },
];
