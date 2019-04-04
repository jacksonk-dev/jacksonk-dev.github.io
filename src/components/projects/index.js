import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import inContainer from './container';

const styles = theme => ({
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
    width: 'fit-content',
    minWidth: 100,
    borderRadius: 25,
    padding: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
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
});

const Profile = ({ classes, projects }) => (
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
                <a
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  key={reactKey}
                  className={classes.link}
                >
                  {linkText || 'Check out'}
                </a>
              </Typography>
            </CardContent>
          </Card>
        );
      })
    }
  </div>
);

Profile.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};


export default withStyles(styles)(inContainer(Profile));
