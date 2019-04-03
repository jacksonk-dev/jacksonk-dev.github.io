import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
  media: {
    width: 'auto',
    height: 300,
  },
  link: {
    color: 'cyan',
    border: '1px solid cyan',
    borderRadius: 25,
    marginRight: theme.spacing.unit,
    padding: theme.spacing.unit,
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
    marginTop: theme.spacing.unit * 2,
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
    marginBottom: theme.spacing.unit * 2,
  },
});

const Basic = ({
  data: {
    name, description, image,
  }, classes,
}) => (
  <Card className={classes.root}>
    <CardMedia
      image={image}
      className={classes.media}
    />
    <CardHeader title={name} />
    <CardContent>
      <Divider className={classes.divider} />
      <Typography>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

Basic.propTypes = {
  data: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Basic);
