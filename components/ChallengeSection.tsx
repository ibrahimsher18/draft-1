
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { CHALLENGE_DATASETS } from '../constants';

const ChallengeSection: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <section id="challenge" className="py-20 px-4 bg-slate-900/50 overflow-hidden">
      <div ref={ref} className="container mx-auto text-center">
        <h2 className={`text-4xl font-bold text-white mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          The <span className="text-cyan-300">Challenge</span>
        </h2>
        <p className={`text-slate-300 max-w-2xl mx-auto mb-16 transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Oceanographic data is vast and varied, but often exists in isolated silos, hindering comprehensive research and insight.
        </p>
        <div className="relative h-96 flex items-center justify-center">
          <style>
            {`
              @keyframes drift {
                0% { transform: translate(var(--x-start), var(--y-start)) rotate(0deg); }
                100% { transform: translate(var(--x-end), var(--y-end)) rotate(360deg); }
              }
              .data-silo {
                position: absolute;
                animation: drift 20s ease-in-out infinite alternate;
              }
            `}
          </style>
          {CHALLENGE_DATASETS.map((dataset, i) => (
            <div
              key={dataset.name}
              className={`data-silo p-4 rounded-lg border border-cyan-500/50 bg-slate-800/50 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
              style={{
                animationDelay: `${i * -2}s`,
                transitionDelay: `${i * 100}ms`,
                // @ts-ignore
                '--x-start': `${(Math.random() - 0.5) * 50}px`,
                '--y-start': `${(Math.random() - 0.5) * 50}px`,
                '--x-end': `${(Math.random() - 0.5) * 400}px`,
                '--y-end': `${(Math.random() - 0.5) * 400}px`,
              }}
            >
              <h3 className="text-white font-semibold">{dataset.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
