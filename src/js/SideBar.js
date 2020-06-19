import React, { useContext, } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { LoginInfoContext } from './Layout'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';

export default () => {

    // 親コンポーネントから更新用のハンドラと更新元情報を取得
    const loginInfo = useContext(LoginInfoContext);

    const linkData = [
        ["", "Top"],
        // ["radar", "レーダーチャート　　　"],
        // ["line", "ラインチャート　"],
        // ["pie", "パイチャート　　"],
        // ["bar", "バーチャート　　"],
        // ["datepicker", "カレンダー　　　"],
        ["insole1", "サンプル１"],
        ["insole2", "サンプル２"],
        ["insole3", "サンプル３"],
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
                                <ListItem button onClick={() => handleLink(item[0])}>
                                    <ListItemIcon>
                                        <AccountBoxRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item[1]} />
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
