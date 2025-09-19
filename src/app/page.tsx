import Hero from '../components/Hero';
import ServiceCategory from '../components/ServiceCategory';
import Footer from '../components/Footer';
import { serviceCategories } from '../data/services';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-rubix-gray-50">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <Hero />
        
        <main>
          {serviceCategories.map((category, index) => (
            <ServiceCategory
              key={category.title}
              category={category}
              categoryIndex={index}
            />
          ))}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
