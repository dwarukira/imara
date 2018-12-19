import React, { Component } from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard';
import WrappedLoginForm from './Pages/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WrappedLoginForm />
      </div>
    );
  }
}

export default App;
