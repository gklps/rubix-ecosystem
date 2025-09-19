export default function Header() {
  return (
    <header className="text-center mb-16 animate-fade-in">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-rubix-primary to-rubix-green-700 bg-clip-text text-transparent">
        Rubix Blockchain Ecosystem
      </h1>
      <p className="text-xl text-rubix-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
        Explore the comprehensive suite of tools, services, and platforms that power the Rubix blockchain ecosystem.
        From development tools to DeFi applications, discover everything you need to build on Rubix.
      </p>
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rubix-secondary/10 to-rubix-secondary/5 rounded-full border border-rubix-secondary/20">
        <div className="w-2 h-2 bg-rubix-secondary rounded-full animate-pulse"></div>
        <p className="text-sm text-rubix-primary font-medium">
          Micro Chains - New rails driving AI and Finance convergence
        </p>
      </div>
    </header>
  );
}
