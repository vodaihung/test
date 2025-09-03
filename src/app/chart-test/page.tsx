'use client';

import React, { useState } from 'react';
import GoalWeightVisualizationStep from '../../components/GoalWeightVisualizationStep';

export default function ChartTestPage() {
  const [currentExample, setCurrentExample] = useState(0);

  const examples = [
    { current: "250", goal: "170", title: "Example 1: 250lbs → 170lbs" },
    { current: "200", goal: "150", title: "Example 2: 200lbs → 150lbs" },
    { current: "180", goal: "140", title: "Example 3: 180lbs → 140lbs" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#282828] via-[#1a1a1a] to-[#000000] p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Example Selector */}
        <div className="flex justify-center space-x-2 mb-8">
          {examples.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentExample(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                currentExample === index
                  ? 'bg-white text-[#282828]'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Current Example Title */}
        <div className="text-center mb-4">
          <h2 className="text-white text-lg font-medium">
            {examples[currentExample].title}
          </h2>
        </div>

        {/* Chart Component */}
        <GoalWeightVisualizationStep
          goalWeight={examples[currentExample].goal}
          currentWeight={examples[currentExample].current}
          onNext={() => console.log('Next clicked')}
        />
      </div>
    </div>
  );
}
