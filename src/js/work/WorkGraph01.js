import React, { useState, createContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
// ユーザコンポーネント
import WorkDatePicker from './WorkDatePicker';
import GraphA from './GraphA';

// 表示させたいデータ群(DynamoDBを想定)
import * as json from '../../data/work.json';
var chartdata = json.speed_mean;

export const DatePickerContext = createContext('');
export const ChartDataContext = createContext('');

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
}));


// DynamoDBのデータを加工
// 
// 週単位の要素に分割する
// ・1日のデータは3件
// ・ｘ軸は曜日ｙ軸は値
// 
const datasplit = () => {

  // ※加工ロジックは省略し、グラフ表示可能なデータを記載
  var result = [
    { "time": "月", "BR": 1.632813, "BL": 2.632813, "AR": 3.632813, "AL": 2 },
    { "time": "", "BR": 2.25, "BL": 4.25, "AR": 2.25, "AL": 1 },
    { "time": "", "BR": 1.4142, "BL": 2.4142, "AR": 1.4142, "AL": 5 },
    { "time": "火", "BR": 1.632813, "BL": 2.632813, "AR": 3.632813, "AL": 3 },
    { "time": "", "BR": 2.25, "BL": 4.25, "AR": 2.25, "AL": 2 },
    { "time": "", "BR": 1.4142, "BL": 2.4142, "AR": 1.4142, "AL": 1 },
    { "time": "水", "BR": 1.632813, "BL": 2.632813, "AR": 3.632813, "AL": 2 },
    { "time": "", "BR": 2.25, "BL": 4.25, "AR": 2.25, "AL": 7 },
    { "time": "", "BR": 1.4142, "BL": 2.4142, "AR": 1.4142, "AL": 2 },
    { "time": "木", "BR": 1.632813, "BL": 2.632813, "AR": 3.632813, "AL": 4 },
    { "time": "", "BR": 2.25, "BL": 4.25, "AR": 2.25, "AL": 6 },
    { "time": "", "BR": 1.4142, "BL": 2.4142, "AR": 1.4142, "AL": 5 },
    { "time": "金", "BR": 1.632813, "BL": 2.632813, "AR": 3.632813, "AL": 5 },
    { "time": "", "BR": 2.25, "BL": 4.25, "AR": 2.25, "AL": 1 },
    { "time": "", "BR": 1.4142, "BL": 2.4142, "AR": 1.4142, "AL": 4 },
    { "time": "土", "BR": 1.632813, "BL": 2.632813, "AR": 3.632813, "AL": 6 },
    { "time": "", "BR": 2.25, "BL": 4.25, "AR": 2.25, "AL": 1 },
    { "time": "", "BR": 1.4142, "BL": 2.4142, "AR": 1.4142, "AL": 3 },
    { "time": "日", "BR": 1.632813, "BL": 2.632813, "AR": 3.632813, "AL": 2 },
    { "time": "", "BR": 2.25, "BL": 4.25, "AR": 2.25, "AL": 1 },
    { "time": "", "BR": 1.4142, "BL": 2.4142, "AR": 1.4142, "AL": 3 }
  ];
  return result;
}

// ラインチャート用データセット
class GraphData {
  constructor(a, b, c, d, e, f, g, h, i, j) {
    // グラフタイトル
    this.chartTitle = a;
    // グラフ表示データ
    this.chartData = b;
    // 比較前右足_グラフ名,データキー名
    this.BRname = c;
    this.BRkey = d;
    // 比較前左足_グラフ名,データキー名
    this.BLname = e;
    this.BLkey = f;
    // 比較後右足_グラフ名,データキー名
    this.ARname = g;
    this.ARkey = h;
    // 比較後左足_グラフ名,データキー名
    this.ALname = i;
    this.ALkey = j;
  }
}

// DatePickerで取得したDate型をグラフのキー項目のフォーマット(MM/dd)に変換する
const formatDate = (date) => {
  var formatDate = new Date(date);
  return (formatDate.getMonth() + 1) + '/' + (formatDate.getDate())
}

// レンダリングメイン処理
export default () => {
  // local style
  const classes = useStyles();

  // DatePicker
  const [beforeDate, setBeforeDate] = useState(Date.now());
  const [afterDate, setAfterDate] = useState(Date.now());
  // Select
  const [selectUser, setSelectUser] = useState('');

  // DatePickerから制御する為のハンドラ情報
  function getResource() {
    return { before: beforeDate, beforehandler: setBeforeDate, after: afterDate, afterhandler: setAfterDate }
  };
  const resource = getResource();

  // 整形してグラフデータに投入
  chartdata = datasplit();
  var data1key = formatDate(beforeDate);
  var data2key = formatDate(afterDate);

  // ★グラフ別投入データ
  const gA = new GraphData('表タイトルA', chartdata, data1key + '週（右）', 'BR', data1key + '週（左）', 'BL', data2key + '週（右）', 'AR', data2key + '週（左）', 'AL',);
  const gB = new GraphData('表タイトルB', chartdata, data1key + '週（右）', 'BR', data1key + '週（左）', 'BL', data2key + '週（右）', 'AR', data2key + '週（左）', 'AL',);
  const gC = new GraphData('表タイトルC', chartdata, data1key + '週（右）', 'BR', data1key + '週（左）', 'BL', data2key + '週（右）', 'AR', data2key + '週（左）', 'AL',);
  const gD = new GraphData('表タイトルD', chartdata, data1key + '週（右）', 'BR', data1key + '週（左）', 'BL', data2key + '週（右）', 'AR', data2key + '週（左）', 'AL',);
  const gE = new GraphData('表タイトルD', chartdata, data1key + '週（右）', 'BR', data1key + '週（左）', 'BL', data2key + '週（右）', 'AR', data2key + '週（左）', 'AL',);
  const gF = new GraphData('表タイトルD', chartdata, data1key + '週（右）', 'BR', data1key + '週（左）', 'BL', data2key + '週（右）', 'AR', data2key + '週（左）', 'AL',);
  const gG = new GraphData('表タイトルD', chartdata, data1key + '週（右）', 'BR', data1key + '週（左）', 'BL', data2key + '週（右）', 'AR', data2key + '週（左）', 'AL',);

  // ユーザ選択ボックス表示内容
  const selectData = [
    'userA',
    'userB',
    'userC',
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Grid container justify="center" spacing={2}>
            <Grid item >
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  labelId="selectuser-label"
                  id="selectuser"
                  value={selectUser}
                  onChange={(e) => { setSelectUser(e.target.value) }}
                >
                  {selectData.map((item, keyIndex) =>
                    <MenuItem key={keyIndex} value={item} >{item}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item >
              <DatePickerContext.Provider value={resource}>
                <WorkDatePicker />
              </DatePickerContext.Provider>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <ChartDataContext.Provider value={gA}>
            <GraphA />
          </ChartDataContext.Provider>
          <ChartDataContext.Provider value={gB}>
            <GraphA />
          </ChartDataContext.Provider>
          <ChartDataContext.Provider value={gC}>
            <GraphA />
          </ChartDataContext.Provider>
          <ChartDataContext.Provider value={gD}>
            <GraphA />
          </ChartDataContext.Provider>
          <ChartDataContext.Provider value={gE}>
            <GraphA />
          </ChartDataContext.Provider>
          <ChartDataContext.Provider value={gF}>
            <GraphA />
          </ChartDataContext.Provider>
          <ChartDataContext.Provider value={gG}>
            <GraphA />
          </ChartDataContext.Provider>
        </Grid>
      </Grid>
    </>
  );
}
