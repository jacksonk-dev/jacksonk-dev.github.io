import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {

  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 0,
    padding: theme.spacing.unit * 3,
  },
  link: {
    width: '128px',
    height: '128px',
    padding: '10%',
    margin: theme.spacing.unit,
    border: '4px solid white',
    borderRadius: '50%',
    textTransform: 'none',
  },

  icon: {
    fontSize: 60,
    color: 'white',
  },
});

const Online = ({ data: { online }, classes }) => (
  <Card className={classes.root}>
    <CardHeader title="Find me online" />
    <CardContent className={classes.container}>
      <div>
        {
          online.map(({ app, link, Icon }, index) => {
            const reactKey = `${app}-link-${index}`;
            return (
              <Button
                variant="outlined"
                color="secondary"
                component="a"
                href={link}
                rel="noopener noreferrer"
                target="_blank"
                key={reactKey}
                className={classes.link}
              >
                <IconButton>
                  {
                    Icon
                      ? <Icon className={classes.icon} />
                      : app
                  }
                </IconButton>
              </Button>
            );
          })
        }
      </div>
    </CardContent>
  </Card>
);

Online.propTypes = {
  data: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Online);
