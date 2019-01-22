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

const styles = {
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
    borderRadius: 25,
    marginRight: 8,
    padding: 8,
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
    marginTop: 16,
  },
  divider: {
    backgroundColor: 'white',
    margin: '0 16px',
  },
  projectContainer: {
    width: '100%',
    margin: '8px auto',
    backgroundColor: '#000',
  },
  '@media (min-width: 640px)': {
    root: {
      display: 'grid',
      gridGap: '8px',
      gridTemplateColumns: '30% 30% 30%',
    },
  },
};

const textStyles = {
  root: {
    color: '#fff',
  },

  title: {
    color: '#fff',
  },
};

const StyledCardHeader = withStyles(textStyles)(CardHeader);
const StyledTypograhpy = withStyles(textStyles)(Typography);

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
            <StyledCardHeader title={name} />
            <Divider className={classes.divider} />
            <CardContent>
              <StyledTypograhpy>
                {description}
              </StyledTypograhpy>
              <Typography
                variant="subheading"
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
