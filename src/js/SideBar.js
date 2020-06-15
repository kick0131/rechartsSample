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
            <Link to=""><Button variant="outlined" color="primary">初期表示　　　　</Button></Link>
            <Link to="radar"><Button variant="outlined" color="primary">レーダーチャート</Button></Link>
            <Link to="line"><Button variant="outlined" color="primary" >ラインチャート　</Button></Link>
            <Link to="pie"><Button variant="outlined" color="primary" >パイチャート　　</Button></Link>
            <Link to="bar"><Button variant="outlined" color="primary" >バーチャート　　</Button></Link>
            <Link to="datepicker"><Button variant="outlined" color="primary" >カレンダー　　　</Button></Link>
        </div >
    );
    return render;
};
