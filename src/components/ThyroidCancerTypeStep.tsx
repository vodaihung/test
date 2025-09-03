'use client';

import React, { useState } from 'react';

interface ThyroidCancerTypeStepProps {
  onNext: () => void;
}

const ThyroidCancerTypeStep: React.FC<ThyroidCancerTypeStepProps> = ({ onNext }) => {
  const [selectedType, setSelectedType] = useState<string>('');

  const cancerTypes = [
    'Medullary',
    'Papillary'
  ];

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  const handleNext = () => {
    if (selectedType) {
      onNext();
    }
  };

  return (
    <div className="w-full h-full">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col w-full h-full p-6 relative">
        
        {/* Main Content */}
        <div className="flex flex-col flex-1 gap-8 min-h-0">
          
            
            {/* Main Question */}
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-[#282828] font-medium text-2xl leading-[1.167] tracking-[-0.03em] font-syne text-left w-full">
                What type of thyroid cancer?
              </h1>
            </div>
          
          {/* Cancer Type Selection */}
          <div className="flex flex-col w-full gap-3">
            {cancerTypes.map((type) => (
              <div
                key={type}
                onClick={() => handleTypeSelect(type)}
                className={`flex items-center w-[327px] gap-3 px-4 py-3 rounded-[12px] cursor-pointer transition-all duration-200 ${
                  selectedType === type
                    ? 'bg-white border border-[#B39FFE] border-opacity-100'
                    : 'bg-[#F9F9F9] border border-transparent hover:border-[#282828] hover:border-opacity-10'
                }`}
              >
                {/* Radio Button */}
                <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 ${
                  selectedType === type
                    ? 'bg-white'
                    : 'bg-white opacity-0'
                }`}>
                  {selectedType === type && (
                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L12 1" stroke="url(#gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#B39FFE"/>
                          <stop offset="100%" stopColor="#725EBD"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </div>
                
                {/* Type Text */}
                <span className={`font-overused text-base leading-[1.25] transition-all duration-200 ${
                  selectedType === type
                    ? 'text-[#282828] font-medium'
                    : 'text-[#282828] font-normal'
                }`}>
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Next Button */}
        <div className="flex flex-col w-full mt-auto pt-8">
          <button
            onClick={handleNext}
            disabled={!selectedType}
            className={`w-full py-3 px-4 rounded-[24px] font-medium text-base transition-all duration-200 flex items-center justify-center gap-2.5 border border-white/12 ${
              selectedType
                ? 'bg-gradient-to-b from-[#B39FFE] to-[#725EBD] text-white hover:opacity-90 active:scale-[0.98]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
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

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col w-full h-full p-8 max-w-[1440px] mx-auto relative">
        
        {/* Main Content */}
        <div className="flex flex-col flex-1 gap-8 min-h-0">
          
  
            
            {/* Main Question */}
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-[#282828] font-medium text-[32px] leading-[1.125] tracking-[-0.03em] font-syne text-left w-full">
                What type of thyroid cancer?
              </h1>
            </div>
          
          {/* Cancer Type Selection */}
          <div className="flex flex-col w-full gap-3">
            {cancerTypes.map((type) => (
              <div
                key={type}
                onClick={() => handleTypeSelect(type)}
                className={`flex items-center w-full gap-3 px-4 py-3 rounded-[12px] cursor-pointer transition-all duration-200 ${
                  selectedType === type
                    ? 'bg-white border border-[#B39FFE] border-opacity-100'
                    : 'bg-[#F9F9F9] border border-transparent hover:border-[#282828] hover:border-opacity-10'
                }`}
              >
                {/* Radio Button */}
                <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 ${
                  selectedType === type
                    ? 'bg-white'
                    : 'bg-white opacity-0'
                }`}>
                  {selectedType === type && (
                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L12 1" stroke="url(#gradient-desktop)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="gradient-desktop" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#B39FFE"/>
                          <stop offset="100%" stopColor="#725EBD"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </div>
                
                {/* Type Text */}
                <span className={`font-overused text-base leading-[1.25] transition-all duration-200 ${
                  selectedType === type
                    ? 'text-[#282828] font-medium'
                    : 'text-[#282828] font-normal'
                }`}>
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Next Button */}
        <div className="flex flex-col w-full mt-auto pt-8">
          <button
            onClick={handleNext}
            disabled={!selectedType}
            className={`w-full py-3 px-4 rounded-[24px] font-medium text-base transition-all duration-200 flex items-center justify-center gap-2.5 border border-white/12 ${
              selectedType
                ? 'bg-[#282828] text-white hover:opacity-90 active:scale-[0.98]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
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
    </div>
  );
};

export default ThyroidCancerTypeStep;
