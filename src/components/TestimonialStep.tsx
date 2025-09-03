'use client';

import React from 'react';

interface TestimonialStepProps {
  onNext: () => void;
}

const TestimonialStep: React.FC<TestimonialStepProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col justify-between gap-8 w-full max-w-[375px] mx-auto h-full overflow-hidden md:overflow-visible">

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-1 gap-8">

        {/* Main Text */}
        <p className="text-white font-syne font-medium text-[32px] leading-[36px] tracking-[-0.03em] text-center">
          More than 500,000 people <span className="text-white/60">have achieved incredible, life-changing results with our program.</span>
        </p>

        {/* Testimonial Cards Section */}
        <div className="flex flex-col justify-center items-center w-full">

          {/* Cards Row */}
          <div className="flex justify-center items-center w-full gap-3 md:gap-3">

            {/* Card 1 */}
            <div className="flex flex-col items-center" style={{ gap: '-12px' }}>
              <div className="w-[160px] md:w-[153px] h-[260px] md:h-[249px] rounded-[12px] md:rounded-[11.5px] bg-cover bg-center"
                style={{ backgroundImage: 'url("/testimonial-1.jpg")' }}>
              </div>
              <div className="flex items-center justify-center gap-0.5 md:gap-[1.9px] px-2 py-1.5 md:px-[7.7px] md:py-[5.7px] bg-white backdrop-blur-[4px] md:backdrop-blur-[3.8px] rounded-[14px] md:rounded-[13.4px]">
                <div className="w-3 h-3 md:w-[11.5px] md:h-[11.5px] flex items-center justify-center">
                  <svg width="7" height="1" viewBox="0 0 7 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="7" height="1" fill="url(#gradient1)" />
                  </svg>
                </div>
                <span className="text-[10px] md:text-[9.6px] font-medium font-overused leading-[1.2] bg-gradient-to-b from-[#B39FFE] to-[#725EBD] bg-clip-text text-transparent">
                  51 lbs
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center" style={{ gap: '-12px' }}>
              <div className="w-[160px] md:w-[153px] h-[260px] md:h-[249px] rounded-[12px] md:rounded-[11.5px] bg-cover bg-center"
                style={{ backgroundImage: 'url("/testimonial-2.jpg")' }}>
              </div>
              <div className="flex items-center justify-center gap-0.5 md:gap-[1.9px] px-2 py-1.5 md:px-[7.7px] md:py-[5.7px] bg-white backdrop-blur-[4px] md:backdrop-blur-[3.8px] rounded-[14px] md:rounded-[13.4px]">
                <div className="w-3 h-3 md:w-[11.5px] md:h-[11.5px] flex items-center justify-center">
                  <svg width="7" height="1" viewBox="0 0 7 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="7" height="1" fill="url(#gradient2)" />
                  </svg>
                </div>
                <span className="text-[10px] md:text-[9.6px] font-medium font-overused leading-[1.2] bg-gradient-to-b from-[#B39FFE] to-[#725EBD] bg-clip-text text-transparent">
                  59 lbs
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center w-[157px] md:w-[154px] h-[269px] md:h-[261px]" style={{ gap: '-12px' }}>
              <div className="w-[160px] md:w-[153px] h-[260px] md:h-[249px] rounded-[12px] md:rounded-[11.5px] bg-cover bg-center"
                style={{ backgroundImage: 'url("/testimonial-3.jpg")' }}>
              </div>
              <div className="flex items-center justify-center gap-0.5 md:gap-[1.9px] px-2 py-1.5 md:px-[7.7px] md:py-[5.7px] bg-white backdrop-blur-[4px] md:backdrop-blur-[3.8px] rounded-[14px] md:rounded-[13.4px]">
                <div className="w-3 h-3 md:w-[11.5px] md:h-[11.5px] flex items-center justify-center">
                  <svg width="7" height="1" viewBox="0 0 7 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="7" height="1" fill="url(#gradient3)" />
                  </svg>
                </div>
                <span className="text-[10px] md:text-[9.6px] font-medium font-overused leading-[1.2] bg-gradient-to-b from-[#B39FFE] to-[#725EBD] bg-clip-text text-transparent">
                  62 lbs
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bars Visualization */}
          <div className="flex flex-col items-center w-full mt-4 gap-2">

            {/* First Row - Full opacity */}
            <div className="flex justify-stretch items-stretch gap-[13px] w-[355px] md:w-[355px]">
              <div className="flex-1 h-[21.7px] md:h-[20.8px] bg-gradient-to-t from-white to-transparent opacity-10 rounded-b-[13px] md:rounded-b-[12.5px]"></div>
              <div className="flex-1 h-[21.7px] md:h-[20.8px] bg-gradient-to-t from-white to-transparent opacity-10 rounded-b-[13px] md:rounded-b-[12.5px]"></div>
              <div className="flex-1 h-[21.7px] md:h-[20.8px] bg-gradient-to-t from-white to-transparent opacity-10 rounded-b-[13px] md:rounded-b-[12.5px]"></div>
            </div>

            {/* Second Row - 50% opacity */}
            <div className="flex justify-stretch items-stretch gap-[11px] w-[303px] md:w-[303px] opacity-50">
              <div className="flex-1 h-[24px] md:h-[23px] bg-gradient-to-t from-white to-transparent opacity-10 rounded-b-[11px] md:rounded-b-[10.7px]"></div>
              <div className="flex-1 h-[24px] md:h-[23px] bg-gradient-to-t from-white to-transparent opacity-10 rounded-b-[11px] md:rounded-b-[10.7px]"></div>
              <div className="flex-1 h-[24px] md:h-[23px] bg-gradient-to-t from-white to-transparent opacity-10 rounded-b-[11px] md:rounded-b-[10.7px]"></div>
            </div>

            {/* Third Row - 20% opacity */}
            <div className="flex justify-stretch items-stretch gap-[9px] w-[255px] md:w-[255px] opacity-20">
              <div className="flex-1 h-[20px] md:h-[19px] bg-gradient-to-t from-white to-transparent opacity-10 rounded-b-[9px] md:rounded-b-[9px]"></div>
              <div className="flex-1 h-[20px] md:h-[19px] bg-gradient-to-t from-white to-transparent opacity-10 rounded-b-[9px] md:rounded-b-[9px]"></div>
              <div className="flex-1 h-[20px] md:h-[19px] bg-gradient-to-t from-white to-transparent opacity-10 rounded-b-[9px] md:rounded-b-[9px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex flex-col w-full">
        <button
          onClick={onNext}
          className="w-full py-3 md:py-3 px-4 md:px-4 rounded-[24px] font-medium text-base transition-all duration-200 flex items-center justify-center gap-2.5 bg-white text-[#282828] hover:bg-white/90 active:scale-[0.98] border border-white/12"
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

      {/* SVG Gradients */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B39FFE" />
            <stop offset="100%" stopColor="#725EBD" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B39FFE" />
            <stop offset="100%" stopColor="#725EBD" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B39FFE" />
            <stop offset="100%" stopColor="#725EBD" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TestimonialStep;
