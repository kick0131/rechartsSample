import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar } from 'recharts';

//表示させたいデータ群
import * as json from '../../data/chartdata.json';
const chartdata = json.score01;

const renderParam = (
  <BarChart width={730} height={250} data={chartdata} margin={{ top: 0, left: 0, right: 0, bottom: 0 }} >
    <CartesianGrid stroke="#444" strokeDasharray="3 3" />
    <XAxis dataKey="key" />
    <YAxis />
    <Legend wrapperStyle={{ color:'#333', backgroundColor: '#CEFFCE', border: '1px solid #333', borderRadius: 3}} />
    <Bar name="Aさん" dataKey="valueA" fill="#8884d8" />
    <Bar name="Bさん" dataKey="valueB" fill="#82ca9d" />
  </BarChart>
);

export default () => {
  return renderParam;
}