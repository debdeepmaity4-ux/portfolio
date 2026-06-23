import React from 'react';
import { Award, Cloud, BrainCircuit, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      desc: "Covers machine learning concepts, data preprocessing, model selection, training, hyperparameter tuning, and AWS SageMaker endpoints.",
      icon: <BrainCircuit className="text-brand-purple" size={24} />,
      badgeColor: "border-brand-purple/20 bg-brand-purple/5 text-brand-purple",
      link: "https://www.credly.com"
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      desc: "Validation of cloud computing architecture, global infrastructure, IAM controls, virtual networks (VPC), EC2 scalability, and core serverless structures.",
      icon: <Cloud className="text-brand-blue" size={24} />,
      badgeColor: "border-brand-blue/20 bg-brand-blue/5 text-brand-blue",
      link: "https://www.credly.com"
    }
  ];

  return (
    <section id="certifications" className="relative py-20 z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-wider text-brand-cyan uppercase">Verified Credentials</span>
          <h2 className="text-4xl font-display font-bold text-white">Certifications</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-brand-blue to-brand-cyan mx-auto" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Professional cloud and machine learning foundation training verified by Amazon Web Services.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certs.map((c, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl border border-white/10 p-6 flex flex-col justify-between text-left space-y-6 bg-slate-900/10 relative overflow-hidden"
            >
              {/* Back subtle glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 blur-[40px] rounded-full pointer-events-none" />
              
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/3 flex items-center justify-center border border-white/5">
                    {c.icon}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full border text-[9px] font-mono font-semibold uppercase tracking-wide ${c.badgeColor}`}>
                    AWS Academy
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-slate-500 font-mono font-semibold tracking-wider block">CREDENTIAL ISSUED: {c.date}</span>
                  <h3 className="text-lg font-display font-bold text-white leading-snug">{c.title}</h3>
                  <span className="text-xs font-semibold text-slate-400 font-mono block">Issuer: {c.issuer}</span>
                  <p className="text-xs text-slate-400 leading-relaxed pt-2">
                    {c.desc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="border-t border-white/5 pt-4">
                <a 
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  <Award size={14} />
                  <span>Verify Credly Badge</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
