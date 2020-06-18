import React from 'react';
import WorkDatePickerB from './WorkDatePickerForB';
import GraphB from './GraphB';

// 表示させたいデータ群(DynamoDBを想定)
import * as json from '../../data/work.json';
const chartData = json.dorsiflexion_mean;

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
    // グラフタイトル
    this.chartTitle = a;
    // グラフ表示データ
    this.chartData = b;
    // グラフ1_グラフ名,データキー名
    this.beforeName = c;
    this.beforeKey = d;
    // グラフ2_グラフ名,データキー名
    this.afterName = e;
    this.afterKey = f;
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
  var beforeKey = formatDate(beforeDate);
  var afterKey = formatDate(afterDate);
  
  // 投入データ
  // 現時点の想定では、日付をデータキーをするのでそのまま凡例名として使用する
  const gA = new GraphData('高精度データA',chartData, beforeKey, beforeKey, afterKey, afterKey );

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
      </div>
    </>
  );
}
