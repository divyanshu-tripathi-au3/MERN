import React, { Component } from 'react';

import './App.css'

import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Temperature convertor</h1>
        <hr/>
        <center><Container /></center>
      </div>
    );
  }
}

export default App;
