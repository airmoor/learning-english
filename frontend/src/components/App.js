import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import Header from './layout/Header';
import Dashboard from './words/Dashboard';
import WordDelete from './words/WordDelete';
import WordEdit from './words/WordEdit';

import { Provider } from 'react-redux';
import store from '../store';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/delete/:id' component={WordDelete} />
            <Route exact path='/edit/:id' component={WordEdit} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
