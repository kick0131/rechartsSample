import React, { useState, useContext, } from 'react';
import { useHistory } from "react-router-dom";
import { LoginInfoContext } from './Layout'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LaptopIcon from '@material-ui/icons/Laptop';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ApartmentIcon from '@material-ui/icons/Apartment';

export default () => {

    // 親コンポーネントから更新用のハンドラと更新元情報を取得
    const loginInfo = useContext(LoginInfoContext);

    // サイドバー表示内容
    // [0]:アイコン
    // [1]:リンク先
    // [2]:テキスト
    const defaultIcon = <LaptopIcon />
    const linkData = [
        [defaultIcon, "", "Top"],
        // [defaultIcon, "radar", "レーダーチャート　　　"],
        // [defaultIcon, "line", "ラインチャート　"],
        // [defaultIcon, "pie", "パイチャート　　"],
        // [defaultIcon, "bar", "バーチャート　　"],
        // [defaultIcon, "datepicker", "カレンダー　　　"],
        [<AccountBoxRoundedIcon />, "insole1", "サンプル１"],
        [<AirportShuttleIcon />, "insole2", "サンプル２"],
        [<ApartmentIcon />, "insole3", "サンプル３"],
    ];

    // Linkコンポーネントのto相当の動作
    const history = useHistory();
    const handleLink = path => history.push(path);

    // サイドバーに表示する内容
    const SideBarContents = () => {
        return (
            <List component="nav">
                {linkData.map((item, keyIndex) =>
                    <ListItem key={keyIndex.toString()} button onClick={() => handleLink(item[1])}>
                        <ListItemIcon>{item[0]}</ListItemIcon>
                        <ListItemText primary={item[2]} />
                    </ListItem>
                )}
            </List>
        );
    }

    // 描画ロジック
    const SideBarRander = () => {
        console.log('=== SideBarRander');
        console.log(loginInfo.data.isLogin);

        // ★ToDo:ログイン状態に応じて機能の有効無効を制御したい
        // ★うまく動いていない(常にfalse)
        if (loginInfo.data.isLogin) {
            return (
                <nav></nav>
            );

        } else {
            return (
                <SideBarContents />
            );
        }
    }

    return (<SideBarRander />);
}
