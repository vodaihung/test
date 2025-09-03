'use client';

import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const progressPercentage = (currentStep / totalSteps) * 100;

  // Animate progress when step changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progressPercentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [progressPercentage]);

  // Determine if we're on a purple background step
  const isPurpleStep = currentStep === 5 || currentStep === 10 || currentStep === 11 || currentStep === 13;

  return (
    <div className="w-full max-w-[327px] md:max-w-[480px] mx-auto">
      {/* Progress container with enhanced styling */}
      <div className="relative">
        {/* Step indicator text */}
        <div className="flex justify-between items-center mb-3">
          <span className={`text-xs font-medium font-overused ${
            isPurpleStep ? 'text-white/70' : 'text-[#676767]'
          }`}>
            Step {currentStep} of {totalSteps}
          </span>
          <span className={`text-xs font-medium font-overused ${
            isPurpleStep ? 'text-white/70' : 'text-[#676767]'
          }`}>
            {Math.round(progressPercentage)}%
          </span>
        </div>

        {/* Progress track */}
        <div className={`w-full h-2 rounded-full relative overflow-hidden ${
          isPurpleStep
            ? 'bg-white/20 backdrop-blur-sm'
            : 'bg-[#F5F5F5] border border-[#E5E5E5]'
        }`}>
          {/* Background shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

          {/* Progress fill */}
          <div
            className={`h-full rounded-full relative overflow-hidden transition-all duration-700 ease-out ${
              isPurpleStep
                ? 'bg-gradient-to-r from-white/90 to-white/70 shadow-lg'
                : 'bg-gradient-to-r from-[#B39FFE] via-[#9B7EF7] to-[#725EBD] shadow-md'
            }`}
            style={{ width: `${animatedProgress}%` }}
          >
            {/* Progress fill shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />

            {/* Progress fill glow */}
            <div className={`absolute inset-0 rounded-full ${
              isPurpleStep
                ? 'shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                : 'shadow-[0_0_10px_rgba(179,159,254,0.4)]'
            }`} />
          </div>

          {/* Progress indicator dot */}
          {animatedProgress > 0 && (
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-700 ease-out ${
                isPurpleStep
                  ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] border-2 border-white/50'
                  : 'bg-gradient-to-r from-[#B39FFE] to-[#725EBD] shadow-[0_0_15px_rgba(179,159,254,0.6)] border-2 border-white'
              }`}
              style={{ left: `calc(${animatedProgress}% - 8px)` }}
            >
              {/* Dot pulse animation */}
              <div className={`absolute inset-0 rounded-full animate-ping ${
                isPurpleStep ? 'bg-white/50' : 'bg-[#B39FFE]/50'
              }`} />
            </div>
          )}
        </div>

        {/* Step milestones */}
        <div className="flex justify-between mt-2">
          {Array.from({ length: Math.min(totalSteps, 5) }, (_, index) => {
            const stepNumber = Math.floor((index * totalSteps) / 4) + 1;
            const isCompleted = currentStep >= stepNumber;
            const isCurrent = currentStep === stepNumber;

            return (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isCompleted
                    ? isPurpleStep
                      ? 'bg-white/80 shadow-sm'
                      : 'bg-[#B39FFE] shadow-sm'
                    : isPurpleStep
                      ? 'bg-white/20'
                      : 'bg-[#E5E5E5]'
                } ${
                  isCurrent ? 'scale-125' : 'scale-100'
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
