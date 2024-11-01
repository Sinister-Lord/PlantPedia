import React from 'react';
import { Leaf, Droplets, Sun } from 'lucide-react';
import AnimatedLeaf from '../components/AnimatedLeaf';

const plantSpecies = [
  {
    title: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=1200',
    description: 'Discover perfect houseplants for any room.',
  },
  {
    title: 'Succulents',
    image: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&q=80&w=1200',
    description: 'Low-maintenance plants perfect for beginners.',
  },
  {
    title: 'Flowering Plants',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=1200',
    description: 'Add color to your garden with beautiful blooms.',
  },
];

const careGuide = [
  {
    icon: <Sun className="h-8 w-8" />,
    title: 'Light Requirements',
    description: 'Most plants need 6-8 hours of sunlight daily. Position according to species needs.',
  },
  {
    icon: <Droplets className="h-8 w-8" />,
    title: 'Watering Schedule',
    description: 'Water deeply when top soil is dry. Avoid overwatering.',
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: 'Maintenance',
    description: 'Regular pruning and cleaning keeps plants healthy and beautiful.',
  },
];

export function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedLeaf />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Discover the World of Plants
          </h1>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Explore our comprehensive guide to plants, from indoor varieties to exotic species.
            Learn how to care for your green companions.
          </p>
        </div>
      </section>

      {/* Plant Species Section */}
      <section className="py-16 px-4 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">
            Popular Plant Species
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plantSpecies.map((species, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={species.image}
                    alt={species.title}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {species.title}
                  </h3>
                  <p className="text-green-600">
                    {species.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Guide Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">
            Plant Care Guide
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {careGuide.map((guide, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="text-green-600 mb-4">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {guide.title}
                </h3>
                <p className="text-green-600">
                  {guide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}