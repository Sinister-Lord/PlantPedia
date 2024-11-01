import React from 'react';

interface PlantCardProps {
  name: string;
  scientificName: string;
  description: string;
  imageUrl: string;
}

export default function PlantCard({ name, scientificName, description, imageUrl }: PlantCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-800">{name}</h3>
        <p className="text-sm italic text-green-600 mb-2">{scientificName}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}