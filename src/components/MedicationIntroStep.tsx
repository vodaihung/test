'use client';

import React from 'react';

interface MedicationIntroStepProps {
  onNext: () => void;
}

const MedicationIntroStep: React.FC<MedicationIntroStepProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col justify-between gap-8 w-full max-w-[375px] md:max-w-full mx-auto h-full p-8 md:p-0">
      
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-1 gap-8">
     
          
          {/* Main Text Content */}
          <div className="flex flex-col justify-center items-center w-full gap-3">
            <div className="flex flex-col w-full gap-3">
              <h1 className="text-white font-syne font-medium text-[32px] leading-[36px] tracking-[-0.03em] text-left">
                Now, let&apos;s find the right medication that will help you lose weight and feel amazing!
              </h1>
              <p className="text-white/70 font-normal text-sm md:text-base leading-[1.143] md:leading-[1.25] font-overused text-left">
                Don&apos;t worry if you&apos;re unsure about how to answer a question. We&apos;ll go over everything with you.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center w-full">
          <img
            src="/images/medication-star.png"
            alt="Medication star illustration"
            className="w-auto h-[400px] opacity-100"
          />
        </div>
      
      {/* Next Button */}
      <div className="flex flex-col w-full">
        <button
          onClick={onNext}
          className="w-full py-3 px-4 rounded-[24px] font-medium text-base transition-all duration-200 flex items-center justify-center gap-2.5 bg-white text-[#282828] hover:bg-white/90 active:scale-[0.98] border border-white/12"
        >
          <span className="font-overused">Next</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MedicationIntroStep;
