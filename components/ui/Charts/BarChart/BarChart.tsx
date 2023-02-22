import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', value: Math.floor(Math.random() * 100) },
  { name: 'Feb', value: Math.floor(Math.random() * 100) },
  { name: 'Mar', value: Math.floor(Math.random() * 100) },
  { name: 'Apr', value: Math.floor(Math.random() * 100) },
  { name: 'May', value: Math.floor(Math.random() * 100) },
  { name: 'Jun', value: Math.floor(Math.random() * 100) },
  { name: 'Jul', value: Math.floor(Math.random() * 100) },
  { name: 'Aug', value: Math.floor(Math.random() * 100) },
  { name: 'Sep', value: Math.floor(Math.random() * 100) },
  { name: 'Oct', value: Math.floor(Math.random() * 100) },
  { name: 'Nov', value: Math.floor(Math.random() * 100) },
  { name: 'Dec', value: Math.floor(Math.random() * 100) },
];

const DummyBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          wrapperStyle={{
            backgroundColor: '#fff',
            borderRadius: '4px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            color: '#4d4d4d',
            fontSize: '12px',
            padding: '10px',
          }}
          formatter={(value, name) => [`${name}: ${value}`, '']}
        />
        <Legend
          wrapperStyle={{
            paddingTop: '10px',
          }}
        />
        <Bar dataKey="value" fill="#00bfa5" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DummyBarChart;
