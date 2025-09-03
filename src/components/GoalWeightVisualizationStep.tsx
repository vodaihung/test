'use client';

import React, { useEffect, useState } from 'react';
import WeightProgressChart from './WeightProgressChart';


interface GoalWeightVisualizationStepProps {
  goalWeight: string;
  currentWeight?: string;
  onNext: () => void;
}

const GoalWeightVisualizationStep: React.FC<GoalWeightVisualizationStepProps> = ({
  goalWeight,
  currentWeight = "250",
  onNext
}) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-between gap-8 w-full max-w-[327px] md:max-w-[480px] mx-auto h-full">


      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-1 gap-8">
        {/* Content Section */}
        <div className="flex flex-col w-full gap-6">
          {/* Goal Weight Display */}
          <div className="flex flex-col justify-center items-center w-full gap-3">
            <h1 className="text-white font-syne font-medium text-[80px] leading-[88px] tracking-[-0.02em] text-center [font-variant-numeric:proportional-nums_lining-nums]">
              {goalWeight} <span className="text-white/70 font-['Playfair_Display'] font-normal italic text-[60px] leading-[88px] tracking-[-0.02em] text-center align-super">lbs</span>
            </h1>
            <h2 className="text-white font-medium text-[32px] leading-[1.125] tracking-[-0.03em] font-syne text-center w-full">
              is achievable with Novi
            </h2>
          </div>


          {/* Modern Recharts Chart Container */}
          <div className="relative w-full h-[250px] md:h-[367px] rounded-[24px] md:rounded-[35px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.075)_0%,rgba(255,255,255,0.024)_100%)] border border-[#FFFFFF1A] backdrop-blur-sm">

            {/* Weight Progress Chart */}
            <WeightProgressChart
              currentWeight={currentWeight}
              goalWeight={goalWeight}
              isAnimated={isAnimated}
            />

          </div>

          {/* Description */}
          <div className="flex flex-col w-full">
            <p className="text-white/70 font-overused text-xs md:text-base leading-[1.17] md:leading-[1.25] text-center">
              Novi&apos;s prescription program is scientifically proven to help you reach your goal weight 58.5% faster.
            </p>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex flex-col w-full">
        <button
          onClick={onNext}
          className="w-full py-3 md:py-4 px-6 rounded-full font-medium text-base transition-all duration-200 flex items-center justify-center gap-2 bg-white text-[#282828] hover:bg-white/90 active:scale-[0.98] border border-white/12"
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

export default GoalWeightVisualizationStep;
