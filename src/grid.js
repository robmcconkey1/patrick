import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hoverbox from './hover'
import Hoverbox2 from './hover2';
import Hoverbox3 from './hover3';

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
          <Hoverbox/>
        </Grid>
        <Grid item xs={4}>
          <Hoverbox2/>
        </Grid>
        <Grid item xs={4}>
          <Hoverbox3/>
        </Grid>

      </Grid>
    </div>
  );
}
