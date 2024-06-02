"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './chart.module.css';

const chart = () => {
  const data = [
    { name: 'Week 1', userRegistrations: 30, transactions: 15 },
    { name: 'Week 2', userRegistrations: 45, transactions: 20 },
    { name: 'Week 3', userRegistrations: 50, transactions: 25 },
    { name: 'Week 4', userRegistrations: 70, transactions: 30 },
    { name: 'Week 5', userRegistrations: 60, transactions: 35 },
    { name: 'Week 6', userRegistrations: 80, transactions: 40 },
    { name: 'Week 7', userRegistrations: 90, transactions: 50 },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Metrics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c" }} />
          <Legend />
          <Line type="monotone" dataKey="userRegistrations" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="transactions" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default chart;
