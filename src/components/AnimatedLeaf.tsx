import React from 'react';

const AnimatedLeaf: React.FC = () => {
  return (
    <div className="absolute w-full h-full overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${10 + i * 2}s linear infinite`,
            animationDelay: `${i * 2}s`
          }}
        >
          <div className="text-green-500/20 transform rotate-45">🍃</div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedLeaf;