import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import Typography from '@material-ui/core/Typography';

// ユーザ定義コンポーネント
import { ChartDataContext } from './GraphMain';
import { NoDot } from '../parts/ChartParts';

export default () => {
  // 親コンポーネント情報
  const chartData = React.useContext(ChartDataContext);

  return (
    <div style={{ width: '600px', height: '300px' }}>
      <Typography variant="h6">{chartData.chartTitle}</Typography>
      <ResponsiveContainer height='80%'>
        <LineChart data={chartData.chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={chartData.chartKey} interval={chartData.interval}/>
          <YAxis />
          <Legend iconType='line' wrapperStyle={{ color: '#333' }} />
          <Line name={chartData.g1name} dataKey={chartData.g1key} stroke="#ff5108" strokeDasharray="5 5" dot={<NoDot />} />
          <Line name={chartData.g2name} dataKey={chartData.g2key} stroke="#02A8F6" strokeDasharray="5 5" dot={<NoDot />} />
          <Line name={chartData.g3name} dataKey={chartData.g3key} stroke="#ff2321" dot={<NoDot />} />
          <Line name={chartData.g4name} dataKey={chartData.g4key} stroke="#280AEB" dot={<NoDot />} />
          <Tooltip cursor={{ stroke: 'blue', strokeWidth: 1 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
