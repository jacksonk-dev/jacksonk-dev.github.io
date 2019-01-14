import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import SideMenu from './components/side-menu';
import Content from './components/content';

const styles = {
  root: {
    display: 'flex',
  },
};

const App = () => (
  <div style={styles.root}>
    <Switch>
      <Route path="/:active" component={({ match: { params } }) => (<SideMenu {...params} />)} />
      <Route path="" component={() => (<SideMenu active="profile" />)} />
    </Switch>
    <Switch>
      <Route path="/:item" component={({ match: { params } }) => (<Content {...params} />)} />
      <Route path="" component={() => (<Content item="profile" />)} />
    </Switch>
  </div>
);

export default App;
