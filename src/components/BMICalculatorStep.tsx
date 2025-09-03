'use client';

import React, { useState, useEffect } from 'react';

interface BMICalculatorStepProps {
  onNext: (bmiData: { feet: string; inches: string; weight: string; bmi: number; category: string }) => void;
}

interface BMICategory {
  name: string;
  range: string;
  color: string;
  description: string;
  min: number;
  max: number;
}

const BMICalculatorStep: React.FC<BMICalculatorStepProps> = ({ onNext }) => {
  const [feet, setFeet] = useState<string>('');
  const [inches, setInches] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<BMICategory | null>(null);

  const bmiCategories: BMICategory[] = [
    { name: 'Underweight', range: '< 18.5', color: '#816DCC', description: 'Your BMI falls in the underweight range. Consider reaching out to your healthcare provider for advice.', min: 0, max: 18.4 },
    { name: 'Normal weight', range: '18.5 - 24.9', color: '#4CAF50', description: 'Your BMI falls in the normal weight range. This is considered healthy.', min: 18.5, max: 24.9 },
    { name: 'Overweight', range: '25 - 29.9', color: '#FF9800', description: 'Your BMI falls in the overweight range. Consider lifestyle changes for better health.', min: 25, max: 29.9 },
    { name: 'Obese', range: '≥ 30', color: '#F44336', description: 'Your BMI falls in the obese range. Consider consulting with your healthcare provider.', min: 30, max: 100 }
  ];

  const calculateBMI = () => {
    const feetNum = parseFloat(feet);
    const inchesNum = parseFloat(inches);
    const weightNum = parseFloat(weight);

    if (feetNum && weightNum && inchesNum >= 0) {
      // Convert height to total inches
      const totalInches = (feetNum * 12) + inchesNum;
      // BMI formula: (weight in pounds / (height in inches)²) × 703
      const calculatedBMI = (weightNum / (totalInches * totalInches)) * 703;
      const roundedBMI = Math.round(calculatedBMI * 10) / 10;
      
      setBmi(roundedBMI);
      
      // Determine category
      const bmiCategory = bmiCategories.find(cat => roundedBMI >= cat.min && roundedBMI <= cat.max);
      setCategory(bmiCategory || bmiCategories[3]); // Default to obese if over 100
    } else {
      setBmi(null);
      setCategory(null);
    }
  };

  useEffect(() => {
    calculateBMI();
  }, [feet, inches, weight]);

  const handleNext = () => {
    if (bmi && category) {
      onNext({
        feet,
        inches,
        weight,
        bmi,
        category: category.name
      });
    }
  };

  const isFormValid = feet && inches && weight && bmi && category;

  const getProgressForCategory = (categoryIndex: number) => {
    if (!bmi || !category) return 0;

    const currentCategoryIndex = bmiCategories.findIndex(cat => cat.name === category.name);

    if (categoryIndex < currentCategoryIndex) {
      return 100; // Fully filled for previous categories
    } else if (categoryIndex === currentCategoryIndex) {
      // Calculate progress within current category
      const cat = bmiCategories[categoryIndex];
      const progress = Math.min(((bmi - cat.min) / (cat.max - cat.min)) * 100, 100);
      return Math.max(progress, 10); // Minimum 10% to show some progress
    } else {
      return 0; // No progress for future categories
    }
  };

  return (
    <div className="flex flex-col justify-between gap-8 w-full max-w-[327px] md:max-w-none mx-auto h-full">
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-1 gap-8">
        {/* Content Section */}
        <div className="flex flex-col w-full gap-6">
          {/* Title and Description */}
          <div className="flex flex-col w-full gap-3">
            <h1 className="text-[#282828] font-medium text-2xl md:text-[32px] leading-[1.17] md:leading-[1.125] tracking-[-0.03em] font-syne">
              Let&apos;s calculate your BMI.
            </h1>
            <p className="text-[#676767] font-normal text-sm md:text-base leading-[1.14] md:leading-[1.25] font-overused">
              Body Mass Index (BMI) helps determine eligibility for weight loss medication and assess weight-related health risks.
            </p>
          </div>

          {/* Input Fields */}
          <div className="flex flex-col w-full gap-3">
            {/* Height Inputs */}
            <div className="flex flex-row gap-3">
              <input
                type="number"
                value={feet}
                onChange={(e) => setFeet(e.target.value)}
                placeholder="Height (feet)"
                min="0"
                max="8"
                className="flex-1 p-3 md:p-4 rounded-xl border border-[#28282826] bg-white text-[#282828] font-overused text-base leading-[1.25] placeholder:text-[#282828] placeholder:opacity-50 focus:outline-none focus:border-[#B39FFE] focus:ring-1 focus:ring-[#B39FFE] transition-all duration-200"
              />
              <input
                type="number"
                value={inches}
                onChange={(e) => setInches(e.target.value)}
                placeholder="Height (inches)"
                min="0"
                max="11"
                className="flex-1 p-3 md:p-4 rounded-xl border border-[#28282826] bg-white text-[#282828] font-overused text-base leading-[1.25] placeholder:text-[#282828] placeholder:opacity-50 focus:outline-none focus:border-[#B39FFE] focus:ring-1 focus:ring-[#B39FFE] transition-all duration-200"
              />
            </div>
            
            {/* Weight Input */}
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight (lbs)"
              min="0"
              max="1000"
              className="w-full p-3 md:p-4 rounded-xl border border-[#28282826] bg-white text-[#282828] font-overused text-base leading-[1.25] placeholder:text-[#282828] placeholder:opacity-50 focus:outline-none focus:border-[#B39FFE] focus:ring-1 focus:ring-[#B39FFE] transition-all duration-200"
            />
          </div>

          {/* BMI Result Card - Always Visible */}
          <div className="flex flex-col w-full gap-0 rounded-2xl overflow-hidden bg-white shadow-sm">
            {/* Top Section - Purple Gradient */}
            <div className="bg-gradient-to-b from-[#B39FFE] to-[#725EBD] p-3 md:p-4">
              {/* BMI Display */}
              <div className="flex flex-row justify-between items-center mb-4">
                <span className="text-white font-overused text-xs leading-[1.17]">Your BMI</span>
                <span className="text-white font-overused text-2xl leading-[1]">
                  {bmi ? bmi : '--'}
                </span>
              </div>

              {/* Progress Bar with Diagonal Stripes */}
              <div className="flex flex-row gap-1">
                {bmiCategories.map((cat, index) => {
                  const progressWidth = getProgressForCategory(index);

                  return (
                    <div
                      key={cat.name}
                      className={`flex-1 h-6 relative overflow-hidden ${index === 0 ? 'rounded-l-md' : index === bmiCategories.length - 1 ? 'rounded-r-md' : ''}`}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      {/* Solid progress fill */}
                      <div
                        className="absolute top-0 left-0 h-full bg-white transition-all duration-700 ease-out"
                        style={{
                          width: `${progressWidth}%`
                        }}
                      />

                      {/* Diagonal stripes overlay for unfilled areas */}
                      <div
                        className="absolute top-0 h-full opacity-40 transition-all duration-700 ease-out"
                        style={{
                          left: `${progressWidth}%`,
                          width: `${100 - progressWidth}%`,
                          backgroundImage: `repeating-linear-gradient(
                            45deg,
                            rgba(255, 255, 255, 0.3) 0px,
                            rgba(255, 255, 255, 0.3) 2px,
                            transparent 2px,
                            transparent 6px
                          )`
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Section - Light Background */}
            <div className="bg-gray-50 p-3 md:p-4">
              {category ? (
                <>
                  <div className="flex flex-row justify-between items-center mb-2">
                    <span className="text-[#816DCC] font-normal text-sm leading-[1.14] tracking-[-0.02em] font-geist">{category.name}</span>
                    <span className="text-[#816DCC] opacity-50 font-normal text-sm leading-[1.14] tracking-[-0.02em] font-geist">{category.range}</span>
                  </div>
                  <p className="text-[#7763C2] opacity-70 font-overused text-xs leading-[1.17]">
                    {category.description}
                  </p>
                </>
              ) : (
                <>
                  <div className="flex flex-row justify-between items-center mb-2">
                    <span className="text-[#816DCC] font-normal text-sm leading-[1.14] tracking-[-0.02em] font-geist">Enter your measurements</span>
                    <span className="text-[#816DCC] opacity-50 font-normal text-sm leading-[1.14] tracking-[-0.02em] font-geist">--</span>
                  </div>
                  <p className="text-[#7763C2] opacity-70 font-overused text-xs leading-[1.17]">
                    Fill in your height and weight above to calculate your BMI.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex flex-col w-full">
        <button
          onClick={handleNext}
          disabled={!isFormValid}
          className={`w-full py-3 md:py-4 px-6 rounded-full font-medium text-base transition-all duration-200 flex items-center justify-center gap-2 ${
            isFormValid
              ? 'bg-gradient-to-b from-[#B39FFE] to-[#725EBD] text-white hover:shadow-lg active:scale-[0.98] border border-white/12'
              : 'bg-[#E5E5E5] text-[#A0A0A0] cursor-not-allowed'
          }`}
        >
          <span className="font-overused">Next</span>
          {isFormValid && (
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

export default BMICalculatorStep;
