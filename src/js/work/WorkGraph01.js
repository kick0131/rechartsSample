import React from 'react';
import WorkDatePicker from './WorkDatePicker';
import GraphA from './GraphA';

// 表示させたいデータ群(DynamoDBを想定)
import * as json from '../../data/work.json';
var chartdata = json.speed_mean;

export const DatePickerContext = React.createContext('');
export const ChartDataContext = React.createContext('');

// DynamoDBのデータを加工
// 
// 週単位の要素に分割する
// ・1日のデータは3件
// ・ｘ軸は曜日ｙ軸は値
// 
const datasplit = () => {
  // ※加工ロジックは省略し、グラフ表示可能なデータを記載
  var result = [
    { "time": "月", "6/1": 1.632813, "6/2": 2.632813, "6/3": 2 },
    { "time": "", "6/1": 2.25, "6/2": 4.25, "6/3": 1 },
    { "time": "", "6/1": 1.4142, "6/2": 2.4142, "6/3": 5 },
    { "time": "火", "6/1": 1.632813, "6/2": 2.632813, "6/3": 3 },
    { "time": "", "6/1": 2.25, "6/2": 4.25, "6/3": 2 },
    { "time": "", "6/1": 1.4142, "6/2": 2.4142, "6/3": 1 },
    { "time": "水", "6/1": 1.632813, "6/2": 2.632813, "6/3": 2 },
    { "time": "", "6/1": 2.25, "6/2": 4.25, "6/3": 7 },
    { "time": "", "6/1": 1.4142, "6/2": 2.4142, "6/3": 2 },
    { "time": "木", "6/1": 1.632813, "6/2": 2.632813, "6/3": 4 },
    { "time": "", "6/1": 2.25, "6/2": 4.25, "6/3": 6 },
    { "time": "", "6/1": 1.4142, "6/2": 2.4142, "6/3": 5 },
    { "time": "金", "6/1": 1.632813, "6/2": 2.632813, "6/3": 5 },
    { "time": "", "6/1": 2.25, "6/2": 4.25, "6/3": 1 },
    { "time": "", "6/1": 1.4142, "6/2": 2.4142, "6/3": 4 },
    { "time": "土", "6/1": 1.632813, "6/2": 2.632813, "6/3": 6 },
    { "time": "", "6/1": 2.25, "6/2": 4.25, "6/3": 1 },
    { "time": "", "6/1": 1.4142, "6/2": 2.4142, "6/3": 3 },
    { "time": "日", "6/1": 1.632813, "6/2": 2.632813, "6/3": 2 },
    { "time": "", "6/1": 2.25, "6/2": 4.25, "6/3": 1 },
    { "time": "", "6/1": 1.4142, "6/2": 2.4142, "6/3": 3 }
  ];
  return result;
}

// ラインチャート用データセット
class GraphData {
  constructor(a, b, c, d, e, f) {
    // グラフ表示データ
    this.chartdata = a;
    // グラフ1_グラフ名
    this.data1name = b;
    // グラフ1_データキー名
    this.data1key = c;
    // グラフ1_グラフ名
    this.data2name = d;
    // グラフ1_データキー名
    this.data2key = e;
    // グラフタイトル
    this.chartTitle = f;
  }
}

// DatePickerで取得したDate型をグラフのキー項目のフォーマット(MM/dd)に変換する
const formatDate = (date) => {
  var formatDate = new Date(date);
  return (formatDate.getMonth() + 1) + '/' + (formatDate.getDate())
}

// レンダリングメイン処理
export default () => {
  // DatePicker
  const [beforeDate, setBeforeDate] = React.useState(Date.now());
  const [afterDate, setAfterDate] = React.useState(Date.now());

  // DatePickerから制御する為のハンドラ情報
  function getResource() {
    return { before: beforeDate, beforehandler: setBeforeDate, after: afterDate, afterhandler: setAfterDate }
  };
  const resource = getResource();

  // 整形してグラフデータに投入
  chartdata = datasplit();
  var data1key = formatDate(beforeDate);
  var data2key = formatDate(afterDate);;

  // ★グラフ別投入データ
  const gA = new GraphData(chartdata, data1key + '週', data1key, data2key + '週', data2key, '表タイトルA');
  const gB = new GraphData(chartdata, data1key + '週', data1key, data2key + '週', data2key, '表タイトルB');

  return (
    <>
      <div className='topItem'>
        <DatePickerContext.Provider value={resource}>
          <WorkDatePicker />
        </DatePickerContext.Provider>
      </div>
      <div className='bottomItem'>
        <ChartDataContext.Provider value={gA}>
          <GraphA />
          <GraphA />
        </ChartDataContext.Provider>
        <ChartDataContext.Provider value={gB}>
          <GraphA />
        </ChartDataContext.Provider>
      </div>
    </>
  );
}
