'use client';

import React, { useState } from 'react';
import GoalWeightVisualizationStep from './GoalWeightVisualizationStep';
import TestimonialStep from './TestimonialStep';

interface MultiStepFlowProps {
  goalWeight: string;
  currentWeight?: string;
}

const MultiStepFlow: React.FC<MultiStepFlowProps> = ({
  goalWeight,
  currentWeight = "250"
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    console.log('Next step clicked, current step:', currentStep);
    setCurrentStep(prev => {
      const nextStep = prev + 1;
      console.log('Moving to step:', nextStep);
      return nextStep;
    });
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const renderCurrentStep = () => {
    console.log('Rendering step:', currentStep);
    switch (currentStep) {
      case 1:
        return (
          <GoalWeightVisualizationStep
            goalWeight={goalWeight}
            currentWeight={currentWeight}
            onNext={handleNextStep}
          />
        );
      case 2:
        return (
          <TestimonialStep
            onNext={handleNextStep}
          />
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-2xl font-bold mb-4">Flow Complete!</h1>
            <p className="text-lg mb-6">You&apos;ve completed all steps.</p>
            <button
              onClick={() => setCurrentStep(1)}
              className="px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-white/90 transition-all"
            >
              Start Over
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Step Indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2">
            {[1, 2].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    step === currentStep
                      ? 'bg-white'
                      : step < currentStep
                      ? 'bg-white/70'
                      : 'bg-white/30'
                  }`}
                />
                {step < 2 && (
                  <div
                    className={`w-8 h-0.5 mx-2 transition-all duration-300 ${
                      step < currentStep ? 'bg-white/70' : 'bg-white/30'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="transition-all duration-500 ease-in-out">
          {renderCurrentStep()}
        </div>

        {/* Back Button (only show on step 2+) */}
        {currentStep > 1 && currentStep <= 2 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePrevStep}
              className="px-4 py-2 text-white/70 hover:text-white transition-all duration-200 flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 3L5 8L10 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-overused text-sm">Back</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepFlow;
