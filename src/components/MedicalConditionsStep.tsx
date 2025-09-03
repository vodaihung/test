'use client';

import React, { useState } from 'react';

interface MedicalConditionsStepProps {
  onNext: () => void;
}

const MedicalConditionsStep: React.FC<MedicalConditionsStepProps> = ({ onNext }) => {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const medicalConditions = [
    'None',
    'Currently pregnant',
    'Planning to get pregnant in the next 3 months',
    'Breastfeeding',
    'End-stage liver disease',
    'End-stage kidney disease',
    'Anorexia/bulimia',
    'Suicidal thoughts',
    'Thyroid cancer',
    'Organ transplants',
    'Pancreatitis',
    'Cardiovascular Disease',
    'Type 1 diabetes',
    'Currently on insulin',
    'Diabetic retinopathy',
    'Thyroid cyst',
    'Severe gastrointestinal condition',
    'Fasting triglyceride level above 500'
  ];

  const handleConditionToggle = (condition: string) => {
    if (condition === 'None') {
      setSelectedConditions(selectedConditions.includes('None') ? [] : ['None']);
    } else {
      const updatedConditions = selectedConditions.filter(c => c !== 'None');
      if (selectedConditions.includes(condition)) {
        setSelectedConditions(updatedConditions.filter(c => c !== condition));
      } else {
        setSelectedConditions([...updatedConditions, condition]);
      }
    }
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="w-full h-full">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col w-full h-full p-2 relative">

        {/* Main Content */}
        <div className="flex flex-col flex-1 gap-6 min-h-0">

          {/* Main Question and Subtitle */}
          <div className="flex flex-col justify-center items-center w-full gap-3">
            <div className="flex flex-col w-full gap-3">
              <h1 className="text-[#282828] font-medium text-2xl leading-[1.167] tracking-[-0.03em] font-syne text-left">
                Do any of the following apply to you?
              </h1>
              <p className="text-[#676767] font-normal text-sm leading-[1.143] font-overused text-left">
                Any of these complications may disqualify you from weight loss medication approval. Check all that apply.
              </p>
            </div>
          </div>

          {/* Medical Conditions Selection - Scrollable */}
          <div className="flex flex-col w-full gap-3 max-h-[350px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {medicalConditions.map((condition) => (
              <div
                key={condition}
                onClick={() => handleConditionToggle(condition)}
                className={`flex items-center w-[327px] gap-3 px-3 py-3 rounded-[12px] cursor-pointer transition-all duration-200 ${selectedConditions.includes(condition)
                    ? 'bg-white border border-[#B39FFE] border-opacity-100'
                    : 'bg-[#F9F9F9] border border-transparent hover:border-[#282828] hover:border-opacity-10'
                  }`}
              >
                {/* Checkbox */}
                <div className={`w-5 h-5 rounded-[4px] flex items-center justify-center transition-all duration-200 ${selectedConditions.includes(condition)
                    ? 'bg-gradient-to-b from-[#B39FFE] to-[#725EBD]'
                    : 'border border-[#282828] border-opacity-20'
                  }`}>
                  {selectedConditions.includes(condition) && (
                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L12 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>

                {/* Condition Text */}
                <span className={`font-overused text-base leading-[1.25] transition-all duration-200 ${selectedConditions.includes(condition)
                    ? 'text-[#282828] font-medium'
                    : 'text-[#282828] font-normal'
                  }`}>
                  {condition}
                </span>
              </div>
            ))}
          </div>
        </div>


        {/* Next Button */}
        <div className="flex flex-col w-full mt-auto pt-8">
          <button
            onClick={handleNext}
            className="w-full py-3 px-4 rounded-[24px] font-medium text-base transition-all duration-200 flex items-center justify-center gap-2.5 bg-gradient-to-b from-[#B39FFE] to-[#725EBD] text-white hover:opacity-90 active:scale-[0.98] border border-white/12"
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
      <div className="hidden md:flex flex-col w-full h-full  max-w-[1440px] mx-auto relative">

        {/* Main Content */}
        <div className="flex flex-col flex-1 gap-8 min-h-0">

          {/* Main Question and Subtitle */}
          <div className="flex flex-col justify-center items-center w-full gap-6">
            <div className="flex flex-col w-full gap-6">
              <h1 className="text-[#282828] font-medium text-[32px] leading-[1.125] tracking-[-0.03em] font-syne text-left">
                Do any of the following apply to you?
              </h1>
              <p className="text-[#676767] font-normal text-base leading-[1.25] font-overused text-left opacity-70">
                Any of these complications may disqualify you from weight loss medication approval. Check all that apply.
              </p>
            </div>
          </div>

          {/* Medical Conditions Selection - Scrollable */}
          <div className="flex flex-col w-full gap-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {medicalConditions.map((condition) => (
              <div
                key={condition}
                onClick={() => handleConditionToggle(condition)}
                className={`flex items-center w-full gap-3 px-3 py-3 rounded-[12px] cursor-pointer transition-all duration-200 ${selectedConditions.includes(condition)
                    ? 'bg-white border border-[#B39FFE] border-opacity-100'
                    : 'bg-[#F9F9F9] border border-transparent hover:border-[#282828] hover:border-opacity-10'
                  }`}
              >
                {/* Checkbox */}
                <div className={`w-5 h-5 rounded-[4px] flex items-center justify-center transition-all duration-200 ${selectedConditions.includes(condition)
                    ? 'bg-gradient-to-b from-[#B39FFE] to-[#725EBD]'
                    : 'border border-[#282828] border-opacity-20'
                  }`}>
                  {selectedConditions.includes(condition) && (
                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L12 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>

                {/* Condition Text */}
                <span className={`font-overused text-base leading-[1.25] transition-all duration-200 ${selectedConditions.includes(condition)
                    ? 'text-[#282828] font-medium'
                    : 'text-[#282828] font-normal'
                  }`}>
                  {condition}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <div className="flex flex-col w-full mt-auto pt-8">
          <button
            onClick={handleNext}
            className="w-full py-3 px-4 rounded-[24px] font-medium text-base transition-all duration-200 flex items-center justify-center gap-2.5 bg-[#282828] text-white hover:opacity-90 active:scale-[0.98] border border-white/12"
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

export default MedicalConditionsStep;