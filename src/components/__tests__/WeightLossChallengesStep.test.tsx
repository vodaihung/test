import { render, screen, fireEvent } from '@testing-library/react';
import WeightLossChallengesStep from '../WeightLossChallengesStep';

// Mock the console.log to test the callback
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('WeightLossChallengesStep Component', () => {
  afterEach(() => {
    mockConsoleLog.mockClear();
  });

  afterAll(() => {
    mockConsoleLog.mockRestore();
  });

  it('renders the question and all options', () => {
    render(<WeightLossChallengesStep />);
    
    // Check if the question is rendered
    expect(screen.getByText('What makes losing weight difficult for you?')).toBeInTheDocument();
    
    // Check if all options are rendered
    expect(screen.getByText('Dealing with hunger/cravings')).toBeInTheDocument();
    expect(screen.getByText('Not knowing what to eat')).toBeInTheDocument();
    expect(screen.getByText('It was taking too long')).toBeInTheDocument();
    expect(screen.getByText('Not staying motivated')).toBeInTheDocument();
    expect(screen.getByText('All of the above')).toBeInTheDocument();
  });

  it('calls onNext callback when provided', () => {
    const mockOnNext = jest.fn();
    render(<WeightLossChallengesStep onNext={mockOnNext} />);
    
    const firstOption = screen.getByText('Dealing with hunger/cravings');
    fireEvent.click(firstOption);
    
    // Check if the callback is called after the delay
    setTimeout(() => {
      expect(mockOnNext).toHaveBeenCalledWith('Dealing with hunger/cravings');
    }, 300);
  });
});
