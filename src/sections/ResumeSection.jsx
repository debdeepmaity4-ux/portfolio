import React from 'react';
import { Download, Printer, GraduationCap, Briefcase, Award, Code, CheckCircle } from 'lucide-react';

const ResumeSection = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume-section" className="relative py-20 z-10 border-t border-white/5 bg-slate-950/40">
      
      {/* CSS print utility specifically for this page */}
      <style>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          nav, footer, button, .no-print {
            display: none !important;
          }
          .print-container {
            border: none !important;
            background: white !important;
            color: black !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
          }
          .print-text-dark {
            color: #111827 !important;
          }
          .print-text-muted {
            color: #4b5563 !important;
          }
          .print-border {
            border-color: #e5e7eb !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3 no-print">
          <span className="text-xs font-bold tracking-wider text-brand-purple uppercase">Recruiter Portal</span>
          <h2 className="text-4xl font-display font-bold text-white">Interactive Resume</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-brand-blue to-brand-cyan mx-auto" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Review my professional qualifications, print my resume directly, or download the offline sheet.
          </p>
        </div>

        {/* Action Controls for recruiters */}
        <div className="flex justify-center items-center gap-4 mb-8 no-print">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-purple/40 hover:bg-brand-purple/5 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <Printer size={14} />
            <span>Print Resume (A4 Page)</span>
          </button>
          
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("CV PDF download initialized. The file contains Debdeep Maity's verified qualifications.");
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-xs font-semibold text-white transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Download size={14} />
            <span>Download Resume PDF</span>
          </a>
        </div>

        {/* On-screen A4 sheet simulation */}
        <div className="print-container max-w-4xl mx-auto rounded-[32px] glass-panel border border-white/10 p-8 md:p-12 shadow-2xl bg-slate-900/10 text-left space-y-8">
          
          {/* Resume Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8 print-border">
            <div className="space-y-2">
              <h3 className="text-3xl font-display font-extrabold text-white print-text-dark">Debdeep Maity</h3>
              <p className="text-sm font-mono text-brand-cyan font-semibold">CSE (AI & ML) Student • aspiring AI/ML Engineer</p>
            </div>
            
            <div className="text-xs text-slate-400 space-y-1 md:text-right font-mono print-text-muted">
              <div>Email: debdeepmaity4@gmail.com</div>
              <div>Phone: +91 9046931812</div>
              <div>Location: Barasat, India</div>
              <div>LinkedIn: linkedin.com/in/debdeepmaity</div>
              <div>GitHub: github.com/debdeepmaity</div>
            </div>
          </div>

          {/* Core Summary */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-brand-purple uppercase font-mono">PROFESSIONAL SUMMARY</h4>
            <p className="text-xs text-slate-300 leading-relaxed print-text-muted">
              Enthusiastic B.Tech Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning with growing expertise in data-driven technologies and intelligent system development. Possesses foundational knowledge in machine learning algorithms, deep learning, data analysis, and model optimization, along with hands-on experience in Python, data preprocessing, and AI-based application development. Highly motivated to build scalable, efficient, and intelligent solutions by integrating AI/ML techniques with modern software development practices, demonstrating strong analytical thinking and a collaborative problem-solving approach.
            </p>
          </div>

          {/* Education & Experience Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Education and Experience (8 cols) */}
            <div className="md:col-span-8 space-y-8">
              
              {/* SECTION: EXPERIENCE / PROJECTS */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-widest text-brand-purple uppercase flex items-center gap-2 font-mono">
                  <Briefcase size={14} />
                  <span>PROJECTS & HACKATHONS</span>
                </h4>
                <div className="space-y-6">
                  
                  {/* Project 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-start text-xs font-semibold">
                      <h5 className="text-sm font-bold text-white print-text-dark">Mail Guardian</h5>
                      <span className="text-slate-500 font-mono">2025</span>
                    </div>
                    <div className="text-xs text-brand-cyan font-mono">AI-Powered Phishing Email Detection System</div>
                    <ul className="text-xs text-slate-400 leading-relaxed print-text-muted list-disc list-inside space-y-1">
                      <li>Developed an AI-powered phishing email detection system using React, FastAPI, MongoDB, and Machine Learning.</li>
                      <li>Implemented real-time email analysis with URL scanning, spam classification, and threat detection to improve cybersecurity awareness.</li>
                    </ul>
                  </div>

                  {/* Participation */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-start text-xs font-semibold">
                      <h5 className="text-sm font-bold text-white print-text-dark">National Hackathons Participation</h5>
                      <span className="text-slate-500 font-mono">2023 - 2025</span>
                    </div>
                    <div className="text-xs text-brand-cyan font-mono">Smart India Hackathon (SIH) 2023 & 2025</div>
                    <p className="text-xs text-slate-400 leading-relaxed print-text-muted">
                      Collaborated in intensive team environments during Smart India Hackathon 2023 and Smart India Hackathon 2025, designing architecture layouts and coding real-time algorithms to resolve national-level issues.
                    </p>
                  </div>

                </div>
              </div>

              {/* SECTION: EDUCATION */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-widest text-brand-purple uppercase flex items-center gap-2 font-mono">
                  <GraduationCap size={14} />
                  <span>EDUCATION</span>
                </h4>
                <div className="space-y-6">
                  {/* college */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-start text-xs font-semibold">
                      <h5 className="text-sm font-bold text-white print-text-dark">Adamas University</h5>
                      <span className="text-slate-500 font-mono">Expected 2027</span>
                    </div>
                    <div className="text-xs text-slate-400 print-text-muted flex justify-between">
                      <span>B.Tech in Computer Science Engineering (AI & ML)</span>
                      <span className="text-slate-500">Barasat, India</span>
                    </div>
                  </div>

                  {/* 12th */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-start text-xs font-semibold">
                      <h5 className="text-sm font-bold text-white print-text-dark">Iswarpur B.M. Academy (WBCHSE)</h5>
                      <span className="text-slate-500 font-mono">2023</span>
                    </div>
                    <div className="text-xs text-slate-400 print-text-muted flex justify-between">
                      <span>Class XII (Science)</span>
                    </div>
                  </div>

                  {/* 10th */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-start text-xs font-semibold">
                      <h5 className="text-sm font-bold text-white print-text-dark">Iswarpur B.M. Academy (WBBSE)</h5>
                      <span className="text-slate-500 font-mono">2021</span>
                    </div>
                    <div className="text-xs text-slate-400 print-text-muted flex justify-between">
                      <span>Class X</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Skills & Certs (4 cols) */}
            <div className="md:col-span-4 space-y-8 md:border-l md:border-white/10 md:pl-8 print-border">
              
              {/* Tech Stack checklist */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-widest text-brand-purple uppercase flex items-center gap-2 font-mono">
                  <Code size={14} />
                  <span>TECHNICAL SKILLS</span>
                </h4>
                <div className="space-y-3 text-xs text-slate-300 print-text-muted">
                  
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block mb-1 font-mono uppercase">Frontend Development</span>
                    <p className="leading-relaxed">Responsive Web Design, DOM Manipulation, UI/UX Principles</p>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block mb-1 font-mono uppercase">Programming</span>
                    <p className="leading-relaxed">Python, C, C++</p>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block mb-1 font-mono uppercase">Backend Development</span>
                    <p className="leading-relaxed">Core Java, Object-Oriented Programming (OOP)</p>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block mb-1 font-mono uppercase">Tools & Technologies</span>
                    <p className="leading-relaxed">Linux, Git, GitHub, MongoDB</p>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block mb-1 font-mono uppercase">Productivity Tools</span>
                    <p className="leading-relaxed">Microsoft Excel, PowerPoint, Word</p>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block mb-1 font-mono uppercase">Soft Skills</span>
                    <p className="leading-relaxed">Problem Solving, Analytical Thinking, Team Collaboration, Adaptability</p>
                  </div>

                </div>
              </div>

              {/* AWS Certifications */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-widest text-brand-purple uppercase flex items-center gap-2 font-mono">
                  <Award size={14} />
                  <span>CERTIFICATIONS</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 print-text-muted">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle size={12} className="text-brand-cyan mt-0.5" />
                    <span>AWS Academy Graduate - Machine Learning Foundations</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle size={12} className="text-brand-cyan mt-0.5" />
                    <span>AWS Academy Graduate – Cloud Foundations</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
