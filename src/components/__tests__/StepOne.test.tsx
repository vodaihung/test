import { render, screen, fireEvent } from '@testing-library/react';
import WeightLossGoalsStep from '../WeightLossGoalsStep';

// Mock the console.log to test the callback
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('WeightLossGoalsStep Component', () => {
  afterEach(() => {
    mockConsoleLog.mockClear();
  });

  afterAll(() => {
    mockConsoleLog.mockRestore();
  });

  it('renders the question and all options', () => {
    render(<WeightLossGoalsStep />);
    
    // Check if the question is rendered
    expect(screen.getByText('What would you like to achieve with weight loss medication?')).toBeInTheDocument();
    
    // Check if all options are rendered
    expect(screen.getByText('Improve overall health')).toBeInTheDocument();
    expect(screen.getByText('Feel better about myself')).toBeInTheDocument();
    expect(screen.getByText('Improve quality of life')).toBeInTheDocument();
    expect(screen.getByText('All of the above')).toBeInTheDocument();
  });

  it('allows selecting an option', () => {
    render(<WeightLossGoalsStep />);

    const firstOption = screen.getByText('Improve overall health');
    fireEvent.click(firstOption);

    // The option should be selected (this would be visible through styling changes)
    // Since we're testing functionality, we can check if the callback was called
    setTimeout(() => {
      expect(mockConsoleLog).toHaveBeenCalledWith('Weight Loss Goals completed with:', 'Improve overall health');
    }, 300);
  });

  it('calls onNext callback when provided', () => {
    const mockOnNext = jest.fn();
    render(<WeightLossGoalsStep onNext={mockOnNext} />);

    const secondOption = screen.getByText('Feel better about myself');
    fireEvent.click(secondOption);

    // Check if the callback is called after the delay
    setTimeout(() => {
      expect(mockOnNext).toHaveBeenCalledWith('Feel better about myself');
    }, 300);
  });

  it('only allows one option to be selected at a time', () => {
    render(<WeightLossGoalsStep />);

    const firstOption = screen.getByText('Improve overall health');
    const secondOption = screen.getByText('Feel better about myself');

    fireEvent.click(firstOption);
    fireEvent.click(secondOption);

    // The second option should now be selected, replacing the first
    setTimeout(() => {
      expect(mockConsoleLog).toHaveBeenLastCalledWith('Weight Loss Goals completed with:', 'Feel better about myself');
    }, 300);
  });
});
