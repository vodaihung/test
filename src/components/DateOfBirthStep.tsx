'use client';

import React, { useState } from 'react';

interface DateOfBirthStepProps {
  onNext: (dateOfBirth: string) => void;
}

const DateOfBirthStep: React.FC<DateOfBirthStepProps> = ({ onNext }) => {
  const [dateOfBirth, setDateOfBirth] = useState<string>('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    
    // Format as MM-DD-YYYY
    if (value.length >= 2) {
      value = value.substring(0, 2) + '-' + value.substring(2);
    }
    if (value.length >= 5) {
      value = value.substring(0, 5) + '-' + value.substring(5, 9);
    }
    
    setDateOfBirth(value);
  };

  const handleNext = () => {
    if (dateOfBirth && dateOfBirth.length === 10) {
      onNext(dateOfBirth);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  const isValidDate = dateOfBirth.length === 10;

  return (
    <div className="flex flex-col justify-between gap-8 w-full max-w-[327px] md:max-w-none mx-auto h-full">
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-1 gap-8">
        {/* Content Section */}
        <div className="flex flex-col w-full gap-6">
          {/* Title and Description */}
          <div className="flex flex-col w-full gap-3">
            <h1 className="text-[#282828] font-medium text-2xl md:text-[32px] leading-[1.17] md:leading-[1.125] tracking-[-0.03em] font-syne">
              Provide your date of birth.
            </h1>
            <p className="text-[#676767] font-normal text-sm md:text-base leading-[1.14] md:leading-[1.25] font-overused">
              Medication turbocharges your metabolism and erases all the all the difficulties of losing weight.
            </p>
          </div>

          {/* Date Input */}
          <div className="flex flex-col w-full gap-3">
            <div className="relative">
              <input
                type="text"
                value={dateOfBirth}
                onChange={handleDateChange}
                onKeyPress={handleKeyPress}
                placeholder="MM-DD-YYYY"
                maxLength={10}
                className="w-full p-3 md:p-4 rounded-xl border border-[#28282826] bg-white text-[#282828] font-overused text-base leading-[1.25] placeholder:text-[#282828] placeholder:opacity-50 focus:outline-none focus:border-[#B39FFE] focus:ring-1 focus:ring-[#B39FFE] transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex flex-col w-full">
        <button
          onClick={handleNext}
          disabled={!isValidDate}
          className={`w-full py-3 md:py-4 px-6 rounded-full font-medium text-base transition-all duration-200 flex items-center justify-center gap-2 ${
            isValidDate
              ? 'bg-gradient-to-b from-[#B39FFE] to-[#725EBD] text-white hover:shadow-lg active:scale-[0.98] border border-white/12'
              : 'bg-[#E5E5E5] text-[#A0A0A0] cursor-not-allowed'
          }`}
        >
          <span className="font-overused">Next</span>
          {isValidDate && (
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

export default DateOfBirthStep;
