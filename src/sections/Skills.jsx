import React, { useState } from 'react';
import { Cpu, Code, Palette, Wrench, Sparkles, Database } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'ai-ml', name: 'AI & Machine Learning' },
    { id: 'programming-backend', name: 'Programming & Backend' },
    { id: 'frontend-design', name: 'Frontend & UI/UX' },
    { id: 'tools-tech', name: 'Tools & Productivity' },
    { id: 'soft-skills', name: 'Soft Skills' },
  ];

  const skillsData = [
    // AI & Machine Learning
    { name: 'Machine Learning', category: 'ai-ml', level: 88, desc: 'Supervised & unsupervised algorithms, regression, SVM, decision trees' },
    { name: 'Deep Learning', category: 'ai-ml', level: 80, desc: 'Neural network architectures, PyTorch pipelines, computer vision foundations' },
    { name: 'Data Analysis', category: 'ai-ml', level: 85, desc: 'Pandas, NumPy, Matplotlib, extracting patterns from unstructured logs' },
    { name: 'Model Optimization', category: 'ai-ml', level: 78, desc: 'Hyperparameter tuning, cross-validation, feature metrics preprocessing' },
    
    // Programming & Backend
    { name: 'Python', category: 'programming-backend', level: 92, desc: 'Primary language for ML modeling, data preprocessing, and backend API scripts' },
    { name: 'Core Java & OOP', category: 'programming-backend', level: 82, desc: 'Object-Oriented Programming architectures, data abstraction, interfaces' },
    { name: 'C++', category: 'programming-backend', level: 80, desc: 'Data structures, algorithm implementations, computational complexity' },
    { name: 'C', category: 'programming-backend', level: 75, desc: 'Procedural logic, pointers memory management, low-level structures' },
    
    // Frontend & UI/UX
    { name: 'Responsive Web Design', category: 'frontend-design', level: 88, desc: 'Designing components adapting to mobile, tablet, and desktop dimensions' },
    { name: 'DOM Manipulation', category: 'frontend-design', level: 85, desc: 'Dynamic interface updating using modern state tracking and Javascript' },
    { name: 'UI/UX Principles', category: 'frontend-design', level: 86, desc: 'User-centered hierarchy scales, Figma wireframing, aesthetic visual trust' },
    
    // Tools & Tech
    { name: 'Linux OS', category: 'tools-tech', level: 80, desc: 'Bash commands execution, script triggers, terminal file systems' },
    { name: 'Git & GitHub', category: 'tools-tech', level: 88, desc: 'Version logging, branch merges, pull requests, collaborative reviews' },
    { name: 'MongoDB', category: 'tools-tech', level: 80, desc: 'NoSQL collections modeling, database queries, structured JSON stores' },
    { name: 'Productivity Suites', category: 'tools-tech', level: 90, desc: 'Advanced Excel data tables, PowerPoint slides, Word report sheets' },
    
    // Soft Skills
    { name: 'Problem Solving', category: 'soft-skills', level: 92, desc: 'Structuring logical pipelines, resolving algorithmic and model bottlenecks' },
    { name: 'Analytical Thinking', category: 'soft-skills', level: 90, desc: 'Evaluating dataset biases, designing diagnostic security checks' },
    { name: 'Team Collaboration', category: 'soft-skills', level: 88, desc: 'Participating in hackathon teams, code coordination, documentation loops' },
    { name: 'Adaptability', category: 'soft-skills', level: 92, desc: 'Rapidly learning new technology stacks, cloud environments, and UX rules' }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'ai-ml': return <Cpu className="text-brand-purple" size={16} />;
      case 'programming-backend': return <Code className="text-brand-blue" size={16} />;
      case 'frontend-design': return <Palette className="text-brand-cyan" size={16} />;
      case 'tools-tech': return <Database className="text-green-400" size={16} />;
      case 'soft-skills': return <Sparkles className="text-yellow-400" size={16} />;
      default: return <Sparkles className="text-white" size={16} />;
    }
  };

  return (
    <section id="skills" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-wider text-brand-cyan uppercase">Technical Stack</span>
          <h2 className="text-4xl font-display font-bold text-white">Skills & Toolkit</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-brand-blue to-brand-cyan mx-auto" />
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized checklist of programming languages, design workflows, and tools I use.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 border cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-white border-transparent shadow-lg shadow-brand-purple/10'
                  : 'bg-white/3 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between text-left space-y-4"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white tracking-wide">{skill.name}</span>
                <div className="w-8 h-8 rounded-lg bg-white/3 flex items-center justify-center border border-white/5">
                  {getCategoryIcon(skill.category)}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-normal min-h-[32px]">
                {skill.desc}
              </p>

              {/* Progress Glow Bar */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>PROFICIENCY</span>
                  <span className="text-white font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
