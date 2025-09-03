'use client';

import React from 'react';
import MultiStepFlow from '../../components/MultiStepFlow';

export default function ChartDemo() {
  return (
    <MultiStepFlow
      goalWeight="180"
      currentWeight="250"
    />
  );
}
