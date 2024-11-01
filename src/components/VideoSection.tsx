import React from 'react';

interface VideoSectionProps {
  title: string;
  videoId: string;
  description: string;
}

export default function VideoSection({ title, videoId, description }: VideoSectionProps) {
  return (
    <div className="bg-white/80 rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-green-800 mb-4">{title}</h2>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}