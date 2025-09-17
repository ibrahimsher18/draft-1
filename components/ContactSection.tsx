
import React, { useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const ContactSection: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2, triggerOnce: true });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    // Mock form submission
    setTimeout(() => {
      setStatus('Message sent successfully!');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div ref={ref} className={`container mx-auto max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Get in <span className="text-cyan-300">Touch</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-4 text-white focus:border-cyan-400 transition-colors input-glow" />
          </div>
          <div>
            <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-4 text-white focus:border-cyan-400 transition-colors input-glow" />
          </div>
          <div>
            <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-4 text-white focus:border-cyan-400 transition-colors input-glow"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-colors duration-300 btn-pulse">
              Send Message
            </button>
          </div>
          {status && <p className="text-center text-cyan-300 mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
