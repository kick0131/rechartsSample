import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import Typography from '@material-ui/core/Typography'
import moment from 'moment'

// ユーザ定義コンポーネント
import { ChartDataContext } from './GraphMain';
import { NoDot } from '../parts/ChartParts';

export default () => {
  // 親コンポーネント情報
  const chartData = React.useContext(ChartDataContext);

  // 現在日の00:00:00と24:00:00のUNIXシリアル値をグラフのMIN,MAXとして取得
  // リストに投入するタイムスタンプも現在日に補正する事
  var domainMin = moment("00:00:00", 'HH:mm:ss').unix();
  var domainMax = moment("23:59:59", 'HH:mm:ss').unix();
  var ticks = [
    // ★ToDo 本来は日時指定はしない。ダミー用の暫定処置
    moment("2020-06-18 00:00:00", 'yyyy-MM-DD HH:mm:ss').unix(),
    moment("2020-06-18 06:00:00", 'yyyy-MM-DD HH:mm:ss').unix(),
    moment("2020-06-18 12:00:00", 'yyyy-MM-DD HH:mm:ss').unix(),
    moment("2020-06-18 18:00:00", 'yyyy-MM-DD HH:mm:ss').unix(),
    moment("2020-06-19 00:00:00", 'yyyy-MM-DD HH:mm:ss').unix(),
    // ★ToDo 入力データを加工してticksは現在日のこちらを使う事
    // moment("00:00:00", 'HH:mm:ss').unix(),
    // moment("06:00:00", 'HH:mm:ss').unix(),
    // moment("12:00:00", 'HH:mm:ss').unix(),
    // moment("18:00:00", 'HH:mm:ss').unix(),
    // moment("24:00:00", 'HH:mm:ss').unix(),
  ];
  // ★ToDo 本来は日時指定はしない。ダミー用の暫定処置
  domainMin = moment("2020-06-18 00:00:00", 'yyyy-MM-DD HH:mm:ss').unix();
  domainMax = moment("2020-06-19 00:00:00", 'yyyy-MM-DD HH:mm:ss').unix();

  return (
    <div style={{ width: '800px', height: '300px' }}>
      <Typography variant="h6">{chartData.chartTitle}</Typography>
      <ResponsiveContainer height='80%'>
        <LineChart data={chartData.chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={chartData.chartKey} type='number' domain={chartData.domain} tickFormatter={chartData.tickFormatter} ticks={chartData.ticks} />
          <YAxis />
          <Legend wrapperStyle={{ color: '#333' }} />
          <Line connectNulls name={chartData.g1name} dataKey={chartData.g1key} stroke="#8884d8" dot={<NoDot />}/>
          <Line connectNulls name={chartData.g2name} dataKey={chartData.g2key} stroke="#ff2321" dot={<NoDot />}/>
          <Tooltip cursor={{ stroke: 'blue', strokeWidth: 2 }} contentStyle={{ height: '10%' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
