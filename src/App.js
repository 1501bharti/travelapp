import React, { Component } from 'react';
import stylefile from '../src/components/stylefile';
import { withStyles } from '@material-ui/core/styles';
import HomePage from './components/homepage';
import TitleBar from './components/appbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <TitleBar/>
          <div className="App">
            <HomePage/>
          </div>
      </div>
    );
  }
}

export default withStyles(stylefile)(App);
