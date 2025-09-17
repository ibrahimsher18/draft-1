
import React from 'react';
import { ABOUT_CARDS } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

interface AboutCardProps {
  title: string;
  description: string;
  index: number;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description, index }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2, triggerOnce: true });

    return (
        <div 
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 h-full transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-300 mb-3">{title}</h3>
              <p className="text-slate-400">{description}</p>
            </div>
        </div>
    );
};


const AboutSection: React.FC = () => {
    const [titleRef, isTitleVisible] = useOnScreen({ threshold: 0.5, triggerOnce: true });

    return (
    <section id="about" className="py-20 px-4 container mx-auto">
      <h2 ref={titleRef} className={`text-4xl font-bold text-center mb-12 text-white transition-opacity duration-1000 ${isTitleVisible ? 'opacity-100' : 'opacity-0'}`}>
        About <span className="text-cyan-300">CMLRE</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ABOUT_CARDS.map((card, index) => (
          <AboutCard key={card.title} {...card} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
