import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainContents: {
    width: '100%',
    height: '100%',
  },

  // メニューバーの高さ領域
  appBarSpacer: theme.mixins.toolbar,
}));

export default (props) => {
  const classes = useStyles();

  const renderParam = (
    <main className={classes.mainContents}>
      <div className={classes.appBarSpacer} />
      {props.children}
    </main>
  );

  return renderParam;
};
