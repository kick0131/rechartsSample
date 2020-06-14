import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid,Legend } from 'recharts';

//表示させたいデータ群
import * as json from '../../data/chartdata.json';
const chartdata = json.score01;

const renderParam = (
  <LineChart width={700} height={400} data={chartdata} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="key" />
    <YAxis />
    <Legend wrapperStyle={{ color:'#333', backgroundColor: '#CEFFCE', border: '1px solid #333', borderRadius: 3}}/>
    <Line name="Aさん" type="monotone" dataKey="valueA" stroke="#8884d8" />
    <Line name="Bさん" type="monotone" dataKey="valueB" stroke="#82ca9d" />
  </LineChart>
);

export default () => {
  return renderParam;
}
