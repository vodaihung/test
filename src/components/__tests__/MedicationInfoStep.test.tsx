import { render, screen, fireEvent } from '@testing-library/react';
import MedicationInfoStep from '../MedicationInfoStep';

describe('MedicationInfoStep Component', () => {
  it('renders the statistic and description text', () => {
    render(<MedicationInfoStep />);
    
    // Check if the main statistic is rendered
    expect(screen.getByText('80%')).toBeInTheDocument();
    
    // Check if the description text is rendered
    expect(screen.getByText(/of people say weight loss medication is more effective/)).toBeInTheDocument();
    
    // Check if the product name is rendered
    expect(screen.getByText('GLP-1 injections')).toBeInTheDocument();
    
    // Check if the tag is rendered
    expect(screen.getByText('Weight loss')).toBeInTheDocument();
    
    // Check if the medication description is rendered
    expect(screen.getByText(/Medication turbocharges your metabolism/)).toBeInTheDocument();
  });

  it('renders the Next button', () => {
    render(<MedicationInfoStep />);
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeInTheDocument();
    
    // Check if the arrow icon is present
    const svg = nextButton.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('calls onNext when Next button is clicked', () => {
    const mockOnNext = jest.fn();
    render(<MedicationInfoStep onNext={mockOnNext} />);
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    
    expect(mockOnNext).toHaveBeenCalledTimes(1);
  });

  it('does not crash when onNext is not provided', () => {
    render(<MedicationInfoStep />);
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    
    // Should not throw an error
    expect(() => fireEvent.click(nextButton)).not.toThrow();
  });
});
