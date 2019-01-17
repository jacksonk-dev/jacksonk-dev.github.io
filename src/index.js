import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom/BrowserRouter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers);

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
