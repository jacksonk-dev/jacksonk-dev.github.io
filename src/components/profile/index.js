import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import inContainer from './container';

const styles = {
  root: {
    minWidth: 300,
    width: '40%',
    height: 'fit-content',
    backgroundColor: '#000',
  },
  media: {
    width: 'auto',
    height: 300,
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

const Profile = ({ classes, data }) => (
  <Card className={classes.root}>
    <CardMedia
      image="/images/profilePic.jpg"
      className={classes.media}
    />
    <StyledCardHeader title={data.name} />
    <CardContent>
      <StyledTypograhpy>
        {data.description}
      </StyledTypograhpy>
      <Typography
        variant="subheading"
        className={classes.marginTop}
      >
        {
            Object.entries(data.contacts).map(([name, link], index) => {
              const reactKey = `${name}-link-${index}`;
              return (
                <a
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank"
                  key={reactKey}
                  className={classes.link}
                >
                  {name}
                </a>
              );
            })}
      </Typography>
    </CardContent>
  </Card>
);

Profile.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
};


export default withStyles(styles)(inContainer(Profile));
