import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RadarChartDemo from './charts/RadarChartDemo';
import LineChartDemo from './charts/LineChartDemo';
import PieChartDemo from './charts/PieChartDemo';
import BarChartDemo from './charts/BarChartDemo';
import DatePickerDemo from './material/DatePickerDemo';
import WorkGraph01 from './work/WorkGraph01';
import WorkGraph02 from './work/WorkGraph02';
import SideBar from './SideBar';
import MainContents from './MainContents';
import Typography from '@material-ui/core/Typography'

export default () => {

  return (
    <div>
      <div className='my-grid'>
        <header className='my-grid-item'><Typography>ダッシュボード</Typography></header>
        <Router>
          <aside className='my-grid-item'><SideBar /></aside>
          <main className='my-grid-item'>
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
          </main>
        </Router>
        <footer className='my-grid-item'><Typography>コピーライト</Typography></footer>
      </div>
    </div>
  );
};


