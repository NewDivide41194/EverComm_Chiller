import React, { Component } from 'react';
import './App.css';
import Router from './network/Router'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  navigate(param) {
    this.props.history.location.pathname = '/';
    this.props.history.push(param);
  }

  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
