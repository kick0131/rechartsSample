import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RadarChartDemo from './charts/RadarChartDemo';
import LineChartDemo from './charts/LineChartDemo';
import PieChartDemo from './charts/PieChartDemo';
import BarChartDemo from './charts/BarChartDemo';
import DatePickerDemo from './material/DatePickerDemo';
import WorkGraph01 from './work/WorkGraph01';
import WorkGraph02 from './work/WorkGraph02';
import Header from './Header';
import SideBar from './SideBar';
import MainContents from './MainContents';
import Typography from '@material-ui/core/Typography'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue, green, purple, pink } from '@material-ui/core/colors';

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
      <div className='my-grid'>
        <LoginInfoContext.Provider value={resource}>
          <Header />
          <Router>
            <SideBar className='my-grid-item' />
            <MainContents>
              <Route extract path="/" component={WorkGraph02}></Route>
              <Route path="/radar" component={RadarChartDemo}></Route>
              <Route path="/line" component={LineChartDemo}></Route>
              <Route path="/pie" component={PieChartDemo}></Route>
              <Route path="/bar" component={BarChartDemo}></Route>
              <Route path="/datepicker" component={DatePickerDemo}></Route>
              <Route path="/insole1" component={WorkGraph01}></Route>
              <Route path="/insole2" component={WorkGraph02}></Route>
              <Route path="/insole3" component={WorkGraph01}></Route>
              <Route path="/insole4" component={WorkGraph01}></Route>
            </MainContents>
          </Router>
        </LoginInfoContext.Provider>
        <footer className='my-grid-item'><Typography>コピーライト</Typography></footer>
      </div>
    </ThemeProvider>
  );
};


