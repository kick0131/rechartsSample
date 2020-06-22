import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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
      <Card>
        <CardContent>
          {props.children}
        </CardContent>
      </Card>
    </main>
  );

  return renderParam;
};
