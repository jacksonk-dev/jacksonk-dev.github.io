import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import withStyles from '@material-ui/core/styles/withStyles';
import SideMenu from './components/side-menu';
import Content from './components/content';

const styles = {
  root: {
    display: 'flex',
  },
  content: {
    padding: 32,
    width: '100%',
  },
};

const App = ({ classes }) => (
  <div className={classes.root}>
    <Switch>
      <Route path="/:active" component={({ match: { params } }) => (<SideMenu {...params} />)} />
      <Route path="" component={() => (<SideMenu active="profile" />)} />
    </Switch>
    <div className={classes.content}>
      <Switch>
        <Route path="/:active" component={({ match: { params } }) => (<Content {...params} />)} />
        <Route path="" component={() => (<Content active="profile" />)} />
      </Switch>
    </div>
  </div>
);

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(App);
