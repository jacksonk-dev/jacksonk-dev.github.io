import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3),
    margin: `${theme.spacing(3)}px ${theme.spacing(1)}px`,
  },
  typo: {
    fontFamily: 'Sexy Beachy',
    fontSize: 40,
    color: 'blue',
  },
}));

const FootNote = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="subtitle1"
        className={classes.typo}
      >
        &copy;
        {'    '}
        jacksonk.dev
        {`  ${new Date().getFullYear()}`}
      </Typography>
    </div>
  );
};

export default FootNote;
