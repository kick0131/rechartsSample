import React, { useState, useContext, } from 'react';
import { useHistory } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LaptopIcon from '@material-ui/icons/Laptop';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ApartmentIcon from '@material-ui/icons/Apartment';

export default () => {

    // サイドバー表示内容
    // [0]:アイコン
    // [1]:リンク先
    // [2]:テキスト
    const defaultIcon = <LaptopIcon />
    const linkData = [
        [defaultIcon, "", "Top"],
        [defaultIcon, "/radar", "レーダーチャート　　　"],
        [defaultIcon, "/line", "ラインチャート　"],
        [defaultIcon, "/pie", "パイチャート　　"],
        [defaultIcon, "/bar", "バーチャート　　"],
        [defaultIcon, "/datepicker", "カレンダー　　　"],
        [<AccountBoxRoundedIcon />, "/graph/1", "固定X軸"],
        [<AirportShuttleIcon />, "/graph/2", "可変X軸"],
        // [<ApartmentIcon />, "graph/3", "サンプル３"],
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

    return (<SideBarContents />);
}
