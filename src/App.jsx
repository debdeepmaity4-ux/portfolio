import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ParticleBg from './components/ParticleBg';
import BackgroundBlobs from './components/BackgroundBlobs';
import CursorGlow from './components/CursorGlow';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import ResumeSection from './sections/ResumeSection';
import Contact from './sections/Contact';

// Case Studies
import MailGuardianCaseStudy from './pages/MailGuardianCaseStudy';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const handleOpenCaseStudy = (projectId) => {
    if (projectId === 'mail-guardian') {
      setShowCaseStudy(true);
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 bg-slate-950 overflow-x-hidden selection:bg-brand-purple/30 selection:text-white">
      {/* Background Layer Effects */}
      <BackgroundBlobs />
      <ParticleBg />
      <CursorGlow />

      {/* Global Navigation Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Layout sections */}
      <main className="relative z-10 w-full">
        {/* Sections are stacked with clear vertical separations */}
        <Hero />
        <About />
        <Skills />
        <Projects onOpenCaseStudy={handleOpenCaseStudy} />
        <Experience />
        <Certifications />
        <ResumeSection />
        <Contact />
      </main>

      {/* Full-screen Case Study Overlay */}
      {showCaseStudy && (
        <MailGuardianCaseStudy onClose={() => setShowCaseStudy(false)} />
      )}

      {/* Premium Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-slate-950/80 backdrop-blur-md py-8 mt-12 no-print">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Debdeep Maity. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span>Designed in Figma</span>
            <span>•</span>
            <span>Developed with React & Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
