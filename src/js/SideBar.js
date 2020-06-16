import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export default () => {
    console.log('SideBar');

    // ボタン押下イベント
    const handleClickButton = () => {
        alert('ボタンが押下されました');
    };

    const render = (
        <div className="userbotton">
            <Link to=""><Button variant="outlined" color="primary" style={{ color: "#333" }}>初期表示　　　　</Button></Link>
            <Link to="radar"><Button variant="outlined" color="primary">レーダーチャート</Button></Link>
            <Link to="line"><Button variant="outlined" color="primary" >ラインチャート　</Button></Link>
            <Link to="pie"><Button variant="outlined" color="primary" >パイチャート　　</Button></Link>
            <Link to="bar"><Button variant="outlined" color="primary" >バーチャート　　</Button></Link>
            <Link to="datepicker"><Button variant="outlined" color="primary" >カレンダー　　　</Button></Link>
            <Link to="insole1"><Button variant="outlined" color="primary" >サンプル１　　　</Button></Link>
            <Link to="insole2"><Button variant="outlined" color="primary" >サンプル２　　　</Button></Link>
            <Link to="insole3"><Button variant="outlined" color="primary" >サンプル３　　　</Button></Link>
            <Link to="insole4"><Button variant="outlined" color="primary" >サンプル４　　　</Button></Link>
        </div >
    );
    return render;
};
