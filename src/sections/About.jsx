import React from 'react';
import { Cpu, Palette, Code, Target, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-brand-blue" size={24} />,
      title: "B.Tech AIML Student",
      desc: "Specializing in Artificial Intelligence and Machine Learning at Adamas University (Expected 2027)."
    },
    {
      icon: <Cpu className="text-brand-purple" size={24} />,
      title: "AI/ML Passionate",
      desc: "Deep interest in Neural Networks, Deep Learning, Data Analytics, and predictive model optimizations."
    },
    {
      icon: <Palette className="text-brand-cyan" size={24} />,
      title: "UI/UX Thinking",
      desc: "Passionate about Figma designs, building systematic wireframes, user journeys, and pixel-perfect aesthetics."
    },
    {
      icon: <Target className="text-red-400" size={24} />,
      title: "Problem Solver",
      desc: "Strong foundation in data structures, algorithms, and logical modeling to build performant systems."
    },
    {
      icon: <Code className="text-green-400" size={24} />,
      title: "Full-Stack Dev",
      desc: "Crafting scalable backends with FastAPI/Node and interactive user interfaces using React.js."
    },
    {
      icon: <Briefcase className="text-yellow-400" size={24} />,
      title: "Seeking Internships",
      desc: "Looking for roles where engineering meets design, contributing to high-impact user experiences."
    }
  ];

  const stats = [
    { value: "SIH '23 & '25", label: "Smart India Hackathons" },
    { value: "2", label: "AWS Academy Badges" },
    { value: "10+", label: "Projects Completed" },
    { value: "500+", label: "Figma Design Hours" }
  ];

  return (
    <section id="about" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-wider text-brand-purple uppercase">My Background</span>
          <h2 className="text-4xl font-display font-bold text-white">About Debdeep</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-brand-blue to-brand-cyan mx-auto" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I bridges the gap between complex algorithmic backends and clean user-centered design systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Core Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-wider text-brand-cyan uppercase font-mono">My Philosophy</span>
              <h3 className="text-2xl font-display font-semibold text-white leading-snug">
                Where Logical Algorithms Meet Beautiful Interfaces.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                As a B.Tech Computer Science student specializing in Artificial Intelligence & Machine Learning, I noticed a common gap in software products: highly intelligent models wrapped in interfaces that are frustrating or complex to use.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                I dedicated myself to mastering both worlds. I build intelligent machine learning algorithms while designing intuitive UI/UX design systems to ensure that AI power is accessible, transparent, and satisfying for the end user.
              </p>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-3 bg-slate-950/40 rounded-2xl border border-white/5 text-left">
                  <div className="text-xl font-bold font-display text-white text-glow-blue">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 font-semibold tracking-wide uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Highlights Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between text-left space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/3 flex items-center justify-center border border-white/5">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-semibold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
