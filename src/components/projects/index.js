import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardActionArea, CardHeader, CardMedia, Typography, makeStyles,
} from '@material-ui/core';
import CardView from '../../views/card';
import inDialog from '../../containers/inDialog';
import inContainer from './container';

const DialoggedCard = inDialog(CardView);

const useStyles = makeStyles(theme => ({
  root: {
    animation: '.6s ease-in 0s 1 slideInFromTop',
  },
  header: {
    fontFamily: 'Brendan',
    fontSize: 60,
    color: 'blue',
    textAlign: 'center',
  },
  projectsContainer: {
    width: '98%',
    margin: 'auto',
  },
  projectName: {
    color: 'cyan',
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
  '@media (min-width: 600px)': {
    projectsContainer: {
      display: 'grid',
      gridGap: '8px',
      gridTemplateColumns: 'repeat(auto-fill,250px)',
      overflowY: 'auto',
    },
  },
  '@media (min-width: 972px)': {
    projectsContainer: {
      gridTemplateColumns: 'repeat(auto-fill,400px)',
    },
  },
}));

const Profile = ({ projects }) => {
  const classes = useStyles();
  const [dialogItemIndex, setDialogItemIndex] = useState();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        Projects
      </Typography>
      <div className={classes.projectsContainer}>
        {
          projects.map(({ name, image }, index) => {
            const reactKey = `${name}-${index}`;
            return (
              <Fragment key={reactKey}>
                <Card
                  className={classes.projectContainer}
                >
                  <CardActionArea onClick={() => { setDialogItemIndex(index); }}>
                    <CardMedia
                      image={image}
                      className={classes.media}
                    />
                    <CardHeader classes={{ title: classes.projectName }} title={name} />
                  </CardActionArea>
                </Card>
                {
                  typeof dialogItemIndex !== 'undefined' && (
                    <DialoggedCard
                      item={projects[dialogItemIndex]}
                      open={dialogItemIndex !== undefined}
                      onClose={() => {
                        setDialogItemIndex(undefined);
                      }}
                    />
                  )
                }
              </Fragment>
            );
          })
        }
      </div>
    </div>
  );
};

Profile.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};


export default inContainer(Profile);
