import React, { useState } from 'react';
import { X, ArrowRight, ShieldAlert, Users, Layout, Compass, Palette, Eye, CheckCircle } from 'lucide-react';

const MailGuardianCaseStudy = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('problem');

  const tabs = [
    { id: 'problem', name: 'Problem', icon: <ShieldAlert size={14} /> },
    { id: 'research', name: 'Research', icon: <Users size={14} /> },
    { id: 'wireframes', name: 'Wireframes & Flow', icon: <Layout size={14} /> },
    { id: 'mockups', name: 'Hi-Fi Mockups', icon: <Eye size={14} /> },
    { id: 'decisions', name: 'Design Decisions', icon: <Palette size={14} /> },
  ];

  const personas = [
    {
      name: "Sarah Jenkins",
      role: "Operations Manager (Corporate User)",
      frustrations: "Gets 150+ emails a day. Confused by generic security popups. Accidentally clicked a spear-phishing link last quarter.",
      need: "Immediate, context-specific warning telling her *exactly* why an email is flagged, with direct threat metrics."
    },
    {
      name: "Alex Patel",
      role: "System Administrator",
      frustrations: "Spends hours reviewing false-positive flags. Users ignore traditional spam filters because of warning fatigue.",
      need: "Transparent prediction details (model confidence, trigger variables) to explain flags to staff."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/95 backdrop-blur-xl flex justify-center items-start pt-10 pb-10 px-4 md:px-6">
      <div className="relative w-full max-w-5xl rounded-[32px] glass-panel border border-white/10 shadow-2xl overflow-hidden flex flex-col my-auto">
        
        {/* Header Grid */}
        <div className="relative p-8 border-b border-white/5 bg-slate-900/40">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl border border-white/5 bg-slate-950/80 hover:bg-slate-900 hover:border-white/15 text-slate-400 hover:text-white transition-all cursor-pointer"
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>

          <div className="space-y-2 text-left">
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase font-mono">UI/UX CASE STUDY // MAIL GUARDIAN</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
              AI-Powered Phishing Email Detection System
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              Analyzing user behaviors and designing a secure dashboard layout that bridges neural network predictions with transparent security warnings.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center bg-slate-950/40 px-8 py-3 gap-2 border-b border-white/5 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white/10 text-brand-cyan border border-white/10'
                  : 'bg-transparent text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Case Study Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto text-left">
          
          {/* TAB 1: PROBLEM */}
          {activeTab === 'problem' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                    <span className="text-brand-purple">01 /</span> The Phishing Crisis & Warning Fatigue
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Phishing attacks bypassed simple heuristic spam filters in 2025 because attackers used AI to rewrite contents dynamically. Modern deep learning models can catch these variations, but they operate as **black boxes**.
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    When traditional clients block or flag an email, they use scary, red banners saying: `"This email is suspicious"`. 
                  </p>
                  <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/20 text-xs text-red-400 leading-relaxed">
                    <strong>The Danger:</strong> Users develop <strong>Warning Fatigue</strong>. Over 45% of employees surveyed bypass these warnings because they do not understand *why* the message is labeled unsafe, or they assume it is a false-positive.
                  </div>
                </div>

                <div className="glass-card rounded-2xl border border-white/15 p-6 space-y-4 flex flex-col justify-center bg-slate-900/30">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">The Goal</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Create a system that analyzes:
                  </p>
                  <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
                    <li>Email content (semantics, tone, urgency cues)</li>
                    <li>Embedded links (domain registration date, redirect patterns)</li>
                    <li>Sender history metrics</li>
                  </ul>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Then, display this data transparently so non-technical users can make informed safety choices.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RESEARCH */}
          {activeTab === 'research' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <span className="text-brand-purple">02 /</span> User Personas & Survey Insights
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We conducted user interviews and survey questionnaires across 50 corporate and university employees. Here are the user profiles we identified who suffer the most from email scams.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personas.map((p, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-white">{p.name}</h4>
                      <span className="text-[10px] font-mono font-semibold text-brand-cyan uppercase tracking-wider">{p.role}</span>
                    </div>
                    
                    <div className="h-[1px] bg-white/5" />

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-500 font-bold uppercase">Pain Point:</span>
                        <p className="text-slate-300 mt-1">{p.frustrations}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 font-bold uppercase">User Goal:</span>
                        <p className="text-slate-300 mt-1">{p.need}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: WIREFRAMES & FLOW */}
          {activeTab === 'wireframes' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                    <span className="text-brand-purple">03 /</span> User Journey & Decision Trees
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Instead of separating design from the code, we mapped the user journey alongside the AI model pipelines. The model processes the email input and parses it into threat scores before the UI displays warning cards.
                  </p>

                  {/* ASCII Diagram for User Flow */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/5 font-mono text-[10px] text-brand-cyan overflow-x-auto space-y-1">
                    <div>[User Receives Email] --&gt; [ML Feature Parser Ingests Text]</div>
                    <div className="pl-8 text-slate-500">|-- Parses URLs, NLP semantics, SPF domain records</div>
                    <div>[FastAPI Backend Rates Danger Scores] --&gt; [Web Socket Updates UI]</div>
                    <div>[UI Renders Warning Cards] --&gt; [User Selects Info Panel]</div>
                    <div className="pl-8 text-slate-500">|-- User views model reasons, inspects threats directly</div>
                    <div>[User Safe/Trash Decision] --&gt; [Log Ingestion to Reinforce Model]</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">Structural Wireframe Layout</h4>
                  <div className="aspect-video w-full rounded-2xl border border-white/10 bg-slate-950 p-4 flex flex-col justify-between font-mono text-[9px] text-slate-600">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span>[HEADER: MAIL GUARDIAN]</span>
                      <span>[USER_PROFILE]</span>
                    </div>
                    <div className="grid grid-cols-12 gap-2 my-2 flex-grow">
                      <div className="col-span-4 border border-dashed border-white/10 rounded p-2 flex flex-col justify-between">
                        <span>[SIDEBAR: EMAIL LIST]</span>
                        <div className="space-y-1">
                          <div className="bg-red-500/10 h-3 border border-red-500/20 rounded" />
                          <div className="bg-green-500/10 h-3 border border-green-500/20 rounded" />
                        </div>
                      </div>
                      <div className="col-span-8 border border-dashed border-white/10 rounded p-2 flex flex-col justify-between">
                        <div className="flex justify-between">
                          <span>[SENDER: HR@LEGIT-BANK.COM]</span>
                          <span className="text-red-400 font-bold">[SUSPICIOUS: 88%]</span>
                        </div>
                        <div className="bg-white/5 rounded p-2 text-slate-400 my-2">
                          <span>"Urgent: Reset password at http://legit-bank.secure-update.com/login"</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                          <div className="border border-white/5 rounded p-1 text-[8px]">URL FAIL</div>
                          <div className="border border-white/5 rounded p-1 text-[8px]">URGENCY HIGHLIGHT</div>
                          <div className="border border-white/5 rounded p-1 text-[8px]">DOMAIN MISMATCH</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: HI-FI MOCKUPS */}
          {activeTab === 'mockups' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <span className="text-brand-purple">04 /</span> High-Fidelity UI Inspection Layouts
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Here is the interactive component designed to mock the actual threat diagnosis widget. Hover or read through the dynamic data details.
                </p>
              </div>

              {/* Mock Dashboard Widget */}
              <div className="max-w-xl mx-auto rounded-2xl border border-red-500/20 bg-slate-900/60 p-6 space-y-4 shadow-xl relative overflow-hidden">
                {/* Glowing alert glow background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 blur-[40px] rounded-full" />
                
                {/* Widget Header */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/25 text-red-500">
                      <ShieldAlert size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Security Threat Flagged</h4>
                      <p className="text-[10px] text-slate-500 font-mono">ID: ML_PHISH_9845X</p>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-[10px] font-mono font-bold text-red-400 uppercase tracking-wide">
                    Threat: 92%
                  </div>
                </div>

                {/* Email meta snippet */}
                <div className="p-3 bg-slate-950 rounded-xl border border-white/5 text-xs text-slate-400 font-mono space-y-1">
                  <div><span className="text-slate-500">From:</span> secure-login@paypal-update-desk.com</div>
                  <div><span className="text-slate-500">Subject:</span> [URGENT] Account Suspended - Verify Identity</div>
                </div>

                {/* Analyzed threat points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[10px] font-mono">
                  <div className="p-2.5 rounded-xl border border-red-500/10 bg-red-500/5 text-left">
                    <span className="text-red-400 font-bold block mb-1">URL RISK</span>
                    <span className="text-slate-400 block">External redirect to fake domains.</span>
                  </div>
                  <div className="p-2.5 rounded-xl border-yellow-500/20 border bg-yellow-500/5 text-left">
                    <span className="text-yellow-400 font-bold block mb-1">NLP SENTIMENT</span>
                    <span className="text-slate-400 block">Urgent timing verbs, coercing action.</span>
                  </div>
                  <div className="p-2.5 rounded-xl border-green-500/20 border bg-green-500/5 text-left">
                    <span className="text-green-500 font-bold block mb-1">SENDER SPF</span>
                    <span className="text-slate-400 block">Failed domain signature matching.</span>
                  </div>
                </div>

                {/* Safe Actions */}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[10px] text-slate-500">Proceeding is blocked by policy.</span>
                  <div className="flex gap-2">
                    <button className="px-3.5 py-1.5 rounded-lg border border-white/5 hover:border-white/10 bg-white/3 text-[10px] text-slate-300 font-semibold cursor-pointer">
                      False Positive?
                    </button>
                    <button className="px-3.5 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-[10px] text-white font-semibold cursor-pointer">
                      Delete Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: DESIGN DECISIONS */}
          {activeTab === 'decisions' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Decision 1: Colors */}
                <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 text-brand-cyan flex items-center justify-center border border-brand-cyan/20">
                    <Palette size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-white">Trust Color System</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Using soft, glow-supported semantic colors instead of high-contrast warning elements to prevent panic while retaining warning visibility:
                  </p>
                  <div className="flex items-center gap-2 text-[9px] font-mono text-slate-300 pt-1">
                    <span className="w-3 h-3 rounded-full bg-red-500 block" /> <span>90%+ Phishing (Red Alert)</span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px] font-mono text-slate-300">
                    <span className="w-3 h-3 rounded-full bg-yellow-500 block" /> <span>Spam/Caution (Yellow Warning)</span>
                  </div>
                </div>

                {/* Decision 2: Transparency */}
                <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center border border-brand-blue/20">
                    <CheckCircle size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-white">Transparent Reasoning</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Every ML detection reveals the score breakdown (URL check, semantic score, sender authenticity) directly to combat warning fatigue by explaining *why* the threat index is high.
                  </p>
                </div>

                {/* Decision 3: Custom Actions */}
                <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-purple/10 text-brand-purple flex items-center justify-center border border-brand-purple/20">
                    <Compass size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-white">Reinforcement Loop</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    By prompting the user to confirm flags via the "False Positive" or "Delete" actions, the interface reports feedback data back to retrain the FastAPI algorithms, improving accuracy.
                  </p>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-8 border-t border-white/5 bg-slate-900/40 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
            <span>TECH: React • FastAPI • Python ML • Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl border border-white/5 hover:border-white/10 bg-slate-950 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              GitHub Repository
            </a>
            
            <button 
              onClick={() => {
                alert("Simulating redirecting to interactive Figma prototype...");
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-xs font-semibold text-white transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Launch Prototype</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MailGuardianCaseStudy;
