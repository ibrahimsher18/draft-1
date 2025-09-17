
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const HeroSection: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="home" ref={ref} className="h-screen flex items-center justify-center text-center px-4">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4" style={{ textShadow: '0 0 10px rgba(100, 255, 218, 0.7), 0 0 20px rgba(100, 255, 218, 0.5)'}}>
          AI-Driven Unified
          <br />
          <span className="text-cyan-300">Marine Data Platform</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          Empowering India’s ocean research through intelligent, unified data systems.
        </p>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group"
        >
           <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          Explore Our Vision
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
