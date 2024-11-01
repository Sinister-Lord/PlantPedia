import React from 'react';
import { Droplet, Sun, Thermometer, Wind } from 'lucide-react';

interface CareGuideProps {
  water: string;
  light: string;
  temperature: string;
  humidity: string;
}

export default function CareGuide({ water, light, temperature, humidity }: CareGuideProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex items-center space-x-2 text-green-700">
        <Droplet className="h-5 w-5" />
        <span>{water}</span>
      </div>
      <div className="flex items-center space-x-2 text-green-700">
        <Sun className="h-5 w-5" />
        <span>{light}</span>
      </div>
      <div className="flex items-center space-x-2 text-green-700">
        <Thermometer className="h-5 w-5" />
        <span>{temperature}</span>
      </div>
      <div className="flex items-center space-x-2 text-green-700">
        <Wind className="h-5 w-5" />
        <span>{humidity}</span>
      </div>
    </div>
  );
}