
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ChallengeSection from './components/ChallengeSection';
import SolutionSection from './components/SolutionSection';
import WhyItMattersSection from './components/WhyItMattersSection';
import DeliverablesSection from './components/DeliverablesSection';
import ContactSection from './components/ContactSection';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#020c1b] overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ChallengeSection />
        <SolutionSection />
        <WhyItMattersSection />
        <DeliverablesSection />
        <ContactSection />
      </main>
      <footer className="relative z-10 text-center p-8 text-slate-400 border-t border-slate-800">
        <p>&copy; 2024 AI-Driven Unified Marine Data Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
