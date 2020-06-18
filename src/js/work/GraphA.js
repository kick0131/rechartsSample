import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

// ユーザ定義コンポーネント
import { ChartDataContext } from './WorkGraph01'

export default () => {
  // 親コンポーネント情報
  const chartData = React.useContext(ChartDataContext);

  return (
    <div style={{ width: '600px', height: '300px' }}>
      <h4 style={{ color: "#333", margin:'0'}}>{chartData.chartTitle}</h4>
      <ResponsiveContainer height='80%'>
        <LineChart data={chartData.chartdata} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Legend wrapperStyle={{ color: '#333' }} />
          <Line name={chartData.BRname} dataKey={chartData.BRkey} stroke="#4e505f" />
          <Line name={chartData.BLname} dataKey={chartData.BLkey} stroke="#66809c" />
          <Line name={chartData.ARname} dataKey={chartData.ARkey} stroke="#588133" />
          <Line name={chartData.ALname} dataKey={chartData.ALkey} stroke="#adbd37" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
