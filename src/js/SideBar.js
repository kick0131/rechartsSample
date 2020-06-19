import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { LoginInfoContext } from './Layout'

export default () => {

    // 親コンポーネントから更新用のハンドラと更新元情報を取得
    const loginInfo = useContext(LoginInfoContext);

    const SideBarRander = () => {
        console.log('=== SideBarRander');
        console.log(loginInfo.data.isLogin);

        // ★ToDo:ログイン状態に応じて機能の有効無効を制御したい
        // ★うまく動いていない(常に初期値false)
        if (loginInfo.data.isLogin) {
            return (
                <aside></aside>
            );

        } else {

            return (
                <aside>
                    <Link to=""><Button color="primary">Top</Button></Link>
                    {/* <Link to="radar"><Button color="primary">レーダーチャート</Button></Link>
                    <Link to="line"><Button color="primary" >ラインチャート　</Button></Link>
                    <Link to="pie"><Button color="primary" >パイチャート　　</Button></Link>
                    <Link to="bar"><Button color="primary" >バーチャート　　</Button></Link>
                    <Link to="datepicker"><Button color="primary" >カレンダー　　　</Button></Link> */}
                    <Link to="insole1"><Button color="primary" >サンプル１　　　</Button></Link>
                    <Link to="insole2"><Button color="primary" >サンプル２　　　</Button></Link>
                    <Link to="insole3"><Button color="primary" >サンプル３　　　</Button></Link>
                    <Link to="insole4"><Button color="primary" >サンプル４　　　</Button></Link>
                </aside >
            );
        }
    }

    return (<SideBarRander />);
}
