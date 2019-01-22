import React, { Component } from 'react';
import NavBarContainer from '../Containers/NavBarContainer';
import InventoryContainer from '../Containers/InventoryContainer';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarContainer />
        <InventoryContainer />
      </div>
    );
  }
}

export default App;
