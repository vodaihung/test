import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GoalWeightVisualizationStep from '../GoalWeightVisualizationStep';

describe('GoalWeightVisualizationStep', () => {
  const mockOnNext = jest.fn();

  beforeEach(() => {
    mockOnNext.mockClear();
  });

  it('renders with default props', () => {
    render(
      <GoalWeightVisualizationStep
        goalWeight="170"
        onNext={mockOnNext}
      />
    );

    expect(screen.getByText('170 lbs')).toBeInTheDocument();
    expect(screen.getByText('is achievable with Novi')).toBeInTheDocument();
    expect(screen.getByText('170lbs')).toBeInTheDocument();
    expect(screen.getByText('250lbs')).toBeInTheDocument(); // default current weight
  });

  it('renders with custom current weight', () => {
    render(
      <GoalWeightVisualizationStep
        goalWeight="160"
        currentWeight="220"
        onNext={mockOnNext}
      />
    );

    expect(screen.getByText('160 lbs')).toBeInTheDocument();
    expect(screen.getByText('160lbs')).toBeInTheDocument();
    expect(screen.getByText('220lbs')).toBeInTheDocument();
  });

  it('renders glassmorphism chart container', () => {
    render(
      <GoalWeightVisualizationStep
        goalWeight="170"
        onNext={mockOnNext}
      />
    );

    expect(screen.getByText('Goal weight')).toBeInTheDocument();
  });

  it('calls onNext when Next button is clicked', () => {
    render(
      <GoalWeightVisualizationStep
        goalWeight="170"
        onNext={mockOnNext}
      />
    );

    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    expect(mockOnNext).toHaveBeenCalledTimes(1);
  });

  it('displays goal weight label', () => {
    render(
      <GoalWeightVisualizationStep
        goalWeight="170"
        onNext={mockOnNext}
      />
    );

    expect(screen.getByText('Goal weight')).toBeInTheDocument();
  });

  it('renders progress steps', () => {
    render(
      <GoalWeightVisualizationStep
        goalWeight="170"
        onNext={mockOnNext}
      />
    );

    // Check for progress step elements (div containers)
    const progressSteps = document.querySelectorAll('.w-5.h-5.rounded-full.bg-white');
    expect(progressSteps.length).toBe(2);
  });

  it('displays Novi description text', () => {
    render(
      <GoalWeightVisualizationStep
        goalWeight="170"
        onNext={mockOnNext}
      />
    );

    expect(screen.getByText(/Novi's prescription program/)).toBeInTheDocument();
  });
});
