import React, { Component } from 'react';
import Main from '../Main';
import './App.css';
import 'whatwg-fetch';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App_title">Online TV Series Library</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
