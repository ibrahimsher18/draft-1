
import React from 'react';

const AnimatedBackground: React.FC = () => {
  const particles = Array.from({ length: 50 });

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-gradient-to-br from-[#020c1b] via-[#0a192f] to-[#020c1b]">
      <style>
        {`
          @keyframes move {
            0% { transform: translateY(0) translateX(0) scale(1); opacity: 1; }
            100% { transform: translateY(-100vh) translateX(var(--x-end)) scale(0.5); opacity: 0; }
          }
          .particle {
            position: absolute;
            bottom: -10px;
            border-radius: 50%;
            background: #64ffda;
            animation: move linear infinite;
          }
        `}
      </style>
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * -20;
        const left = Math.random() * 100;
        const xEnd = (Math.random() - 0.5) * 200;

        return (
          <div
            key={i}
            className="particle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              boxShadow: `0 0 ${size * 2}px #64ffda`,
              // @ts-ignore
              '--x-end': `${xEnd}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBackground;
