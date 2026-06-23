import React from 'react';
import { ExternalLink, BookOpen, ShieldAlert, Brain, Layers, LayoutGrid } from 'lucide-react';

const GithubIcon = ({ size = 14, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = ({ onOpenCaseStudy }) => {
  const projects = [
    {
      id: 'mail-guardian',
      title: 'Mail Guardian',
      subtitle: 'AI-Powered Phishing Email Detection System',
      category: 'ai-ml',
      tech: ['React', 'FastAPI', 'MongoDB', 'Machine Learning', 'NLP'],
      desc: 'An end-to-end intelligent security system that parses email structure and semantic text to detect sophisticated phishing, URL redirects, and sender address spoofing with real-time predictions.',
      features: ['Email Threat Detection', 'URL Analysis', 'Spam Classification', 'Real-Time Prediction'],
      demoLink: '#',
      gitLink: 'https://github.com',
      hasCaseStudy: true,
      icon: <ShieldAlert className="text-red-400" size={20} />
    },
    {
      id: 'neural-vision',
      title: 'NeuralVision',
      subtitle: 'Medical Scan Anomaly Detector',
      category: 'ai-ml',
      tech: ['Python', 'PyTorch', 'CNN', 'OpenCV', 'React'],
      desc: 'A computer vision application training a Convolutional Neural Network (CNN) to detect anomalies in MRI and X-ray scans, rendering bounding boxes on suspicious anomalies.',
      features: ['MRI Scan Ingestion', 'CNN Classification', 'Bounding Box Highlighting', '94.2% Accuracy'],
      demoLink: '#',
      gitLink: 'https://github.com',
      hasCaseStudy: false,
      icon: <Brain className="text-brand-purple" size={20} />
    },
    {
      id: 'dev-flow',
      title: 'DevFlow AI',
      subtitle: 'Intelligent Developer Productivity Hub',
      category: 'web-dev',
      tech: ['FastAPI', 'React', 'Tailwind CSS', 'MongoDB', 'LangChain'],
      desc: 'A SaaS developer workspace analyzing GitHub logs, coding habits, and schedule templates to suggest model-driven energy optimization intervals and automated reports.',
      features: ['GitHub Log Parser', 'Schedules Recommendation', 'AI Productivity Insights', 'Glassmorphism UX'],
      demoLink: '#',
      gitLink: 'https://github.com',
      hasCaseStudy: false,
      icon: <Layers className="text-brand-blue" size={20} />
    }
  ];

  const [filter, setFilter] = React.useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-wider text-brand-purple uppercase">My Portfolio</span>
          <h2 className="text-4xl font-display font-bold text-white">Featured Work</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-brand-blue to-brand-cyan mx-auto" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A handpicked selection of machine learning implementations and human-centered design systems.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {['all', 'ai-ml', 'web-dev'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white border-transparent'
                  : 'bg-white/3 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
              }`}
            >
              {cat === 'all' && 'All Projects'}
              {cat === 'ai-ml' && 'AI & Machine Learning'}
              {cat === 'web-dev' && 'Web Development'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((p) => (
            <div 
              key={p.id}
              className="glass-panel rounded-3xl border border-white/10 p-6 flex flex-col justify-between text-left space-y-6 relative overflow-hidden transition-all duration-300 hover:border-brand-purple/30 group bg-slate-900/10 hover:bg-slate-900/30"
            >
              {/* Top ambient color glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-brand-purple/10 transition-all duration-300" />
              
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/3 flex items-center justify-center border border-white/5">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white leading-tight">{p.title}</h3>
                      <p className="text-xs text-brand-purple font-mono font-medium">{p.subtitle}</p>
                    </div>
                  </div>
                  {p.hasCaseStudy && (
                    <span className="px-2.5 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/20 text-[9px] font-mono font-bold text-brand-cyan uppercase tracking-wide">
                      UX Case Study
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed min-h-[50px]">
                  {p.desc}
                </p>

                {/* Core Features list */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Key Features</span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-slate-300 font-medium">
                    {p.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-brand-cyan" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-white/5 text-[9px] font-mono text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-3">
                  <a 
                    href={p.gitLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <GithubIcon size={14} />
                    <span>Repo</span>
                  </a>
                  
                  <a 
                    href={p.demoLink}
                    onClick={(e) => {
                      if (p.demoLink === '#') e.preventDefault();
                    }}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                </div>

                {p.hasCaseStudy && (
                  <button
                    onClick={() => onOpenCaseStudy(p.id)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-brand-purple/40 hover:bg-brand-purple/5 text-xs font-semibold text-slate-300 hover:text-brand-cyan transition-all cursor-pointer"
                  >
                    <BookOpen size={13} />
                    <span>View UX Process</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
