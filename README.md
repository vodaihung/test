# Novi Design - Multi-Step Form

This is a Next.js application implementing the first step of a multi-step form based on the Novi Design Figma mockups. The form includes a progress bar and single-choice selection interface for weight loss medication goals.

## Features

- **Responsive Design**: Optimized for both mobile (375px) and desktop (1440px) viewports
- **Progress Bar**: Visual indicator showing current step progress with gradient styling
- **Single Choice Selection**: Interactive options with gradient borders and check icons
- **Custom Typography**: Uses Syne font for headings and Inter font for body text
- **Smooth Animations**: Hover effects and selection transitions
- **TypeScript**: Full type safety throughout the application
- **Testing**: Comprehensive test suite with Jest and React Testing Library

## Design Implementation

The implementation closely follows the Figma designs:

### Mobile Version (375px)
- Centered logo and progress bar at the top
- Question text with proper typography (Syne, 24px)
- Four single-choice options with 327px max width
- Gradient borders for selected states
- Proper spacing and padding (24px sides, 32px gaps)

### Desktop Version (1440px)
- Centered layout with 480px horizontal padding
- Larger question text (32px)
- Full-width options within the content area
- Balanced header layout with logo centering

## Components

### `ProgressBar`
- Shows current step progress with animated gradient fill
- Responsive width constraints
- Smooth transitions

### `SingleChoice`
- Interactive button with gradient border for selected state
- Check icon with gradient coloring
- Hover effects for better UX
- Proper typography and spacing

### `StepOne`
- Main form step component
- Manages selection state
- Calls callback on option selection
- Responsive layout

### `Logo`
- SVG-based logo component
- Matches Figma design specifications

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and font imports
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
└── components/
    ├── __tests__/
    │   └── StepOne.test.tsx  # Component tests
    ├── Logo.tsx              # Logo component
    ├── ProgressBar.tsx       # Progress indicator
    ├── SingleChoice.tsx      # Choice option component
    └── StepOne.tsx           # First step form
```

## Technologies Used

- **Next.js 15.5.2**: React framework with App Router
- **React 19.1.0**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Utility-first CSS framework
- **Jest**: Testing framework
- **React Testing Library**: Component testing utilities
- **Google Fonts**: Syne and Inter typography

## Next Steps

This implementation covers the first step of the multi-step form. To extend:

1. Add additional step components (StepTwo, StepThree, etc.)
2. Implement step navigation logic
3. Add form validation
4. Integrate with backend API
5. Add animations between steps
6. Implement form data persistence

## Design Fidelity

The implementation maintains high fidelity to the original Figma designs:
- ✅ Exact color values (#B39FFE, #725EBD, #282828, #F9F9F9)
- ✅ Proper typography (Syne for headings, Inter for body)
- ✅ Correct spacing and dimensions
- ✅ Gradient borders and fills
- ✅ Responsive breakpoints
- ✅ Interactive states and animations
