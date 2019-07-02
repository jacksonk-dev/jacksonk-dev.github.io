import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import inContainer from './container';
import Basic from './basic';
import Online from './online';

const useStyles = makeStyles({
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
});

const Profile = ({
  data,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Basic data={data} />
      <Online data={data} />
    </div>
  );
};

Profile.propTypes = {
  data: PropTypes.shape({}).isRequired,
};


export default inContainer(Profile);
