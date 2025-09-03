'use client';

import { useState } from 'react';
import SingleChoice from './SingleChoice';

interface WeightLossExperienceStepProps {
  onNext?: (selectedOption: string) => void;
}

export default function WeightLossExperienceStep({ onNext }: WeightLossExperienceStepProps) {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const options = [
    'No',
    'Yes'
  ];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    // Auto-advance or call onNext if provided
    if (onNext) {
      setTimeout(() => onNext(option), 200); // Small delay for visual feedback
    }
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full max-w-[327px] md:max-w-none mx-auto">
      {/* Question */}
      <h1 className="text-[#282828] font-medium text-2xl md:text-[32px] leading-[1.17] md:leading-[1.125] tracking-[-0.03em]" style={{ fontFamily: 'Syne, sans-serif' }}>
        Have you tried{' '}
        <br className="md:hidden" />
        losing weight before?
      </h1>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <SingleChoice
            key={index}
            text={option}
            isSelected={selectedOption === option}
            onClick={() => handleOptionSelect(option)}
          />
        ))}
      </div>
    </div>
  );
}
