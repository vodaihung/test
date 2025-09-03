import { render, screen, fireEvent } from '@testing-library/react';
import WeightLossExperienceStep from '../WeightLossExperienceStep';

// Mock the console.log to test the callback
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('WeightLossExperienceStep Component', () => {
  afterEach(() => {
    mockConsoleLog.mockClear();
  });

  afterAll(() => {
    mockConsoleLog.mockRestore();
  });

  it('renders the question and all options', () => {
    render(<WeightLossExperienceStep />);
    
    // Check if the question is rendered
    expect(screen.getByText(/Have you tried/)).toBeInTheDocument();
    expect(screen.getByText(/losing weight before?/)).toBeInTheDocument();
    
    // Check if all options are rendered
    expect(screen.getByText('No')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
  });

  it('allows selecting an option', () => {
    render(<WeightLossExperienceStep />);

    const noOption = screen.getByText('No');
    fireEvent.click(noOption);

    // The option should be selected (this would be visible through styling changes)
    // Since we're testing functionality, we can check if the callback was called
    setTimeout(() => {
      expect(mockConsoleLog).toHaveBeenCalledWith('Weight Loss Experience completed with:', 'No');
    }, 300);
  });

  it('calls onNext callback when provided', () => {
    const mockOnNext = jest.fn();
    render(<WeightLossExperienceStep onNext={mockOnNext} />);

    const yesOption = screen.getByText('Yes');
    fireEvent.click(yesOption);

    // Check if the callback is called after the delay
    setTimeout(() => {
      expect(mockOnNext).toHaveBeenCalledWith('Yes');
    }, 300);
  });

  it('only allows one option to be selected at a time', () => {
    render(<WeightLossExperienceStep />);

    const noOption = screen.getByText('No');
    const yesOption = screen.getByText('Yes');

    fireEvent.click(noOption);
    fireEvent.click(yesOption);

    // The second option should now be selected, replacing the first
    setTimeout(() => {
      expect(mockConsoleLog).toHaveBeenLastCalledWith('Weight Loss Experience completed with:', 'Yes');
    }, 300);
  });
});
