# Rubix Blockchain Ecosystem

A clean, elegant, and minimal Next.js website showcasing all services and tools available under the Rubix Blockchain ecosystem. Built with the official Rubix brand colors (#033500 and #fee214) and inspired by the visual style of [rubix.net](https://rubix.net).

![Rubix Ecosystem](./public/screenshot.png)

## Features

- **Modern Design**: Clean, elegant, and minimal UI with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **External Links**: Click any service to navigate to its dedicated website
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Services Categories

### Rubix Toolbox
- **Simulator**: Advanced blockchain simulation environment
- **IDE**: Integrated Development Environment for Rubix applications
- **Explorer**: Blockchain explorer for viewing transactions
- **Faucets**: Test token distribution system
- **Sample Contracts**: Pre-built smart contract templates
- **Capex - Opex Calculator**: Financial planning tool

### Services
- **Full Node**: Complete blockchain node implementation
- **Xcell**: High-performance transaction processing engine
- **Validator Tool**: Validator management and monitoring platform
- **Learn**: Educational resources and documentation

### AI
- **Agent OS**: Operating system for autonomous blockchain agents
- **Trie Network**: Decentralized AI network

### DeFi
- **Stablecoin Launcher**: Platform for creating custom stablecoins
- **Lending & Borrowing**: Decentralized finance platform
- **Yield & Asset Management**: Advanced yield farming protocols

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd rubix-ecosystem
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Header.tsx      # Page header
│   ├── ServiceCard.tsx # Individual service card
│   ├── ServiceCategory.tsx # Service category section
│   └── Footer.tsx      # Page footer
├── data/               # Static data
│   └── services.ts     # Services and categories data
└── types/              # TypeScript type definitions
    └── index.ts        # Type definitions
\`\`\`

## Customization

### Adding New Services

Edit \`src/data/services.ts\` to add or modify services:

\`\`\`typescript
{
  id: 'new-service',
  name: 'New Service',
  description: 'Description of the new service',
  url: 'https://newservice.rubixchain.com',
  category: 'Services',
  isExternal: true,
}
\`\`\`

### Styling

The project uses Tailwind CSS. Modify styles in:
- \`tailwind.config.js\` for theme customization
- \`src/app/globals.css\` for global styles
- Component files for component-specific styles

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Heroicons**: Beautiful SVG icons
- **Geist Font**: Modern font family

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## Support

For support, please visit the [Rubix Blockchain Documentation](https://docs.rubixchain.com) or join our [Discord Community](https://discord.gg/rubixchain).