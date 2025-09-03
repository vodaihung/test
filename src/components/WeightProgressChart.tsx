'use client';

import React from 'react';
import { Line, XAxis, YAxis, ResponsiveContainer, ReferenceDot, Area, AreaChart } from 'recharts';

interface WeightProgressChartProps {
  currentWeight: string;
  goalWeight: string;
  isAnimated?: boolean;
}

const WeightProgressChart: React.FC<WeightProgressChartProps> = ({
  currentWeight,
  goalWeight
}) => {
  // Static mock data for the chart
  const staticChartData = [
    { week: 1, weight: 250, target: 180, label: 'Week 1' },
    { week: 2, weight: 247, target: 180, label: 'Week 2' },
    { week: 3, weight: 244, target: 180, label: 'Week 3' },
    { week: 4, weight: 240, target: 180, label: 'Week 4' },
    { week: 5, weight: 235, target: 180, label: 'Week 5' },
    { week: 6, weight: 229, target: 180, label: 'Week 6' },
    { week: 7, weight: 222, target: 180, label: 'Week 7' },
    { week: 8, weight: 215, target: 180, label: 'Week 8' },
    { week: 9, weight: 208, target: 180, label: 'Week 9' },
    { week: 10, weight: 201, target: 180, label: 'Week 10' },
    { week: 11, weight: 195, target: 180, label: 'Week 11' },
    { week: 12, weight: 190, target: 180, label: 'Week 12' },
    { week: 13, weight: 186, target: 180, label: 'Week 13' },
    { week: 14, weight: 184, target: 180, label: 'Week 14' },
    { week: 15, weight: 182, target: 180, label: 'Week 15' },
    { week: 16, weight: 181, target: 180, label: 'Week 16' },
    { week: 17, weight: 180.5, target: 180, label: 'Week 17' },
    { week: 18, weight: 180.2, target: 180, label: 'Week 18' },
    { week: 19, weight: 180, target: 180, label: 'Week 19' },
  ];

  return (
    <div className="relative w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={staticChartData}
          margin={{ top: 40, right: 40, left: 40, bottom: 40 }}
        >
          <defs>
            {/* Gradient for area fill */}
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.05)" />
            </linearGradient>

            {/* Gradient for line */}
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.9)" />
              <stop offset="80%" stopColor="rgba(255, 255, 255, 0.9)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Shadow filter */}
            <filter id="shadow">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="white" floodOpacity="0.4"/>
            </filter>
          </defs>

          {/* Hidden axes for proper scaling */}
          <XAxis
            dataKey="week"
            hide
            domain={[0, 18]}
          />
          <YAxis
            hide
            domain={[175, 255]}
          />

     

          {/* Main line with glow */}
          <Line
            type="monotone"
            dataKey="weight"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={false}
            strokeLinecap="round"
            filter="url(#glow)"
          />

          {/* Additional glow layer */}
          <Line
            type="monotone"
            dataKey="weight"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth={6}
            dot={false}
            strokeLinecap="round"
            filter="url(#shadow)"
          />

          {/* Start point */}
          <ReferenceDot
            x={staticChartData[0].week}
            y={staticChartData[0].weight}
            r={5}
            fill="white"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth={2}
            filter="url(#glow)"
          />

          {/* Star point */}
          <ReferenceDot
            x={staticChartData[staticChartData.length - 1].week}
            y={staticChartData[staticChartData.length - 1].weight}
            r={5}
            fill="white"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth={2}
            filter="url(#glow)"
            shape={(props) => (
              <path
                d="M0,-5 L1.5,-1.5 L5,-1.5 L2,1 L3,5 L0,2.5 L-3,5 L-2,1 L-5,-1.5 L-1.5,-1.5 Z"
                transform={`translate(${props.cx},${props.cy})`}
                fill="white"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth={2}
                filter="url(#glow)"
              />
            )}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Background Grid Lines - Figma Design */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Vertical Grid Lines */}
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="absolute h-full w-0 opacity-10"
            style={{
              left: `${12 + (index * 12)}%`,
              borderLeft: '2.94px dashed',
              borderImage: 'radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%) 1',
              borderImageSlice: 1,
              background: 'radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
              WebkitMask: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 8.8px, white 8.8px, white 17.6px)',
              mask: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 8.8px, white 8.8px, white 17.6px)'
            }}
          />
        ))}
      </div>

      {/* Weight Labels - Figma Design */}
      <div className="absolute top-[25%] left-[5%] bg-white backdrop-blur-[4px] rounded-[14px] px-2 py-1.5 flex items-center justify-center">
        <span className="text-[10px] font-medium font-overused bg-gradient-to-b from-[#B39FFE] to-[#725EBD] bg-clip-text text-transparent leading-[1.2]">
          {currentWeight}lbs
        </span>
      </div>

      <div className="absolute bottom-[5%] right-[5%] bg-white backdrop-blur-[4px] rounded-[14px] px-2 py-1.5 flex items-center justify-center">
        <span className="text-[10px] font-medium font-overused bg-gradient-to-b from-[#B39FFE] to-[#725EBD] bg-clip-text text-transparent leading-[1.2]">
          {goalWeight}lbs
        </span>
      </div>

      <div className="absolute bottom-[25%] right-[5%]">
        <span className="text-[14px] font-medium font-['Overused_Grotesk'] text-white text-center leading-[12px]">
          Goal <br /> weight
        </span>
      </div>


    </div>
  );
};

export default WeightProgressChart;
