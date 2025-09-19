import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative mb-20 text-center animate-fade-in">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rubix-secondary/5 via-transparent to-rubix-primary/5 rounded-3xl"></div>
      
      {/* Hero content */}
      <div className="relative z-10 py-16 px-8">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-64 h-20 md:w-80 md:h-24 transition-transform duration-300 hover:scale-105">
            <Image
              src="/rubix-logo.png"
              alt="Rubix Blockchain Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rubix-primary via-rubix-green-700 to-rubix-primary bg-clip-text">
          Welcome to the ecosystem
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-rubix-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
          Explore the comprehensive suite of tools, services, and platforms that power the Rubix blockchain ecosystem.
          From development tools to DeFi applications, discover everything you need to build on Rubix.
        </p>
        
        {/* Feature highlight */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rubix-secondary/10 to-rubix-secondary/5 rounded-full border border-rubix-secondary/20 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-rubix-secondary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-rubix-primary rounded-full animate-pulse delay-100"></div>
            <div className="w-1.5 h-1.5 bg-rubix-secondary rounded-full animate-pulse delay-200"></div>
          </div>
          <p className="text-rubix-primary font-semibold text-lg">
            Micro Chains - New rails driving AI and Finance convergence
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-rubix-secondary/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tl from-rubix-primary/20 to-transparent rounded-full blur-xl"></div>
      </div>
    </section>
  );
}
