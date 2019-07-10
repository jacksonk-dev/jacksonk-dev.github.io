import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardContent, CardMedia, Typography, Divider, makeStyles,
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
      animation: '.6s ease-in 0s 1 slideInFromLeft'
  },
  title: {
    color: 'cyan',
    fontSize: 32,
  },
  media: {
    width: 'auto',
    height: 300,
  },
  description: {
  },
  link: {
    color: 'cyan',
    border: '1px solid cyan',
    borderRadius: 25,
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    width: 100,
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
      backgroundColor: 'cyan',
    },
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
  '@media (min-width: 640px)': {
    root: {
      minWidth: 450,
      width: '40%',
      margin: 0,
      height: 'fit-content',
    },
  },

  divider: {
    marginBottom: theme.spacing(2),
  },
}));

const Basic = ({
  data: {
    name, description, image,
  },
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        image={image}
        className={classes.media}
      />
      <CardHeader classes={{ title: classes.title }} title={name} />
      <CardContent>
        <Divider className={classes.divider} />
        <Typography className={classes.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

Basic.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Basic;
