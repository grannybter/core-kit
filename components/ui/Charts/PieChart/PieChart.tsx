import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
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

const COLORS = ['#00bfa5', '#ff9800', '#f44336'];

const DummyPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={2}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
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
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DummyPieChart;
