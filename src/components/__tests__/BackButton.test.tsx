import { render, screen, fireEvent } from '@testing-library/react';
import BackButton from '../BackButton';

describe('BackButton Component', () => {
  it('renders the back button with correct icon', () => {
    const mockOnClick = jest.fn();
    render(<BackButton onClick={mockOnClick} />);
    
    const button = screen.getByRole('button', { name: /go back to previous step/i });
    expect(button).toBeInTheDocument();
    
    // Check if the SVG icon is present
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(<BackButton onClick={mockOnClick} />);
    
    const button = screen.getByRole('button', { name: /go back to previous step/i });
    fireEvent.click(button);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className when provided', () => {
    const mockOnClick = jest.fn();
    const customClass = 'custom-class';
    render(<BackButton onClick={mockOnClick} className={customClass} />);
    
    const button = screen.getByRole('button', { name: /go back to previous step/i });
    expect(button).toHaveClass(customClass);
  });
});
