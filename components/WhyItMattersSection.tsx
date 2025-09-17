
import React from 'react';
import { FishIcon, DnaIcon, WaveIcon, GlobeIcon } from './icons';
import { useOnScreen } from '../hooks/useOnScreen';
import { WHY_IT_MATTERS_POINTS } from '../constants';

const icons = [<FishIcon />, <WaveIcon />, <DnaIcon />, <GlobeIcon />];

const WhyItMattersSection: React.FC = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="why-it-matters" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Why It <span className="text-cyan-300">Matters</span>
        </h2>
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_IT_MATTERS_POINTS.map((point, index) => (
            <div
              key={point.title}
              className={`
                text-center p-6 transition-all duration-700 ease-out 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4 text-cyan-400 w-16 h-16 mx-auto animate-pulse">
                  {icons[index]}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-slate-400">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;
