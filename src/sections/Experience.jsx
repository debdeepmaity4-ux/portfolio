import React from 'react';
import { Award, Zap, Code, ShieldAlert } from 'lucide-react';

const Experience = () => {
  const events = [
    {
      year: "2025",
      title: "Smart India Hackathon 2025",
      role: "Lead ML & UI/UX Developer (Team Leader)",
      desc: "Designed and built an intelligent Anti-Phishing network for financial sector systems. Spearheaded the FastAPI machine learning inference server and integrated it with a modern dashboard displaying detailed warning scores to protect users from fake bank portal redirects.",
      achievements: [
        "Led a team of 6 engineers to build the prototype in 36 hours.",
        "Engineered the model to run prediction inferences with sub-100ms latency.",
        "Designed Figma wireframes and converted them into fully responsive layouts."
      ],
      tech: ["Machine Learning", "FastAPI", "React.js", "Tailwind CSS", "Figma Design"],
      icon: <ShieldAlert className="text-brand-purple" size={18} />
    },
    {
      year: "2023",
      title: "Smart India Hackathon 2023",
      role: "AI Developer & UI/UX Designer",
      desc: "Developed a computer vision application tailored for automated sorting pipelines in warehouse facilities. Programmed image processing scripts and customized a responsive interface detailing model status graphs and object categories.",
      achievements: [
        "Successfully developed real-time object classification models.",
        "Collaborated with backend engineers to pipe camera logs into UI dashboards.",
        "Created user journey maps to optimize dashboard navigation speed for warehouse managers."
      ],
      tech: ["Python", "Computer Vision", "OpenCV", "Bootstrap", "User Flows"],
      icon: <Zap className="text-brand-cyan" size={18} />
    }
  ];

  return (
    <section id="experience" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-wider text-brand-purple uppercase">Hackathon Achievements</span>
          <h2 className="text-4xl font-display font-bold text-white">Experience Timeline</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-brand-blue to-brand-cyan mx-auto" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Leading engineering teams and crafting design systems to solve national problems in time-constrained competitions.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central tracking line (glowing) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-blue via-brand-purple to-brand-cyan/20 transform -translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
                  
                  {/* Timeline Glowing Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-brand-purple flex items-center justify-center transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    {event.icon}
                  </div>

                  {/* Even items (Left side on desktop) */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:order-2 md:text-left'}`}>
                    <span className="text-sm font-bold font-mono text-brand-cyan tracking-wide px-3 py-1.5 rounded-full bg-brand-cyan/5 border border-brand-cyan/20">
                      SIH {event.year}
                    </span>
                  </div>

                  {/* Odd items (Right side on desktop, container details) */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 mt-4 md:mt-0 ${isEven ? 'md:order-2 text-left' : 'text-left'}`}>
                    <div className="glass-panel rounded-3xl border border-white/10 p-6 space-y-4 hover:border-brand-purple/20 bg-slate-900/10">
                      <div>
                        <h3 className="text-xl font-display font-bold text-white">{event.title}</h3>
                        <span className="text-xs font-mono font-semibold text-brand-purple">{event.role}</span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {event.desc}
                      </p>

                      {/* Bulleted achievements */}
                      <ul className="text-xs text-slate-300 space-y-2 list-none text-left">
                        {event.achievements.map((ach, key) => (
                          <li key={key} className="flex items-start gap-2">
                            <span className="text-brand-purple font-bold font-mono mt-0.5">•</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className={`flex flex-wrap gap-1.5 pt-2 ${isEven ? '' : 'justify-start'}`}>
                        {event.tech.map((t, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-0.5 rounded-md bg-slate-950 border border-white/5 text-[9px] font-mono text-slate-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
