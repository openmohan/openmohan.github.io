import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import MainComponent from './components/main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <MainComponent title="PortfolioFuns" />;
  }
}

export default hot(module)(App);
