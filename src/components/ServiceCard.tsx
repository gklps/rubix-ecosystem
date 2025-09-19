'use client';

import { Service } from '../types';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const handleClick = () => {
    if (service.isExternal) {
      window.open(service.url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = service.url;
    }
  };

  return (
    <div
      className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:shadow-rubix-primary/15 hover:border-rubix-primary/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-slide-up backdrop-blur-sm"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={handleClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-rubix-primary group-hover:text-rubix-green-700 transition-colors duration-200 mb-3">
            {service.name}
          </h3>
          <p className="text-sm text-rubix-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <ArrowUpRightIcon className="w-6 h-6 text-rubix-gray-400 group-hover:text-rubix-secondary group-hover:transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
      
      {/* Service indicator */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-rubix-secondary rounded-full"></div>
          <span className="text-xs text-rubix-gray-500 font-medium">Click to explore</span>
        </div>
        <div className="text-xs text-rubix-primary font-semibold">
          rubix.net
        </div>
      </div>
      
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-rubix-secondary/0 to-rubix-primary/0 group-hover:from-rubix-secondary/8 group-hover:to-rubix-primary/8 rounded-2xl transition-all duration-300 pointer-events-none" />
      
      {/* Yellow accent bar on hover */}
      <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-rubix-secondary via-rubix-yellow-400 to-rubix-secondary group-hover:w-full transition-all duration-500 rounded-b-2xl" />
    </div>
  );
}
