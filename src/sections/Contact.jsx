import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, FileText, Download } from 'lucide-react';

const GithubIcon = ({ size = 16, className = "" }) => (
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

const LinkedinIcon = ({ size = 16, className = "" }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    else if (formData.name.length < 2) tempErrors.name = "Name must be at least 2 characters.";
    
    if (!formData.email.trim()) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email format is invalid.";
    
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty.";
    else if (formData.message.length < 10) tempErrors.message = "Message must be at least 10 characters.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear errors in real-time as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate backend POST request
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success state after a few seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="relative py-20 z-10 border-t border-white/5 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-wider text-brand-cyan uppercase">Get in Touch</span>
          <h2 className="text-4xl font-display font-bold text-white">Contact Debdeep</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-brand-blue to-brand-cyan mx-auto" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Let's collaborate on an internship project, freelance UI/UX task, or technical ML developer work.
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Glassmorphism details info panel */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-8 bg-slate-900/10">
            <div className="space-y-6">
              <div className="space-y-2 text-left">
                <span className="text-xs font-bold tracking-wider text-brand-purple uppercase font-mono">CONNECTION TERMINAL</span>
                <h3 className="text-2xl font-display font-semibold text-white leading-snug">Let's build something intelligent.</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  I'm actively seeking B.Tech CSE (AI/ML) internships and entry-level Software Engineering or UI/UX positions. Drop me an email or find me on social networks.
                </p>
              </div>

              {/* Direct links list */}
              <div className="space-y-4 text-left">
                
                <a 
                  href="mailto:debdeepmaity4@gmail.com" 
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/3 flex items-center justify-center border border-white/5 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 transition-all text-slate-400 group-hover:text-brand-blue">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono font-semibold block">EMAIL ME</span>
                    <span className="text-xs text-slate-300 group-hover:text-white transition-colors">debdeepmaity4@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-400">
                  <div className="w-10 h-10 rounded-xl bg-white/3 flex items-center justify-center border border-white/5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono font-semibold block">CALL / PHONE</span>
                    <span className="text-xs text-slate-300">+91 9046931812</span>
                  </div>
                </div>

                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/3 flex items-center justify-center border border-white/5 group-hover:border-brand-purple/30 group-hover:bg-brand-purple/5 transition-all text-slate-400 group-hover:text-brand-purple">
                    <LinkedinIcon size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono font-semibold block">LINKEDIN</span>
                    <span className="text-xs text-slate-300 group-hover:text-white transition-colors">linkedin.com/in/debdeepmaity</span>
                  </div>
                </a>

                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/3 flex items-center justify-center border border-white/5 group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/5 transition-all text-slate-400 group-hover:text-brand-cyan">
                    <GithubIcon size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono font-semibold block">GITHUB PROFILE</span>
                    <span className="text-xs text-slate-300 group-hover:text-white transition-colors">github.com/debdeepmaity</span>
                  </div>
                </a>

              </div>
            </div>

            {/* Quick Resume Download trigger */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="text-brand-purple" size={24} />
                <div className="text-left">
                  <span className="text-xs font-bold text-white block">Download Resume</span>
                  <span className="text-[10px] text-slate-500 font-mono">PDF Format • 142 KB</span>
                </div>
              </div>
              
              <a 
                href="#resume-section"
                className="p-2 rounded-xl bg-white/5 hover:bg-brand-purple/20 text-slate-300 hover:text-white border border-white/5 hover:border-brand-purple/40 transition-all cursor-pointer"
                title="Download CV"
              >
                <Download size={16} />
              </a>
            </div>

          </div>

          {/* Right Column: Dynamic interactive Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between bg-slate-900/10 text-left">
            
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[10px] font-mono text-slate-400 font-bold uppercase">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-purple/55 transition-colors ${
                      errors.name ? 'border-red-500/50' : 'border-white/5'
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-400 font-mono block mt-1">{errors.name}</span>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-[10px] font-mono text-slate-400 font-bold uppercase">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-purple/55 transition-colors ${
                      errors.email ? 'border-red-500/50' : 'border-white/5'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-400 font-mono block mt-1">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label htmlFor="subject" className="text-[10px] font-mono text-slate-400 font-bold uppercase">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Internship opportunity / Freelance UX"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-purple/55 transition-colors ${
                    errors.subject ? 'border-red-500/50' : 'border-white/5'
                  }`}
                />
                {errors.subject && <span className="text-[10px] text-red-400 font-mono block mt-1">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-[10px] font-mono text-slate-400 font-bold uppercase">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timing, or technical role..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-purple/55 transition-colors resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-white/5'
                  }`}
                />
                {errors.message && <span className="text-[10px] text-red-400 font-mono block mt-1">{errors.message}</span>}
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-white text-xs font-semibold uppercase tracking-wider transition-all hover:scale-[1.01] hover:brightness-105 active:scale-100 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Initiating Transmission...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* Real-time Success Notification overlay/box */}
            {isSubmitted && (
              <div className="mt-4 p-4 rounded-xl border border-green-500/20 bg-green-500/5 flex items-center gap-3 text-green-400 text-xs font-medium animate-fadeIn">
                <CheckCircle size={18} className="flex-shrink-0" />
                <span>Transmission Received! I will get back to you shortly.</span>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
