import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardContent, Button, IconButton, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    animation: '.6s ease-in 0s 1 slideInFromRight',
  },
  header: {
    fontFamily: 'Sexy Beachy',
    fontSize: 48,
    color: 'cyan',
  },
  container: {
    padding: `0 ${theme.spacing(1)}px`,
    '@media(max-width: 576px)': {
      textAlign: 'center',
    },
  },
  link: {
    width: '100px',
    height: '100px',
    padding: '10%',
    margin: theme.spacing(1),
    border: '4px solid white',
    borderRadius: '50%',
    textTransform: 'none',
  },

  icon: {
    fontSize: 50,
    color: 'cyan',
  },
  iconPlaceholder: {
    color: 'cyan',
  },
}));

const Online = ({ data: { online } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader classes={{ title: classes.header }} title="Find me online" />
      <CardContent className={classes.container}>
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
                title={app}
                key={reactKey}
                className={classes.link}
              >
                <IconButton>
                  {
                    Icon
                      ? <Icon className={classes.icon} />
                      : <span className={classes.iconPlaceholder}>{app}</span>
                  }
                </IconButton>
              </Button>
            );
          })
        }
      </CardContent>
    </Card>
  );
};

Online.propTypes = {
  data: PropTypes.shape({
    online: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default Online;
