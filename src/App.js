import React, { Component } from 'react';
import './App.css';
import Router from './Router'
import { withRouter } from 'react-router-dom';

class App extends Component {

  navigate(param) {
    this.props.history.location.pathname = '/';
    this.props.history.push(param);
  }

  render() {
    return (
      <div className="App">
          <Router />
      </div>
    );
  }
}

export default withRouter(App);
