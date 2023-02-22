import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { subject: 'Math', A: 120, fullMark: 150 },
  { subject: 'Chinese', A: 98, fullMark: 150 },
  { subject: 'English', A: 86, fullMark: 150 },
  { subject: 'Geography', A: 99, fullMark: 150 },
  { subject: 'Physics', A: 85, fullMark: 150 },
  { subject: 'History', A: 65, fullMark: 150 },
];

const DummyRadarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Student A"
          dataKey="A"
          stroke="#00bfa5"
          fill="#00bfa5"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default DummyRadarChart;
