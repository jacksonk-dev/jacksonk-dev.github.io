import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import SideMenu from './components/sideMenu';
import Content from './components/content';

const styles = {
  root: {
    display: 'flex',
  },
};

const App = () => (
  <div style={styles.root}>
    <SideMenu />
    <div>
      <Switch>
        <Route path="/:item" component={({ match: { params } }) => (<Content {...params} />)} />
        <Route path="" component={() => (<Content item="profile" />)} />
      </Switch>
    </div>
  </div>
);

export default App;
