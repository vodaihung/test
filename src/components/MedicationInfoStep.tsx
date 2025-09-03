'use client';

import Image from 'next/image';

interface MedicationInfoStepProps {
  onNext?: () => void;
}

export default function MedicationInfoStep({ onNext }: MedicationInfoStepProps) {
  const handleNextClick = () => {
    if (onNext) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full max-w-[327px] md:max-w-none mx-auto">
      {/* Statistics Section */}
      <div className="flex flex-col gap-3">
        <h1 className="text-white font-medium text-[64px] leading-[72px] font-syne">
          80%
        </h1>
        <p className="text-white font-medium text-3xl leading-[28px] tracking-[-0.03em] font-syne">
          <span className="text-white/60">of people say weight loss</span><br/>
          <span className="text-white/60">medication is</span> more effective<br/>
          than anything else they&apos;ve ever<br/>
          tried.
        </p>
      </div>

      {/* Product Card */}
      <div className="bg-[#FFFFFF26] rounded-3xl p-4 relative overflow-hidden min-h-[200px] md:min-h-[240px]">
        {/* Background image */}
        <div className="absolute inset-0 rounded-3xl" style={{bottom: 0}}>
          <Image
            src="/images/Subtract.png"
            alt=""
            fill
            className="object-contain rounded-3xl"
            style={{objectPosition: 'bottom'}}
            priority
          />
        </div>

        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-5 rounded-3xl"></div>

        {/* Product content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Title at top */}
          <h3 className="text-white text-2xl leading-[1.17] tracking-[-0.02em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            GLP-1 injections
          </h3>

          {/* Centered Medication Vial Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-48 h-56 md:w-56 md:h-64">
              <Image
                src="/images/medication-vial-mobile-5cbbff.png"
                alt="GLP-1 Medication Vial"
                fill
                className="object-contain "
                priority
              />
            </div>
          </div>

          {/* Tag at bottom */}
          <div className="flex justify-start">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#B39FFE] to-[#725EBD]"></div>
              <span className="text-[#282828] text-sm leading-[1.14] tracking-[-0.03em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Weight loss
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-white/50 md:text-white/70 text-xs md:text-base leading-[1.17] md:leading-[1.25]" style={{ fontFamily: 'Inter, sans-serif' }}>
        Medication turbocharges your metabolism and erases all the all the difficulties of losing weight.
      </p>

      {/* Next Button */}
      <button
        onClick={handleNextClick}
        className="flex items-center justify-center gap-2.5 bg-white border border-white/12 md:border-white/12 rounded-3xl py-3 px-4 transition-all duration-200 hover:bg-white/95"
      >
        <span className="text-[#282828] font-medium text-base leading-4 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
          Next
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M6 12L10 8L6 4"
            stroke="#282828"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
