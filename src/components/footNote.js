import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.unit * 3,
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit}px`,
  },
  typo: {
    color: '#000',
  },
});

const FootNote = ({ classes }) => (
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

FootNote.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(FootNote);
