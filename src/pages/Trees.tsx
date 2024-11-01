import React from 'react';
import { TreePine, Wind, Cloud } from 'lucide-react';
import AnimatedLeaf from '../components/AnimatedLeaf';

const wildTrees = [
  {
    name: 'Giant Sequoia',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
    description: 'The largest trees on Earth by volume, reaching heights over 300 feet.',
    characteristics: ['Height: 164-279 ft', 'Lifespan: 3,000+ years', 'Native to: California'],
  },
  {
    name: 'Red Oak',
    image: 'https://images.unsplash.com/photo-1542953133-6a2ad5c01ca3?auto=format&fit=crop&q=80&w=1200',
    description: 'Known for their strong wood and distinctive leaf shape.',
    characteristics: ['Height: 60-75 ft', 'Lifespan: 500+ years', 'Native to: North America'],
  },
  {
    name: 'Japanese Maple',
    image: 'https://images.unsplash.com/photo-1564860924912-f27764fd2ab6?auto=format&fit=crop&q=80&w=1200',
    description: 'Celebrated for their colorful foliage and elegant form.',
    characteristics: ['Height: 20-30 ft', 'Lifespan: 100+ years', 'Native to: Japan, Korea'],
  },
];

const environmentalBenefits = [
  {
    icon: <Wind className="h-8 w-8" />,
    title: 'Air Purification',
    description: 'Trees filter air pollutants and provide clean oxygen.',
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Climate Control',
    description: 'Help regulate local temperature and reduce urban heat.',
  },
  {
    icon: <TreePine className="h-8 w-8" />,
    title: 'Biodiversity',
    description: 'Provide habitat for countless species of wildlife.',
  },
];

export function Trees() {
  return (
    <div className="relative min-h-screen">
      <AnimatedLeaf />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Wild Trees of the World
          </h1>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Discover the majestic wild trees that form our forests and shape our ecosystems.
          </p>
        </div>
      </section>

      {/* Wild Trees Section */}
      <section className="py-16 px-4 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">
            Notable Wild Trees
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {wildTrees.map((tree, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={tree.image}
                    alt={tree.name}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {tree.name}
                  </h3>
                  <p className="text-green-600 mb-4">
                    {tree.description}
                  </p>
                  <ul className="space-y-2">
                    {tree.characteristics.map((char, charIndex) => (
                      <li key={charIndex} className="text-green-700 text-sm">
                        • {char}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">
            Environmental Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {environmentalBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="text-green-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-green-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}