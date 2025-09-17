
import React from 'react';
import { SOLUTION_MODULES } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

const SolutionSection: React.FC = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="solution" className="py-20 px-4 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 text-white">
        Our <span className="text-cyan-300">Solution</span>
      </h2>
      <p className="text-slate-300 text-center max-w-3xl mx-auto mb-16">
        A unified, AI-enabled digital platform to ingest, standardize, and analyze diverse marine datasets for groundbreaking insights.
      </p>

      <div ref={ref} className="relative flex justify-center items-center min-h-[500px]">
        {/* Central AI Core */}
        <div className={`
          absolute w-48 h-48 bg-cyan-400/20 rounded-full flex items-center justify-center text-center p-4
          border-2 border-cyan-400 box-glow transition-all duration-1000 ease-out
          ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}
        `}>
          <span className="font-bold text-xl text-white">Unified AI-Enabled Digital Platform</span>
        </div>
        
        {/* Solution Modules */}
        {SOLUTION_MODULES.map((module, index) => {
          const angle = (index / SOLUTION_MODULES.length) * 2 * Math.PI;
          const radius = 250;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div key={module.title}
              className={`
                absolute text-center bg-slate-800/80 p-3 rounded-lg border border-slate-700 w-40
                transition-all duration-700 ease-out group hover:border-cyan-400 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/30
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                transitionDelay: `${200 + index * 100}ms`
              }}
            >
              <h3 className="text-white text-sm font-semibold group-hover:text-cyan-300 transition-colors">{module.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SolutionSection;
