interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  // Based on Figma designs, different steps show different progress widths
  // On mobile (327px container), this translates to specific pixel widths
  const getProgressWidth = () => {
    if (currentStep === 1) return '27px'; // Goals step
    if (currentStep === 2) return '36px'; // Experience step
    if (currentStep === 3) return '47px'; // History step (conditional)
    if (currentStep === 4) return '51px'; // Challenges step
    if (currentStep === 5) return '60px'; // Medication info step (final)
    return `${Math.max(progressPercentage, 8)}%`; // Fallback
  };

  return (
    <div className="w-full max-w-[327px] md:max-w-none">
      {/* Progress track */}
      <div className="w-full h-[1px] bg-[#282828] opacity-10 relative">
        {/* Progress fill */}
        <div
          className="h-[3px] bg-gradient-to-r from-[#B39FFE] to-[#725EBD] absolute top-0 left-0 transition-all duration-500 ease-in-out rounded-full"
          style={{ width: getProgressWidth() }}
        />
      </div>
    </div>
  );
}
