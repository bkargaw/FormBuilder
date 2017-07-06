import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import configureStore from './store/store'
import { Provider } from 'react-redux';


class Root extends React.Component {
  render() {
    return(
      <Provider store={ store }>
        <App/>
      </Provider>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = {};
  let store = configureStore(preloadedState);
  window.store = store;
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
