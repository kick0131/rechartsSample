import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'
import { createMuiTheme,makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  paper: {
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
      <Grid container>
        <LoginInfoContext.Provider value={resource}>
          <Router>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={2}>
              <div></div>
            </Grid>
            <Grid item xs={10}>
              <MainContents>
                <Route extract path="/" ></Route>
                <Route path="/radar" component={RadarChartDemo}></Route>
                <Route path="/line" component={LineChartDemo}></Route>
                <Route path="/pie" component={PieChartDemo}></Route>
                <Route path="/bar" component={BarChartDemo}></Route>
                <Route path="/datepicker" component={DatePickerDemo}></Route>
                <Route path="/insole1" component={WorkGraph01}></Route>
                <Route path="/insole2" component={WorkGraph02}></Route>
                <Route path="/insole3" component={WorkGraph03}></Route>
                <Route path="/insole4" component={WorkGraph01}></Route>
              </MainContents>
            </Grid>
          </Router>
        </LoginInfoContext.Provider>
        <Grid container justify="center">
          <Grid item xs={12}>
            <footer className={classes.paper}><Typography>コピーライト</Typography></footer>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};


