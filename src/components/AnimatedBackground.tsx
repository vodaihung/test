'use client';

import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'purple' | 'gradient';
  intensity?: 'subtle' | 'medium' | 'strong';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'purple', 
  intensity = 'medium' 
}) => {
  const getAnimationSpeed = () => {
    switch (intensity) {
      case 'subtle': return 'animate-pulse-slow';
      case 'medium': return 'animate-float-medium';
      case 'strong': return 'animate-float-fast';
      default: return 'animate-float-medium';
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className={`absolute inset-0 ${
        variant === 'purple' 
          ? 'bg-gradient-to-br from-[#B39FFE] via-[#9B7EF7] to-[#725EBD]' 
          : 'bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600'
      }`} />
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        {/* Large floating orb - top left */}
        <div className={`absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white/5 ${getAnimationSpeed()} animation-delay-0`} 
             style={{ animationDuration: '8s' }} />
        
        {/* Medium floating orb - top right */}
        <div className={`absolute -top-10 -right-32 w-64 h-64 rounded-full bg-white/3 ${getAnimationSpeed()} animation-delay-2000`} 
             style={{ animationDuration: '12s' }} />
        
        {/* Small floating orb - bottom left */}
        <div className={`absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/4 ${getAnimationSpeed()} animation-delay-4000`} 
             style={{ animationDuration: '10s' }} />
        
        {/* Large floating orb - bottom right */}
        <div className={`absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/2 ${getAnimationSpeed()} animation-delay-1000`} 
             style={{ animationDuration: '15s' }} />
        
        {/* Medium floating orb - center */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-white/3 ${getAnimationSpeed()} animation-delay-3000`} 
             style={{ animationDuration: '9s' }} />
      </div>
      
      {/* Subtle moving gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      
      {/* Particle effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-soft-light" />
    </div>
  );
};

export default AnimatedBackground;
