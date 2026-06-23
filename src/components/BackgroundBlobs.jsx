import React from 'react';

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glow Blob 1: Purple, Top Left */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-brand-purple/20 blur-[120px] animate-pulse-slow"
        style={{ animationDuration: '10s' }}
      />
      
      {/* Glow Blob 2: Cyan/Blue, Bottom Right */}
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-brand-cyan/15 blur-[120px] animate-pulse-slow"
        style={{ animationDuration: '14s', animationDelay: '2s' }}
      />
      
      {/* Glow Blob 3: Pink/Indigo, Center Left */}
      <div 
        className="absolute top-[40%] left-[10%] w-[35vw] h-[35vw] max-w-[400px] rounded-full bg-brand-blue/15 blur-[100px] animate-pulse-slow"
        style={{ animationDuration: '12s', animationDelay: '1s' }}
      />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
};

export default BackgroundBlobs;
