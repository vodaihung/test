import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Define types for all form data
export interface FormData {
  // Step 1: Weight Loss Goals
  weightLossGoals: string[];
  
  // Step 2: Weight Loss Challenges
  weightLossChallenges: string[];
  
  // Step 3: Weight Loss History (conditional)
  weightLossHistory: string;
  
  // Step 4: Weight Loss Experience
  weightLossExperience: string;
  
  // Step 5: Medication Info
  medicationInfo: string;
  
  // Step 6: Gender Selection
  gender: string;
  
  // Step 7: Date of Birth
  dateOfBirth: {
    month: string;
    day: string;
    year: string;
  };
  
  // Step 8: BMI Calculator
  bmiData: {
    height: {
      feet: string;
      inches: string;
    };
    weight: string;
    bmi?: number;
  };
  
  // Step 9: Goal Weight
  goalWeight: string;
  
  // Step 12: State Selection
  selectedState: string;
  
  // Step 14: Medical Conditions
  medicalConditions: string[];
}

export interface FormStore {
  // Current step
  currentStep: number;
  
  // Form data
  formData: FormData;
  
  // Actions
  setCurrentStep: (step: number) => void;
  navigateToStep: (step: number) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  
  // Form data setters
  setWeightLossGoals: (goals: string[]) => void;
  setWeightLossChallenges: (challenges: string[]) => void;
  setWeightLossHistory: (history: string) => void;
  setWeightLossExperience: (experience: string) => void;
  setMedicationInfo: (info: string) => void;
  setGender: (gender: string) => void;
  setDateOfBirth: (month: string, day: string, year: string) => void;
  setBMIData: (height: { feet: string; inches: string }, weight: string, bmi?: number) => void;
  setGoalWeight: (weight: string) => void;
  setSelectedState: (state: string) => void;
  setMedicalConditions: (conditions: string[]) => void;
  
  // Utility functions
  resetForm: () => void;
  getFormProgress: () => number;
}

// Initial form data
const initialFormData: FormData = {
  weightLossGoals: [],
  weightLossChallenges: [],
  weightLossHistory: '',
  weightLossExperience: '',
  medicationInfo: '',
  gender: '',
  dateOfBirth: {
    month: '',
    day: '',
    year: ''
  },
  bmiData: {
    height: {
      feet: '',
      inches: ''
    },
    weight: '',
    bmi: undefined
  },
  goalWeight: '',
  selectedState: '',
  medicalConditions: []
};

export const useFormStore = create<FormStore>()(
  devtools(
    persist(
      (set, get) => ({
        currentStep: 1,
        formData: initialFormData,
        
        // Navigation actions
        setCurrentStep: (step: number) => {
          set({ currentStep: step }, false, 'setCurrentStep');
        },
        
        navigateToStep: (step: number) => {
          set({ currentStep: step }, false, 'navigateToStep');
        },
        
        goToNextStep: () => {
          const { currentStep } = get();
          const nextStep = currentStep + 1;
          set({ currentStep: nextStep }, false, 'goToNextStep');
        },
        
        goToPreviousStep: () => {
          const { currentStep } = get();
          const prevStep = Math.max(1, currentStep - 1);
          set({ currentStep: prevStep }, false, 'goToPreviousStep');
        },
        
        // Form data setters
        setWeightLossGoals: (goals: string[]) => {
          set(
            (state) => ({
              formData: { ...state.formData, weightLossGoals: goals }
            }),
            false,
            'setWeightLossGoals'
          );
        },
        
        setWeightLossChallenges: (challenges: string[]) => {
          set(
            (state) => ({
              formData: { ...state.formData, weightLossChallenges: challenges }
            }),
            false,
            'setWeightLossChallenges'
          );
        },
        
        setWeightLossHistory: (history: string) => {
          set(
            (state) => ({
              formData: { ...state.formData, weightLossHistory: history }
            }),
            false,
            'setWeightLossHistory'
          );
        },
        
        setWeightLossExperience: (experience: string) => {
          set(
            (state) => ({
              formData: { ...state.formData, weightLossExperience: experience }
            }),
            false,
            'setWeightLossExperience'
          );
        },
        
        setMedicationInfo: (info: string) => {
          set(
            (state) => ({
              formData: { ...state.formData, medicationInfo: info }
            }),
            false,
            'setMedicationInfo'
          );
        },
        
        setGender: (gender: string) => {
          set(
            (state) => ({
              formData: { ...state.formData, gender }
            }),
            false,
            'setGender'
          );
        },
        
        setDateOfBirth: (month: string, day: string, year: string) => {
          set(
            (state) => ({
              formData: { 
                ...state.formData, 
                dateOfBirth: { month, day, year }
              }
            }),
            false,
            'setDateOfBirth'
          );
        },
        
        setBMIData: (height: { feet: string; inches: string }, weight: string, bmi?: number) => {
          set(
            (state) => ({
              formData: { 
                ...state.formData, 
                bmiData: { height, weight, bmi }
              }
            }),
            false,
            'setBMIData'
          );
        },
        
        setGoalWeight: (weight: string) => {
          set(
            (state) => ({
              formData: { ...state.formData, goalWeight: weight }
            }),
            false,
            'setGoalWeight'
          );
        },
        
        setSelectedState: (selectedState: string) => {
          set(
            (state) => ({
              formData: { ...state.formData, selectedState }
            }),
            false,
            'setSelectedState'
          );
        },
        
        setMedicalConditions: (conditions: string[]) => {
          set(
            (state) => ({
              formData: { ...state.formData, medicalConditions: conditions }
            }),
            false,
            'setMedicalConditions'
          );
        },
        
        // Utility functions
        resetForm: () => {
          set(
            { currentStep: 1, formData: initialFormData },
            false,
            'resetForm'
          );
        },
        
        getFormProgress: () => {
          const { currentStep } = get();
          const totalSteps = 14;
          return Math.round((currentStep / totalSteps) * 100);
        }
      }),
      {
        name: 'form-storage', // unique name for localStorage key
        partialize: (state) => ({ 
          currentStep: state.currentStep,
          formData: state.formData 
        }), // only persist these fields
      }
    ),
    {
      name: 'form-store', // name for devtools
    }
  )
);
