import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { blue, green, purple, pink } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
// ユーザコンポーネント
import RadarChartDemo from './charts/RadarChartDemo';
import LineChartDemo from './charts/LineChartDemo';
import PieChartDemo from './charts/PieChartDemo';
import BarChartDemo from './charts/BarChartDemo';
import DatePickerDemo from './material/DatePickerDemo';
import WorkGraph01 from './work/WorkGraph01';
import WorkGraph02 from './work/WorkGraph02';
import WorkGraph03 from './work/WorkGraph03';
import Header from './Header';
import MainContents from './MainContents';
import Top from './Top';
// テーマ配色
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    h6: {
      color: '#333',
    },
    button: {
      textTransform: "none"
    },
  },
  props: {
    MuiCheckbox: {
      color: "primary"
    },
    MuiRadio: {
      color: "primary"
    },
    MuiSwitch: {
      color: "primary"
    },
    MuiTextField: {
      variant: "outlined"
    },
  },

});

// サイドバーの幅
export const drawerWidth = 200;

// このページ内に適用するスタイルシート
const useStyles = makeStyles((theme) => ({
  fotterpaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

// ログイン情報
class LoginInfo {
  constructor() {
    // ログインユーザ名
    this.loginUser = "";
    // ログイン状態
    this.isLogin = false;
    // メニューのOpen状態
    this.isMenuOpen = false;
  }
}
export const LoginInfoContext = createContext('');

export default () => {

  const classes = useStyles();

  // ログイン情報をコンテキストとして子コンポーネントに渡す
  var loginInfo = new LoginInfo();
  function getResource() {
    return {
      data: loginInfo
    }
  };
  const resource = getResource();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoginInfoContext.Provider value={resource}>
        <Router>
          <Grid container>
            <Header />
            <MainContents>
              <Route exact path="/" component={Top}></Route>
              <Route exact path="/radar" component={RadarChartDemo}></Route>
              <Route exact path="/line" component={LineChartDemo}></Route>
              <Route exact path="/pie" component={PieChartDemo}></Route>
              <Route exact path="/bar" component={BarChartDemo}></Route>
              <Route exact path="/datepicker" component={DatePickerDemo}></Route>
              <Route exact path="/insole1" component={WorkGraph01}></Route>
              <Route exact path="/insole2" component={WorkGraph02}></Route>
              <Route exact path="/insole3" component={WorkGraph03}></Route>
              <Route exact path="/insole4" component={WorkGraph01}></Route>
            </MainContents>
          </Grid>
        </Router>
      </LoginInfoContext.Provider >
      <Grid container justify="center">
        <Grid item xs={12}>
          <footer className={classes.fotterpaper}><Typography variant="h6">コピーライト</Typography></footer>
        </Grid>
      </Grid>
    </ThemeProvider >
  );
};


