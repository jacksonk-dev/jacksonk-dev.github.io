import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import withStyles from '@material-ui/core/styles/withStyles';
import SideMenu from './components/side-menu';
import Content from './components/content';
import FootNote from './components/footNote';

const styles = {
  root: {
    width: '100vw',
  },
  '@media (min-width: 640px)': {
    root: {
      display: 'flex',
    },
    sideMenu: {
      position: 'fixed',
      zIndex: 10,
    },
    content: {
      padding: 16,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 10,
      marginLeft: 100,
    },
  },
};

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
    // fontFamily: 'Nixie One',
    h5: {
      fontSize: '1.2rem',
      fontWeight: 'lighter',
    },
  },
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <div className={classes.sideMenu}>
        <Switch>
          <Route path="/:active" component={({ match: { params } }) => (<SideMenu {...params} />)} />
          <Route path="/" component={() => (<SideMenu active="profile" />)} />
        </Switch>
      </div>
      <div className={classes.content}>
        <Switch>
          <Route path="/:active" component={({ match: { params } }) => (<Content {...params} />)} />
          <Route path="/" component={() => (<Content active="profile" />)} />
        </Switch>
        <FootNote />
      </div>
    </MuiThemeProvider>
  </div>
);

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(App);
