import React, { useState, createContext } from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';
import moment from 'moment'

// ユーザコンポーネント
import NormalGraph from './NormalGraph';
import HighFrequencyGraph from './HighFrequencyGraph';
import { formatDatePickerDate, GraphData } from '../parts/GraphComponent';

// 表示させたいデータ群(DynamoDBを想定)
import * as json from '../../data/work.json';
var chartData = json.speed_mean;

export const ChartDataContext = createContext('');

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
}));



// レンダリングメイン処理
export default (props) => {

  // local style
  const classes = useStyles();

  // DatePicker
  const [beforeDate, setBeforeDate] = useState(null);
  const [afterDate, setAfterDate] = useState(null);
  // Select
  const [selectUser, setSelectUser] = useState('');

  // ユーザ選択イベント
  const selectUserAction = (user) => {
    setSelectUser(user);

    // DatePickerの内容を初期化
    setBeforeDate(null);
    setAfterDate(null);
  }

  const handleBeforeDateChange = (date) => {
    console.log("=== handleBeforeDateChange :" + date);
    setBeforeDate(date);
  };
  const handleAfterDateChange = (date) => {
    console.log("=== handleAfterDateChangef :" + date);
    setAfterDate(date);
  };


  // 整形してグラフデータに投入
  var data1key = formatDatePickerDate(beforeDate);
  var data2key = formatDatePickerDate(afterDate);

  // ★グラフ別投入データ
  var gA = new GraphData();

  // ユーザ選択ボックス表示内容
  var selectData = [
    'userA',
    'userB',
    'userC',
  ];

  // 週末判定
  function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  // 条件に応じてグラフ内容を切り替える
  const GraphMain = () => {
    // URLのパス情報に含まれているモード番号に応じたグラフを描画
    const { mode } = useParams();
    var iMode = parseInt(mode, 10);
    console.log("=== GraphMain(Mode) : " + iMode);

    switch (iMode) {

      // 固定X軸
      case 1:
        gA.chartTitle = '固定X軸';
        gA.chartData = json.monthsample;
        gA.chartKey = 'day'
        gA.g1name = 'stride_mean';
        gA.g1key = 'stride_mean';
        gA.g2name = 'planterflextion_mean';
        gA.g2key = 'planterflextion_mean';
        gA.g3name = 'dorsiflexion_mean';
        gA.g3key = 'dorsiflexion_mean';
        gA.g4name = 'circumduction_mean';
        gA.g4key = 'circumduction_mean';
        gA.interval = 2;

        return (
          <>
            <ChartDataContext.Provider value={gA}>
              <NormalGraph/>
            </ChartDataContext.Provider>
          </>
        );

      // 可変X軸
      case 2:
        // ★ToDo 本来は日時指定はしない。ダミー用の暫定処置
        var domainMin = moment("2020-06-18 00:00:00", 'yyyy-MM-DD HH:mm:ss').unix();
        var domainMax = moment("2020-06-19 00:00:00", 'yyyy-MM-DD HH:mm:ss').unix();

        gA.chartTitle = '可変X軸';
        gA.chartData = json.dorsiflexion_mean;
        gA.chartKey = 'time'
        gA.g1name = data1key;
        gA.g1key = data1key;
        gA.g2name = data2key;
        gA.g2key = data2key;
        gA.domain = [domainMin, domainMax];
        gA.tickFormatter = (unixTime) => moment(unixTime, 'X').format('HH時mm分');

        return (
          <>
            <ChartDataContext.Provider value={gA}>
              <HighFrequencyGraph />
            </ChartDataContext.Provider>
          </>
        );
      default:
        console.log('★★★NGルート★★★');
        break;
    }
  }

  return (
    <>
      <Card>
        <CardContent>
          <Grid item xs={12} >
            <Grid container justify="center" spacing={2}>
              <Grid item >
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    labelId="selectuser-label"
                    id="selectuser"
                    value={selectUser}
                    onChange={(e) => { selectUserAction(e.target.value) }}
                  >
                    {selectData.map((item, keyIndex) =>
                      <MenuItem key={keyIndex} value={item} >{item}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    id="date-pickerbefore"
                    label="Before"
                    value={beforeDate}
                    onChange={handleBeforeDateChange}
                    shouldDisableDate={disableWeekends}
                    format="yyyy/MM/dd"
                  />
                  <DatePicker
                    id="date-pickerafter"
                    label="After"
                    value={afterDate}
                    onChange={handleAfterDateChange}
                    shouldDisableDate={disableWeekends}
                    format="yyyy/MM/dd"
                  />
                </MuiPickersUtilsProvider>

              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} >
            <GraphMain />
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
