import React, { useState, useEffect, useRef } from 'react';
import { Terminal, ArrowUpRight, Sparkles, Code, Cpu, Award, Download } from 'lucide-react';

const Hero = () => {
  const roles = [
    "AI Enthusiast",
    "ML Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Future Data Scientist"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Dynamic typing effect
  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause when word is complete
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting characters
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  // 3D Card Tilt Effect
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate within the card
    const y = e.clientY - rect.top;  // y coordinate within the card
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate values based on mouse relative position (limit it to max 12deg)
    const rotateX = ((centerY - y) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  // Mock code terminal lines
  const [epoch, setEpoch] = useState(1);
  const [accuracy, setAccuracy] = useState(82.4);
  const [loss, setLoss] = useState(0.54);

  // Animate mock training metrics inside the glass card
  useEffect(() => {
    const interval = setInterval(() => {
      setEpoch(prev => {
        if (prev >= 100) return 1;
        
        // Randomly update accuracy and loss as training proceeds
        setAccuracy(acc => {
          const next = acc + Math.random() * 0.5;
          return next > 99.2 ? 99.2 : parseFloat(next.toFixed(2));
        });
        setLoss(l => {
          const next = l - Math.random() * 0.015;
          return next < 0.01 ? 0.01 : parseFloat(next.toFixed(3));
        });
        
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Info */}
        <div className="lg:col-span-7 text-left space-y-6 flex flex-col justify-center">
          
          {/* Welcome Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-purple/20 bg-brand-purple/5 text-xs font-semibold text-brand-purple tracking-wide w-fit">
            <Sparkles size={14} className="animate-pulse" />
            <span>AI/ML ENGINEER & UI/UX DESIGNER</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan">
                Debdeep Maity
              </span>
            </h1>
            
            {/* Dynamic typing role */}
            <div className="h-10 flex items-center">
              <p className="text-xl sm:text-2xl font-mono font-medium text-brand-cyan">
                &gt; {currentText}
                <span className="animate-ping ml-1 font-bold text-white">|</span>
              </p>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            "Building intelligent products and meaningful user experiences through AI, Machine Learning, and Human-Centered Design."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan hover:from-brand-blue hover:to-brand-blue text-white font-semibold transition-all duration-300 shadow-lg shadow-brand-purple/20 hover:scale-[1.02] cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowUpRight size={18} />
            </a>

            <a 
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-6 py-3 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/5 text-slate-300 hover:text-white font-semibold transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </a>

            {/* Resume button */}
            <a 
              href="#resume-section"
              onClick={(e) => scrollToSection(e, '#resume-section')}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 text-slate-400 hover:text-white font-medium text-sm transition-all duration-300 cursor-pointer"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mini Tech Badge Row */}
          <div className="pt-6 border-t border-white/5 space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Expertise Core</span>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400 font-mono">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5">Neural Networks</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5">Computer Vision</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5">Figma Systems</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5">FastAPI</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5">React.js</span>
            </div>
          </div>

        </div>

        {/* Right Side 3D glassmorphic card & status */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Decorative Back Light */}
          <div className="absolute w-72 h-72 rounded-full bg-brand-purple/20 blur-[60px] -z-10 animate-pulse" />
          
          {/* Floating tech badges */}
          <div className="absolute top-12 left-2 z-20 animate-float p-3 rounded-2xl glass-card border border-white/10 flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-xs font-mono">Py</div>
            <span className="text-xs text-slate-300 font-semibold font-mono">Python</span>
          </div>

          <div className="absolute bottom-16 -right-4 z-20 animate-float-delayed p-3 rounded-2xl glass-card border border-white/10 flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xs">F</div>
            <span className="text-xs text-slate-300 font-semibold font-mono">Figma</span>
          </div>

          <div className="absolute top-1/2 -right-8 z-20 animate-float p-3 rounded-2xl glass-card border border-white/10 flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-xs">R</div>
            <span className="text-xs text-slate-300 font-semibold font-mono">React</span>
          </div>

          {/* Main 3D Card */}
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full max-w-[380px] aspect-[3/4] rounded-[24px] glass-panel p-6 shadow-2xl transition-all duration-200 ease-out border border-white/10 flex flex-col justify-between"
            style={{ 
              transformStyle: 'preserve-3d',
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Top header of card */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4" style={{ transform: 'translateZ(25px)' }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 tracking-wider">SECURE CONNECTION // AI_MODEL</span>
            </div>

            {/* Profile Avatar & Mini Bio */}
            <div className="py-6 flex flex-col items-center text-center space-y-4" style={{ transform: 'translateZ(40px)' }}>
              {/* Profile Ring */}
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-brand-blue via-brand-purple to-brand-cyan p-[2px] shadow-lg shadow-brand-purple/20">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  {/* Since we don't have an image, let's create a beautiful abstract vector avatar represent AI/Design */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-950 to-slate-800 flex flex-col items-center justify-center text-slate-400">
                    <Cpu size={32} className="text-brand-purple animate-pulse" />
                    <span className="text-[9px] font-mono tracking-widest text-brand-cyan mt-1">DEBDEEP.AI</span>
                  </div>
                </div>
                {/* Active Status Ring Dot */}
                <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-slate-950 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-white">Debdeep Maity</h3>
                <p className="text-xs text-brand-purple font-mono font-semibold">CSE (AI & ML) student @ Adamas University</p>
              </div>
            </div>

            {/* AI Model training metrics status */}
            <div 
              className="bg-slate-950/60 rounded-2xl border border-white/5 p-4 font-mono text-[11px] text-slate-400 space-y-2 text-left" 
              style={{ transform: 'translateZ(30px)' }}
            >
              <div className="flex justify-between items-center text-white">
                <span className="flex items-center gap-1.5 text-brand-cyan">
                  <Terminal size={12} />
                  <span>training_agent.py</span>
                </span>
                <span className="text-slate-500">online</span>
              </div>
              <div className="h-[1px] bg-white/5 my-1" />
              <div className="flex justify-between">
                <span>[EPOCH]</span>
                <span className="text-white">{epoch}/100</span>
              </div>
              <div className="flex justify-between">
                <span>[LOSS]</span>
                <span className="text-red-400 font-semibold">{loss}</span>
              </div>
              <div className="flex justify-between">
                <span>[ACCURACY]</span>
                <span className="text-green-400 font-semibold">{accuracy}%</span>
              </div>
              
              {/* Progress bar */}
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-1">
                <div 
                  className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan transition-all duration-300"
                  style={{ width: `${epoch}%` }}
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
