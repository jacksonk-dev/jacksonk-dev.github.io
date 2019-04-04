import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import inContainer from './container';
import Basic from './basic';
import Online from './online';

const styles = {
  root: {
    display: 'grid',
    gridGap: '8px',
    justifyItems: 'center',
    width: '98%',
    margin: 'auto',
    '@media (min-width: 1250px)': {
      gridTemplateColumns: '1fr 2fr',
    },
  },
};

const Profile = ({
  classes,
  data,
}) => (
  <div className={classes.root}>
    <Basic data={data} />
    <Online data={data} />
  </div>
);

Profile.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
};


export default withStyles(styles)(inContainer(Profile));
