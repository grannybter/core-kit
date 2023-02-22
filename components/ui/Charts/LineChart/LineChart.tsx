import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
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

const DummyLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
      >
        <CartesianGrid/>
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
        />
        <Legend
          wrapperStyle={{
            paddingTop: '10px',
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#00bfa5"
          strokeWidth={2}
          dot={{ stroke: '#00bfa5', strokeWidth: 2, r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DummyLineChart;
