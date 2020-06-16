import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

// ユーザ定義コンポーネント
import { ChartDataContext } from './WorkGraph01'

export default () => {
  // 親コンポーネント情報
  const chartData = React.useContext(ChartDataContext);

  return (
    <>
      <h4 style={{ color: "#333" }}>{chartData.chartTitle}</h4>
      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer>
          <LineChart width={600} height={300} data={chartData.chartdata} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis/>
            <Legend wrapperStyle={{ color: '#333' }} />
            <Line name={chartData.data1key} dataKey={chartData.data1key} stroke="#8884d8" />
            <Line name={chartData.data2key} dataKey={chartData.data2key} stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
