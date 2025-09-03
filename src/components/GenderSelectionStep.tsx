'use client';

import React, { useState } from 'react';

interface GenderSelectionStepProps {
  onNext: (selectedGender: string) => void;
}

const GenderSelectionStep: React.FC<GenderSelectionStepProps> = ({ onNext }) => {
  const [selectedGender, setSelectedGender] = useState<string>('');

  const genderOptions = [
    { id: 'female', label: 'Female' },
    { id: 'male', label: 'Male' },
    { id: 'prefer-not-to-answer', label: 'I prefer not to answer' }
  ];

  const handleGenderSelect = (genderId: string) => {
    setSelectedGender(genderId);
    // Automatically proceed to next step after a short delay
    setTimeout(() => {
      onNext(genderId);
    }, 300);
  };

  return (
    <div className="flex flex-col justify-between gap-8 w-full max-w-[327px] md:max-w-none mx-auto h-full">
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-1 gap-8">
        {/* Question and Options */}
        <div className="flex flex-col w-full gap-6">
          <h1 className="text-[#282828] font-medium text-2xl md:text-[32px] leading-[1.17] md:leading-[1.125] tracking-[-0.03em] font-syne">
            What sex were you assigned at birth?
          </h1>

          {/* Gender Options */}
          <div className="flex flex-col w-full gap-3">
            {genderOptions.map((option) => (
              <div
                key={option.id}
                className={`relative rounded-xl transition-all duration-200 w-full md:w-auto ${
                  selectedGender === option.id ? 'p-[1.5px]' : ''
                }`}
                style={{
                  background: selectedGender === option.id
                    ? 'linear-gradient(180deg, #B39FFE 0%, #725EBD 100%)'
                    : 'transparent'
                }}
              >
                <button
                  onClick={() => handleGenderSelect(option.id)}
                  className={`flex flex-row items-center gap-3 p-3 md:p-4 rounded-xl transition-all duration-200 w-full ${
                    selectedGender === option.id
                      ? 'bg-white shadow-sm'
                      : 'bg-[#F9F9F9] hover:bg-[#F0F0F0]'
                  }`}
                >
                  <span className={`text-[#282828] text-base leading-[1.25] font-overused ${
                    selectedGender === option.id ? 'font-medium' : 'font-normal'
                  }`}>
                    {option.label}
                  </span>

                  {/* Check Icon */}
                  <div className="ml-auto w-5 h-5 flex items-center justify-center">
                    {selectedGender === option.id ? (
                      <svg width="13" height="9" viewBox="0 0 13 9" fill="none">
                        <path
                          d="M1 4.5L4.5 8L12 0.5"
                          stroke="url(#gradient)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#B39FFE" />
                            <stop offset="100%" stopColor="#725EBD" />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <div className="w-5 h-5"></div>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderSelectionStep;
