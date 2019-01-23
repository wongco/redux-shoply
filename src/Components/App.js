import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from '../Containers/NavBarContainer';
import InventoryContainer from '../Containers/InventoryContainer';
import CartContainer from '../Containers/CartContainer';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarContainer />
        <Switch>
          <Route exact path="/" render={() => <InventoryContainer />} />
          <Route exact path="/cart" render={() => <CartContainer />} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
