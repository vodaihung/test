import { render, screen, fireEvent } from '@testing-library/react';
import WeightLossHistoryStep from '../WeightLossHistoryStep';

// Mock the console.log to test the callback
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('WeightLossHistoryStep Component', () => {
  afterEach(() => {
    mockConsoleLog.mockClear();
  });

  afterAll(() => {
    mockConsoleLog.mockRestore();
  });

  it('renders the question and all options', () => {
    render(<WeightLossHistoryStep />);
    
    // Check if the question is rendered
    expect(screen.getByText(/Please select the statement that best describes your previous weight loss attempts/)).toBeInTheDocument();
    
    // Check if all options are rendered
    expect(screen.getByText('Was able to lose weight and kept off the weight for a while')).toBeInTheDocument();
    expect(screen.getByText('Was able to lose weight but regained the weight shortly after')).toBeInTheDocument();
    expect(screen.getByText('Was unable to lose even though I followed my dietary and exercise goals')).toBeInTheDocument();
    expect(screen.getByText('Was unable to lose weight and I was unable to follow my dietary and exercise goals')).toBeInTheDocument();
  });

  it('calls onNext callback when provided', () => {
    const mockOnNext = jest.fn();
    render(<WeightLossHistoryStep onNext={mockOnNext} />);
    
    const firstOption = screen.getByText('Was able to lose weight and kept off the weight for a while');
    fireEvent.click(firstOption);
    
    // Check if the callback is called after the delay
    setTimeout(() => {
      expect(mockOnNext).toHaveBeenCalledWith('Was able to lose weight and kept off the weight for a while');
    }, 300);
  });
});
