'use client';

import React, { useState } from 'react';

interface GoalWeightStepProps {
  onNext: (goalWeight: string) => void;
}

const GoalWeightStep: React.FC<GoalWeightStepProps> = ({ onNext }) => {
  const [goalWeight, setGoalWeight] = useState<string>('');

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setGoalWeight(value);
    }
  };

  const handleNext = () => {
    if (goalWeight && parseFloat(goalWeight) > 0) {
      onNext(goalWeight);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  const isValidWeight = goalWeight && parseFloat(goalWeight) > 0 && parseFloat(goalWeight) <= 1000;

  return (
    <div className="flex flex-col justify-between gap-8 w-full max-w-[327px] md:max-w-none mx-auto h-full">
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-1 gap-8">
        {/* Content Section */}
        <div className="flex flex-col w-full gap-6">
          {/* Title */}
          <div className="flex flex-col w-full">
            <h1 className="text-[#282828] font-medium text-2xl md:text-[32px] leading-[1.17] md:leading-[1.125] tracking-[-0.03em] font-syne">
              What is your goal weight?
            </h1>
          </div>

          {/* Weight Input */}
          <div className="flex flex-col w-full gap-3">
            <div className="relative">
              <input
                type="text"
                inputMode="decimal"
                value={goalWeight}
                onChange={handleWeightChange}
                onKeyPress={handleKeyPress}
                placeholder="Ideal goal weight (in lbs)"
                className="w-full p-3 md:p-4 rounded-xl border border-[#28282826] bg-white text-[#282828] font-overused text-base leading-[1.25] placeholder:text-[#282828] placeholder:opacity-50 focus:outline-none focus:border-[#B39FFE] focus:ring-1 focus:ring-[#B39FFE] transition-all duration-200"
              />
            </div>
            
            {/* Validation message */}
            {goalWeight && !isValidWeight && (
              <p className="text-red-500 text-sm font-overused">
                Please enter a valid weight between 1 and 1000 lbs.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex flex-col w-full">
        <button
          onClick={handleNext}
          disabled={!isValidWeight}
          className={`w-full py-3 md:py-4 px-6 rounded-full font-medium text-base transition-all duration-200 flex items-center justify-center gap-2 ${
            isValidWeight
              ? 'bg-gradient-to-b from-[#B39FFE] to-[#725EBD] text-white hover:shadow-lg active:scale-[0.98] border border-white/12'
              : 'bg-[#E5E5E5] text-[#A0A0A0] cursor-not-allowed'
          }`}
        >
          <span className="font-overused">Next</span>
          {isValidWeight && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default GoalWeightStep;
