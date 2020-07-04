import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { LoginInfoContext } from '../App'

// 登録ダイアログ
export default () => {
    const LOGIN_BTN_MSG = 'Login';
    const LOGOUT_BTN_MSG = 'Logout';
    var CANCEL_BTN_MSG = 'Cancel';
    var loginMessage = '';
    var idLabelName = 'ID';
    var passWordLabelName = 'PassWord';

    // 親コンポーネントから更新用のハンドラと更新元情報を取得
    const loginInfo = useContext(LoginInfoContext);

    // ダイアログ表示状態
    const [dialogView, setDialogView] = useState(false);
    // ダイアログ入力情報
    const [dialogid, setDialogid] = useState('');
    const [dialogpass, setDialogpass] = useState('');

    // ボタンメッセージ
    const [btnText, setBtnText] = useState(LOGIN_BTN_MSG);

    // ログイン・ログアウトボタン
    const handleLoginLogout = () => {
        console.log('=== ボタン押下');

        // 現在の状態に応じて動作を変える
        if (loginInfo.data.isLogin) {
            var logoutResult = true;

            // ★ToDo:ログアウト処理

            // ログアウト成功
            if (logoutResult) {
                console.log('=== ログアウト');
                // 状態・ボタン表示名変更
                loginInfo.data.isLogin = false;
                setBtnText(LOGIN_BTN_MSG);
            } else {
                console.log('ログアウト失敗');
            }

        } else {
            // ログインダイアログ表示
            setDialogView(true);
        }
    };

    // ダイアログ終了イベント
    const handleClose = () => {
        setDialogView(false);
    };

    // ログインイベント
    const handleLogin = () => {
        var loginResult = true;

        // ★ToDo:Cognito連携など
        console.log('ID:' + dialogid + ' PASS:' + dialogpass);

        // ログイン成功
        if (loginResult) {
            console.log('=== ログイン');
            // 状態・ボタン表示名変更
            loginInfo.data.isLogin = true;
            setBtnText(LOGOUT_BTN_MSG);
        } else {
            console.log('ログイン失敗');
        }

        setDialogView(false);
    };


    return (
        <div>
            <Button onClick={handleLoginLogout}>{btnText}</Button>
            <Dialog
                open={dialogView}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">{btnText}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{loginMessage}</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label={idLabelName}
                        type="text"
                        fullWidth
                        onChange={(e) => { setDialogid(e.target.value) }}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label={passWordLabelName}
                        type="password"
                        fullWidth
                        onChange={(e) => { setDialogpass(e.target.value) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">{CANCEL_BTN_MSG}</Button>
                    <Button onClick={handleLogin} color="primary">{btnText}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}