import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  // メニューバーの高さ領域
  appBarSpacer: theme.mixins.toolbar,
}));

export default (props) => {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.appBarSpacer} />
      <Card>
        <CardContent>
          {props.children}
        </CardContent>
      </Card>
    </main >
  );
};
