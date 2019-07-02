import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardContent, CardMedia, Typography, Divider, Button, makeStyles,
} from '@material-ui/core';
import inContainer from './container';

const useStyles = makeStyles(theme => ({
  root: {
    width: '98%',
    margin: 'auto',
  },
  media: {
    width: 'auto',
    height: 200,
  },
  link: {
    color: 'cyan',
    border: '1px solid cyan',
    minWidth: 100,
    marginRight: theme.spacing(1),
    display: 'inline-block',
    textAlign: 'center',
    textTransform: 'none',
    '&:hover': {
      color: '#000',
      backgroundColor: 'cyan',
    },
  },
  marginTop: {
    marginTop: 16,
  },
  divider: {
    backgroundColor: 'white',
    margin: '0 16px',
  },
  projectContainer: {
    width: '100%',
    margin: '8px auto',
  },
  '@media (min-width: 640px)': {
    root: {
      display: 'grid',
      gridGap: '8px',
      gridTemplateColumns: '30% 30% 30%',
    },
  },
}));

const Profile = ({ projects }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
      projects.map(({
        name, description, image, url, linkText,
      }, index) => {
        const reactKey = `${name}-${index}`;
        return (
          <Card key={reactKey} className={classes.projectContainer}>
            <CardMedia
              image={image}
              className={classes.media}
            />
            <CardHeader title={name} />
            <Divider className={classes.divider} />
            <CardContent>
              <Typography>
                {description}
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.marginTop}
              >
                <Button
                  component="a"
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  key={reactKey}
                  className={classes.link}
                >
                  {linkText || 'Check out'}
                </Button>
              </Typography>
            </CardContent>
          </Card>
        );
      })
    }
    </div>
  );
};

Profile.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};


export default inContainer(Profile);
