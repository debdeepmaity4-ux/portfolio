import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles, Sun, Moon } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check if scrolled down for navbar styling
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const scrollPos = window.scrollY + 200;
      for (const link of navLinks) {
        const element = document.querySelector(link.href);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.name.toLowerCase());
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  // Toggle Dark/Light Mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  };

  const handleLinkClick = (e, href, name) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(name.toLowerCase());
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/60 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home', 'home')}
          className="flex items-center gap-2 group font-display text-xl font-bold tracking-tight text-white"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-purple p-[1px] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center">
              <span className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan font-mono">
                DM
              </span>
            </div>
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-purple opacity-30 blur-[4px] group-hover:opacity-60 transition-opacity duration-300" />
          </div>
          <span className="hidden sm:inline font-bold">
            Debdeep<span className="text-brand-purple">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.name)}
                    className={`relative py-2 transition-colors duration-300 hover:text-white ${
                      isActive ? 'text-white' : 'text-slate-400'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-[1px] bg-white/10" />

          {/* Theme Toggle & CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-white/5 hover:border-white/10 bg-white/3 hover:bg-white/5 text-slate-300 hover:text-white transition-all cursor-pointer"
              title={darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <a 
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact', 'contact')}
              className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue hover:to-brand-blue text-white shadow-lg shadow-brand-purple/10 hover:shadow-brand-blue/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-white/5 bg-white/3 text-slate-300 cursor-pointer"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl border border-white/5 bg-white/3 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] z-50 bg-slate-950/95 backdrop-blur-lg border-t border-white/5">
          <ul className="flex flex-col items-center gap-6 py-12 text-lg font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.name)}
                    className={`text-xl transition-colors ${
                      isActive ? 'text-brand-cyan font-bold' : 'text-slate-300'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
            
            <li className="w-4/5 h-[1px] bg-white/5 my-2" />
            
            <li className="w-4/5 flex justify-center">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact', 'contact')}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold"
              >
                Let's Connect
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
