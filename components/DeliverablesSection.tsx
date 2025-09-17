
import React from 'react';
import { DELIVERABLES } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

const DeliverablesSection: React.FC = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="deliverables" className="py-20 px-4 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Project <span className="text-cyan-300">Deliverables</span>
      </h2>
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {DELIVERABLES.map((deliverable, index) => (
          <div
            key={deliverable.title}
            className={`
              perspective-card group h-52 transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative perspective-card-inner w-full h-full">
              {/* Front Face */}
              <div className="card-face absolute w-full h-full bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center p-6 text-center">
                <h3 className="text-xl font-bold text-cyan-300">{deliverable.title}</h3>
              </div>
              {/* Back Face */}
              <div className="card-face card-back absolute w-full h-full bg-gradient-to-br from-cyan-600 to-blue-700 rounded-lg flex items-center justify-center p-6 text-center">
                <p className="text-white">{deliverable.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliverablesSection;
