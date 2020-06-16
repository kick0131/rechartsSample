import React from 'react';
import WorkDatePickerB from './WorkDatePickerForB';
import GraphB from './GraphB';

// 表示させたいデータ群(DynamoDBを想定)
import * as json from '../../data/work.json';
const chartdata = json.stride_mean;

export const DatePickerContext = React.createContext('');
export const ChartDataContext = React.createContext('');

// DynamoDBのデータを加工
function datasplit () {
  // ※加工ロジックは省略し、グラフ表示可能なデータを記載
  var result = [];
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
//  chartdata = datasplit();
  var data1key = formatDate(beforeDate);
  var data2key = formatDate(afterDate);
  

  // ★グラフ別投入データ
  const gA = new GraphData(chartdata, data1key, data1key, data2key, data2key, '高精度データA');
  const gB = new GraphData(chartdata, data1key, data1key, data2key, data2key, '高精度データB');

  return (
    <>
      <div className='topItem'>
        <DatePickerContext.Provider value={resource}>
          <WorkDatePickerB />
        </DatePickerContext.Provider>
      </div>
      <div className='bottomItem'>
        <ChartDataContext.Provider value={gA}>
          <GraphB />
        </ChartDataContext.Provider>
        <ChartDataContext.Provider value={gB}>
          <GraphB />
        </ChartDataContext.Provider>
      </div>
    </>
  );
}
