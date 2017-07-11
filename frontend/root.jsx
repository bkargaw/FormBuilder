import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import configureStore from './store/store'
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Create from './components/create/create_container';
import Preview from './components/preview/preview_container';
import Export from './components/export/export_container';
import splashPage from './splash_page'

class Root extends React.Component {
  render() {
    return(
      <Provider store={ store }>
        <Router history={ hashHistory }>
          <Route path='/' component={ App }>
            <IndexRoute component={splashPage} />
            <Route path='/create' component={ Create }/>
            <Route path='/preview' component={ Preview }/>
            <Route path='/export' component={ Export }/>
          </Route >
        </Router>
      </Provider>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let forms = window.localStorage.getItem('forms', forms)
  let preloadedState = forms ? {forms: JSON.parse(forms)} : {}
  let store = configureStore(preloadedState);
  window.store = store;
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
