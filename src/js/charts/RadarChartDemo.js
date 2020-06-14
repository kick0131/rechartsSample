import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend } from 'recharts';

//表示させたいデータ群
import * as json from '../../data/chartdata.json';
const chartdata = json.score01;

const renderParam = (
  <RadarChart // レーダーチャートのサイズや位置、データを指定
    height={400} //レーダーチャートの全体の高さを指定
    width={500} //レーダーチャートの全体の幅を指定
    data={chartdata} //ここにArray型のデータを指定
  >
    <PolarGrid stroke="#444" strokeDasharray="3 3"/> // レーダーのグリッド線を表示
    <Legend wrapperStyle={{ color:'#333', backgroundColor: '#CEFFCE', border: '1px solid #333', borderRadius: 3}}/> // 凡例を表示
    <PolarAngleAxis
      dataKey="key" //Array型のデータの、数値を表示したい値のキーを指定
    />
    <Radar //レーダーの色や各パラメーターのタイトルを指定
      name="Aさん"  //hoverした時に表示される名前を指定 
      dataKey="valueA" //Array型のデータのパラメータータイトルを指定
      stroke="#8884d8"  //レーダーの線の色を指定
      fill="#8884d8" //レーダーの中身の色を指定
      fillOpacity={0.6} //レーダーの中身の色の薄さを指定
      isAnimationActive={false}
    />
    <Radar //レーダーの色や各パラメーターのタイトルを指定
      name="Bさん"  //hoverした時に表示される名前を指定 
      dataKey="valueB" //Array型のデータのパラメータータイトルを指定
      stroke="#82ca9d"  //レーダーの線の色を指定
      fill="#82ca9d" //レーダーの中身の色を指定
      fillOpacity={0.6} //レーダーの中身の色の薄さを指定
      isAnimationActive={false}
    />
  </RadarChart>
);

export default () => {
  return renderParam;
}
