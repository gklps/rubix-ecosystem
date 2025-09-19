import { ServiceCategory as ServiceCategoryType } from '../types';
import ServiceCard from './ServiceCard';

interface ServiceCategoryProps {
  category: ServiceCategoryType;
  categoryIndex: number;
}

export default function ServiceCategory({ category, categoryIndex }: ServiceCategoryProps) {
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-rubix-primary mb-4 animate-fade-in">
          {category.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-rubix-secondary to-rubix-primary mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={categoryIndex * 6 + index}
          />
        ))}
      </div>
    </section>
  );
}
