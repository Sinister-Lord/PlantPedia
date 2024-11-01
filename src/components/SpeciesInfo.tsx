import React from 'react';

interface SpeciesInfoProps {
  characteristics: string[];
  varieties: string[];
}

export default function SpeciesInfo({ characteristics, varieties }: SpeciesInfoProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold text-green-800 mb-3">Key Characteristics</h3>
        <ul className="space-y-2">
          {characteristics.map((char, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-green-600 mt-1">•</span>
              <span className="text-gray-700">{char}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-green-800 mb-3">Popular Varieties</h3>
        <ul className="space-y-2">
          {varieties.map((variety, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-green-600 mt-1">•</span>
              <span className="text-gray-700">{variety}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}