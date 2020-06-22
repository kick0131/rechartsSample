import React, { useState, createContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
// ユーザコンポーネント
import WorkDatePickerFor03 from './WorkDatePickerFor03';
import Graph03 from './Graph03';

// 表示させたいデータ群(DynamoDBを想定)
import * as json from '../../data/work.json';
const chartData = json.dorsiflexion_mean;

export const DatePickerContext = createContext('');
export const ChartDataContext = createContext('');

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
}));

// DynamoDBのデータを加工
function datasplit() {
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
  //  chartdata = datasplit();
  var beforeKey = formatDate(beforeDate);
  var afterKey = formatDate(afterDate);

  // 投入データ
  // 現時点の想定では、日付をデータキーをするのでそのまま凡例名として使用する
  const gA = new GraphData('高頻度計測データA', chartData, beforeKey + '(介入前)', beforeKey, afterKey + '(介入後)', afterKey);

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
                <WorkDatePickerFor03 />
              </DatePickerContext.Provider>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <ChartDataContext.Provider value={gA}>
            <Graph03 />
            <Graph03 />
            <Graph03 />
            <Graph03 />
            <Graph03 />
            <Graph03 />
            <Graph03 />
          </ChartDataContext.Provider>
        </Grid>
      </Grid>
    </>
  );
}
