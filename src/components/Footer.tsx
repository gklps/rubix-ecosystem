export default function Footer() {
  return (
    <footer className="mt-24 pt-12 border-t border-gray-200 text-center">
      <div className="mb-8">
        <div className="flex justify-center space-x-8 text-sm">
          <a 
            href="https://rubix.net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rubix-gray-600 hover:text-rubix-primary transition-colors duration-200"
          >
            Official Website
          </a>
          <a 
            href="https://learn.rubix.net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rubix-gray-600 hover:text-rubix-primary transition-colors duration-200"
          >
            Documentation
          </a>
          <a 
            href="https://github.com/rubixchain" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rubix-gray-600 hover:text-rubix-primary transition-colors duration-200"
          >
            GitHub
          </a>
          <a 
            href="https://discord.gg/rubixchain" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rubix-gray-600 hover:text-rubix-primary transition-colors duration-200"
          >
            Community
          </a>
        </div>
      </div>
      
      <div className="text-rubix-gray-500 text-sm">
        <p>&copy; 2025 Rubix Networks. All rights reserved.</p>
        <p className="mt-2 text-rubix-gray-600">
          Built with <span className="text-rubix-secondary">❤️</span> for the decentralized future
        </p>
      </div>
    </footer>
  );
}
