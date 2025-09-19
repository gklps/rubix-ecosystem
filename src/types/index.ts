export interface Service {
  id: string;
  name: string;
  description: string;
  url: string;
  category: 'Rubix Toolbox' | 'Services' | 'AI' | 'DeFi';
  isExternal?: boolean;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}
