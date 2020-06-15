import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RadarChartDemo from './charts/RadarChartDemo';
import LineChartDemo from './charts/LineChartDemo';
import PieChartDemo from './charts/PieChartDemo';
import BarChartDemo from './charts/BarChartDemo';
import DatePickerDemo from './material/DatePickerDemo';
import SideBar from './SideBar';
import MainContents from './MainContents';

export default () => {

  return (
    <div>
      <div className='my-grid'>
        <header className='my-grid-item'>図形描画</header>
        <Router>
          <aside className='my-grid-item'><SideBar /></aside>
          <main className='my-grid-item'>
            <MainContents>
              <Route extract path="/" ></Route>
              <Route path="/radar" component={RadarChartDemo}></Route>
              <Route path="/line" component={LineChartDemo}></Route>
              <Route path="/pie" component={PieChartDemo}></Route>
              <Route path="/bar" component={BarChartDemo}></Route>
              <Route path="/datepicker" component={DatePickerDemo}></Route>
            </MainContents>
          </main>
        </Router>
        <footer className='my-grid-item'>footer</footer>
      </div>
    </div>
  );
};


