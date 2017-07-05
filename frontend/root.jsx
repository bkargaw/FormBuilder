import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import configureStore from './store/store'

class Root extends React.Component {
  render() {
    return(
        <App/>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState =
             {
             };
  let store = configureStore(preloadedState);
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
