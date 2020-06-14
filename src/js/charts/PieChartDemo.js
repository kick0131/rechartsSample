import React from 'react';
import { PieChart, Pie, Legend } from 'recharts';

//表示させたいデータ群
import * as json from '../../data/chartdata.json';
const chartdata = json.score01;

const renderParam = (
  <PieChart width={730} height={250}>
    <Pie data={chartdata} dataKey="valueA" nameKey="key" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
    <Pie data={chartdata} dataKey="valueB" nameKey="key" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
  </PieChart>
);

export default () => {
  return renderParam;
}