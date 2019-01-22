import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../Components/NavBar';

class NavBarContainer extends Component {
  render() {
    return <NavBar {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(NavBarContainer);
