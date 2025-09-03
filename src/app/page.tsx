'use client';

import React, { useState } from 'react';
import { useFormStore } from '../store/formStore';
import Logo from '../components/Logo';
import ProgressBar from '../components/ProgressBar';
import BackButton from '../components/BackButton';
import WeightLossGoalsStep from '../components/WeightLossGoalsStep';
import WeightLossExperienceStep from '../components/WeightLossExperienceStep';
import WeightLossHistoryStep from '../components/WeightLossHistoryStep';
import WeightLossChallengesStep from '../components/WeightLossChallengesStep';
import MedicationInfoStep from '../components/MedicationInfoStep';
import GenderSelectionStep from '../components/GenderSelectionStep';
import DateOfBirthStep from '../components/DateOfBirthStep';
import BMICalculatorStep from '../components/BMICalculatorStep';
import GoalWeightStep from '../components/GoalWeightStep';
import GoalWeightVisualizationStep from '../components/GoalWeightVisualizationStep';
import TestimonialStep from '../components/TestimonialStep';
import StateSelectionStep from '../components/StateSelectionStep';
import MedicationIntroStep from '../components/MedicationIntroStep';
import MedicalConditionsStep from '../components/MedicalConditionsStep';


export default function Home() {
  // Zustand store
  const {
    currentStep,
    formData,
    setCurrentStep,
    navigateToStep,
    setWeightLossGoals,
    setWeightLossChallenges,
    setWeightLossHistory,
    setWeightLossExperience,
    setGender,
    setDateOfBirth,
    setBMIData,
    setGoalWeight
  } = useFormStore();

  // Local UI state
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [stepHistory, setStepHistory] = useState<number[]>([1]); // Track navigation history
  const totalSteps = 14; // 14 steps total (step 3 is conditional)

  const handleBackButton = () => {
    if (stepHistory.length > 1) {
      setIsTransitioning(true);

      setTimeout(() => {
        const newHistory = [...stepHistory];
        newHistory.pop(); // Remove current step
        const previousStep = newHistory[newHistory.length - 1];

        setStepHistory(newHistory);
        setCurrentStep(previousStep);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    }
  };

  const handleNavigateToStep = (nextStep: number) => {
    setIsTransitioning(true);

    setTimeout(() => {
      setStepHistory(prev => [...prev, nextStep]);
      navigateToStep(nextStep);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const handleWeightLossGoalsComplete = (selectedOption: string) => {
    setWeightLossGoals([selectedOption]); // Convert to array for consistency
    console.log('Weight Loss Goals completed with:', selectedOption);
    handleNavigateToStep(2);
  };

  const handleWeightLossExperienceComplete = (selectedOption: string) => {
    setWeightLossExperience(selectedOption);
    console.log('Weight Loss Experience completed with:', selectedOption);

    // Conditional logic: if "Yes", go to history step (3), if "No", go to challenges step (4)
    if (selectedOption === 'Yes') {
      handleNavigateToStep(3); // Go to weight loss history step
    } else {
      handleNavigateToStep(4); // Skip to challenges step
    }
  };

  const handleWeightLossHistoryComplete = (selectedOption: string) => {
    setWeightLossHistory(selectedOption);
    console.log('Weight Loss History completed with:', selectedOption);

    // After history, go to challenges step
    handleNavigateToStep(4);
  };

  const handleWeightLossChallengesComplete = (selectedOption: string) => {
    setWeightLossChallenges([selectedOption]); // Convert to array for consistency
    console.log('Weight Loss Challenges completed with:', selectedOption);

    // Go to medication info step
    handleNavigateToStep(5);
  };

  const handleMedicationInfoComplete = () => {
    console.log('Medication Info step completed');
    // Go to gender selection step
    handleNavigateToStep(6);
  };

  const handleGenderSelectionComplete = (selectedGender: string) => {
    setGender(selectedGender);
    console.log('Gender Selection completed with:', selectedGender);
    // Go to date of birth step
    handleNavigateToStep(7);
  };

  const handleDateOfBirthComplete = (dateOfBirth: string) => {
    // Parse MM-DD-YYYY format
    const [month, day, year] = dateOfBirth.split('-');
    setDateOfBirth(month, day, year);
    console.log('Date of Birth completed with:', dateOfBirth);
    // Go to BMI calculator step
    handleNavigateToStep(8);
  };

  const handleBMICalculatorComplete = (bmiData: { feet: string; inches: string; weight: string; bmi: number; category: string }) => {
    setBMIData(
      { feet: bmiData.feet, inches: bmiData.inches },
      bmiData.weight,
      bmiData.bmi
    );
    console.log('BMI Calculator completed with:', bmiData);
    // Go to goal weight step
    handleNavigateToStep(9);
  };

  const handleGoalWeightComplete = (goalWeight: string) => {
    setGoalWeight(goalWeight);
    console.log('Goal Weight completed with:', goalWeight);
    // Go to goal weight visualization step
    handleNavigateToStep(10);
  };

  const handleGoalWeightVisualizationComplete = () => {
    console.log('Goal Weight Visualization completed');
    // Go to testimonial step
    handleNavigateToStep(11);
  };

  const handleTestimonialComplete = () => {
    console.log('Testimonial step completed');
    // Go to state selection step
    handleNavigateToStep(12);
  };

  const handleStateSelectionComplete = () => {
    // Note: StateSelectionStep doesn't pass selected state, need to update component
    console.log('State selection step completed');
    // Go to medication intro step
    handleNavigateToStep(13);
  };

  const handleMedicationIntroComplete = () => {
    console.log('Medication intro step completed');
    // Go to medical conditions step
    handleNavigateToStep(14);
  };

  const handleMedicalConditionsComplete = () => {
    // Note: MedicalConditionsStep doesn't pass selected conditions, need to update component
    console.log('Medical conditions step completed');
    // Final step for now
  };

  // Determine background based on current step
  const getBackgroundClass = () => {
    if (currentStep === 5 || currentStep === 10 || currentStep === 11 || currentStep === 13) {
      return "min-h-screen bg-gradient-to-b from-[#B39FFE] to-[#725EBD]";
    }
    return "min-h-screen bg-white";
  };

  return (
    <div className={getBackgroundClass()}>
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col min-h-screen p-6 pb-8">
        {/* Header with Logo and Progress */}
        <div className="flex flex-col gap-8 pt-2 mb-8">
          {/* Top row with back button and logo */}
          <div className="flex items-center justify-between">
            {stepHistory.length > 1 ? (
              <BackButton onClick={handleBackButton} isWhite={currentStep === 5 || currentStep === 10 || currentStep === 11 || currentStep === 13 ? true : false} />
            ) : (
              <div className="w-10 h-10"></div> // Spacer when no back button
            )}
            <div className={currentStep === 5 || currentStep === 10 || currentStep === 11 || currentStep === 13 ? "filter brightness-0 invert" : ""}>
              <Logo />
            </div>
            <div className="w-10 h-10"></div> {/* Right spacer for balance */}
          </div>

          {/* Progress bar */}
          <div className="flex justify-center">
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          </div>
        </div>

        {/* Main Content - positioned at top */}
        <div className="px-2">
          <div className={`transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            {currentStep === 1 && <WeightLossGoalsStep onNext={handleWeightLossGoalsComplete} />}
            {currentStep === 2 && <WeightLossExperienceStep onNext={handleWeightLossExperienceComplete} />}
            {currentStep === 3 && <WeightLossHistoryStep onNext={handleWeightLossHistoryComplete} />}
            {currentStep === 4 && <WeightLossChallengesStep onNext={handleWeightLossChallengesComplete} />}
            {currentStep === 5 && <MedicationInfoStep onNext={handleMedicationInfoComplete} />}
            {currentStep === 6 && <GenderSelectionStep onNext={handleGenderSelectionComplete} />}
            {currentStep === 7 && <DateOfBirthStep onNext={handleDateOfBirthComplete} />}
            {currentStep === 8 && <BMICalculatorStep onNext={handleBMICalculatorComplete} />}
            {currentStep === 9 && <GoalWeightStep onNext={handleGoalWeightComplete} />}
            {currentStep === 10 && (
              <GoalWeightVisualizationStep
                goalWeight={formData.goalWeight || "170"}
                currentWeight={formData.bmiData.weight || "250"}
                onNext={handleGoalWeightVisualizationComplete}
              />
            )}
            {currentStep === 11 && <TestimonialStep onNext={handleTestimonialComplete} />}
            {currentStep === 12 && <StateSelectionStep onNext={handleStateSelectionComplete} />}
            {currentStep === 13 && <MedicationIntroStep onNext={handleMedicationIntroComplete} />}
            {currentStep === 14 && <MedicalConditionsStep onNext={handleMedicalConditionsComplete} />}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className={`hidden md:flex flex-col min-h-screen p-8 max-w-[1440px] mx-auto ${currentStep === 5 || currentStep === 10 || currentStep === 11 || currentStep === 13 ? 'bg-gradient-to-b from-[#B39FFE] to-[#725EBD]' : ''}`}>
        {currentStep === 5 || currentStep === 10 || currentStep === 11 || currentStep === 13 ? (
          // Steps 5 & 10: Same purple background as mobile
          <div className="flex-1 flex flex-col">
            <div className="flex flex-col px-[480px] py-8 flex-1">
              {/* Header with Logo and Progress */}
              <div className="flex flex-row justify-between items-center mb-8">
                {stepHistory.length > 1 ? (
                  <BackButton onClick={handleBackButton} isWhite={true} />
                ) : (
                  <div className="w-10 h-10"></div> // Spacer when no back button
                )}
                <div className="filter brightness-0 invert">
                  <Logo />
                </div>
                <div className="w-10 h-10"></div> {/* Right spacer for balance */}
              </div>

              <div className="mb-8">
                <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
              </div>

              {/* Main Content - positioned at top */}
              <div className="w-full flex-1">
                <div className={`transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                  {currentStep === 5 && <MedicationInfoStep onNext={handleMedicationInfoComplete} />}
                  {currentStep === 10 && (
                    <GoalWeightVisualizationStep
                      goalWeight={formData.goalWeight || "170"}
                      currentWeight={formData.bmiData.weight || "250"}
                      onNext={handleGoalWeightVisualizationComplete}
                    />
                  )}
                  {currentStep === 11 && <TestimonialStep onNext={handleTestimonialComplete} />}
                  {currentStep === 13 && <MedicationIntroStep onNext={handleMedicationIntroComplete} />}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Steps 1-4: Regular white background
          <div className="bg-white rounded-3xl flex-1 flex flex-col">
            <div className="flex flex-col px-[480px] py-8 flex-1">
              {/* Header with Logo and Progress */}
              <div className="flex flex-row justify-between items-center mb-8">
                {stepHistory.length > 1 ? (
                  <BackButton onClick={handleBackButton} isWhite={false} />
                ) : (
                  <div className="w-10 h-10"></div> // Spacer when no back button
                )}
                <Logo />
                <div className="w-10 h-10"></div> {/* Right spacer for balance */}
              </div>

              <div className="mb-8">
                <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
              </div>

              {/* Main Content - positioned at top */}
              <div className="w-full flex-1">
                <div className={`transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                  {currentStep === 1 && <WeightLossGoalsStep onNext={handleWeightLossGoalsComplete} />}
                  {currentStep === 2 && <WeightLossExperienceStep onNext={handleWeightLossExperienceComplete} />}
                  {currentStep === 3 && <WeightLossHistoryStep onNext={handleWeightLossHistoryComplete} />}
                  {currentStep === 4 && <WeightLossChallengesStep onNext={handleWeightLossChallengesComplete} />}
                  {currentStep === 6 && <GenderSelectionStep onNext={handleGenderSelectionComplete} />}
                  {currentStep === 7 && <DateOfBirthStep onNext={handleDateOfBirthComplete} />}
                  {currentStep === 8 && <BMICalculatorStep onNext={handleBMICalculatorComplete} />}
                  {currentStep === 9 && <GoalWeightStep onNext={handleGoalWeightComplete} />}
                  {currentStep === 12 && <StateSelectionStep onNext={handleStateSelectionComplete} />}
                  {currentStep === 14 && <MedicalConditionsStep onNext={handleMedicalConditionsComplete} />}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
