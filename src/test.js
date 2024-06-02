import React, { useEffect } from 'react'

import JsonData from './output_data.json'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Test() {
    const transformBarChartData = () => {
        const barChartData = {};
        JsonData.forEach(alert => {
            const signature = alert.alert.signature;
            if (!barChartData[signature]) {
                barChartData[signature] = 0;
            }
            barChartData[signature]++;
        });
        return Object.keys(barChartData).map(signature => ({ signature, count: barChartData[signature] }));
    };
  return (
    <BarChart width={1000} height={1000} data={JsonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='signature' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='count' fill="#82ca9d" />
        </BarChart>
  )
}

export default Test