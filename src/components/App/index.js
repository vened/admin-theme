import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="defaultTheme App">
        <Sidebar />
      </div>
    );
  }
}

export default App;
