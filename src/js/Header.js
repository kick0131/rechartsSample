import React, { useState, } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LoginDialog from './parts/LoginDialog';
import Drawer from '@material-ui/core/Drawer';
// ユーザコンポーネント
import SideBar from './SideBar'

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 1,
    // },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    // 通常状態のメニューバー
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    // 閉じた状態のメニューバー
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    // サイドバー
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

export default () => {
    const classes = useStyles();

    // DrawerのOnOff状態
    const [drawerState, setDrawerState] = useState(true);

    // DrawerOnOff切り替え
    const drawerStateToggle = () => {
        setDrawerState(!drawerState);
    }

    return (
        <>
            <AppBar
                position="fixed"
                className={
                    clsx(
                        classes.appBar,
                        {
                            [classes.appBarShift]: drawerState,
                        }
                    )
                }
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={drawerStateToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>ダッシュボード</Typography>
                    <LoginDialog />
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor='left'
                open={drawerState}
                onClose={drawerStateToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <SideBar />
            </Drawer>
        </>
    );
};
