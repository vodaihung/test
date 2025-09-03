'use client';

import React, { useState } from 'react';

interface StateSelectionStepProps {
  onNext: () => void;
}

const StateSelectionStep: React.FC<StateSelectionStepProps> = ({ onNext }) => {
  const [selectedState, setSelectedState] = useState<string>('');

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
  };

  const handleNext = () => {
    if (selectedState) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col justify-between gap-8 w-full max-w-[375px] md:max-w-[480px] mx-auto h-full p-8 md:p-12">
      
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-1 gap-8">
        
        {/* Progress Section */}
        <div className="flex flex-col justify-center items-center w-full gap-8">

        
          
          {/* Main Question */}
          <div className="flex flex-col justify-center items-center w-full gap-6">
            <h1 className="text-[#282828] font-medium text-2xl md:text-[32px] leading-[1.167] md:leading-[1.125] tracking-[-0.03em] font-syne text-left w-full">
              What state do you live in?
            </h1>
            
            {/* State Selection */}
            <div className="relative w-full">
              <select
                value={selectedState}
                onChange={(e) => handleStateSelect(e.target.value)}
                className="w-full px-4 py-3 rounded-[12px] border border-[#282828] border-opacity-20 bg-white hover:border-opacity-40 text-[#282828] font-medium text-base leading-[1.31] font-overused cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B39FFE] focus:border-transparent appearance-none"
              >
                <option value="" disabled>Select a state</option>
                {states.map((state) => (
                  <option key={state} value={state} className="py-2 bg-white">
                    {state}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Next Button */}
      <div className="flex flex-col w-full">
        <button
          onClick={handleNext}
          disabled={!selectedState}
          className={`w-full py-3 px-4 rounded-[24px] font-medium text-base transition-all duration-200 flex items-center justify-center gap-2.5 border border-white/12 ${
            selectedState
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
  );
};

export default StateSelectionStep;
