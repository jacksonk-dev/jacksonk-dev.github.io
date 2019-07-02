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
    color: '#000',
    fontSize: 50,
    fontFamily: 'Sexy Beachy',
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
        je-kaypro
        {`  ${new Date().getFullYear()}`}
      </Typography>
    </div>
  );
};

export default FootNote;
