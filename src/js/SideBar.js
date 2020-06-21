import React, { useContext, } from 'react';
import { useHistory } from "react-router-dom";
import { LoginInfoContext } from './Layout'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
    const defaultIcon = <AccountBoxRoundedIcon />
    const linkData = [
        ["", "Top"],
        // [defaultIcon, "radar", "レーダーチャート　　　"],
        // [defaultIcon, "line", "ラインチャート　"],
        // [defaultIcon, "pie", "パイチャート　　"],
        // [defaultIcon, "bar", "バーチャート　　"],
        // [defaultIcon, "datepicker", "カレンダー　　　"],
        [defaultIcon, "insole1", "サンプル１"],
        [<AirportShuttleIcon />,"insole2", "サンプル２"],
        [<ApartmentIcon />,"insole3", "サンプル３"],
    ];

    // Linkコンポーネントのto相当の動作
    const history = useHistory();
    const handleLink = path => history.push(path);

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
                <>
                    <aside>
                        <List component="nav">
                            {linkData.map((item, keyIndex) =>
                                <ListItem button onClick={() => handleLink(item[1])}>
                                    <ListItemIcon>{item[0]}</ListItemIcon>
                                    <ListItemText primary={item[2]} />
                                </ListItem>
                            )}
                        </List>
                    </aside >
                </>
            );
        }
    }

    return (<SideBarRander />);
}
