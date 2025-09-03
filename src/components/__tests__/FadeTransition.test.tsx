import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../../app/page';

describe('Fade Transition Effect', () => {
  it('should transition from step 1 to step 2 when option is selected', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Home />);

    // Find and click an option in step 1
    const firstOption = screen.getAllByText('Improve overall health')[0];
    fireEvent.click(firstOption);

    // Wait for the console log to confirm step completion
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Weight Loss Goals completed with:', 'Improve overall health');
    }, { timeout: 500 });

    // Wait a bit more for the transition to complete
    await waitFor(() => {
      // Check that step 2 content appears
      expect(screen.getAllByText(/Have you tried/)[0]).toBeInTheDocument();
    }, { timeout: 1000 });

    consoleSpy.mockRestore();
  });

  it('should show correct progress bar width for step 2', async () => {
    render(<Home />);

    // Click an option to trigger transition
    const option = screen.getAllByText('Feel better about myself')[0];
    fireEvent.click(option);

    // Wait for transition and check progress bar width
    await waitFor(() => {
      const progressBars = document.querySelectorAll('[style*="width: 36px"]');
      expect(progressBars.length).toBeGreaterThan(0);
    }, { timeout: 1000 });
  });
});
