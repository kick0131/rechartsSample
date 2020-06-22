import React, { useState, Component, } from 'react';
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
import { drawerWidth } from './Layout'

const useStyles = makeStyles((theme) => ({
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
    // サイドバーの幅
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerOpen: {
        transition: theme.transitions.create('width', {
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        width: 0,
        transition: theme.transitions.create('width', {
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        // width: theme.spacing(7) + 1,
        // [theme.breakpoints.up('sm')]: {
        //     width: theme.spacing(9) + 1,
        // },
    },
}));

export default () => {
    const classes = useStyles();

    // DrawerのOnOff状態
    const [drawerState, setDrawerState] = useState(false);

    // DrawerOnOff切り替え
    const drawerStateToggle = () => {
        console.log('=== drawerStateToggle Called (now):' + drawerState)
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
                className={
                    clsx(classes.drawer, {
                        [classes.drawerOpen]: drawerState,
                        [classes.drawerClose]: !drawerState
                    })
                }
                variant="persistent"
                anchor='left'
                open={drawerState}
                classes={{
                    paper: clsx(classes.drawer, {
                        [classes.drawerOpen]: drawerState,
                        [classes.drawerClose]: !drawerState
                    }),
                }}
            >
                <SideBar />
            </Drawer>
            <div id="marginContainer" className={
                clsx(classes.drawerClose, {
                    [classes.drawerOpen]: drawerState
                })
            }></div>
        </>
    );
};
