import React, { Component } from 'react';
import { askForPermissioToReceiveNotifications } from './push-notification';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={askForPermissioToReceiveNotifications} >
            Click here to receive notifications
          </button>
        </header>
      </div>
    );
  }
}

export default App;
