import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './card'
import Card2 from './card2'
import Card3 from './card3'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card/>
        </Grid>
        <Grid item xs={4}>
          <Card2/>
        </Grid>
        <Grid item xs={4}>
          <Card3/>
        </Grid>

      </Grid>
    </div>
  );
}
