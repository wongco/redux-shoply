import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../Components/Cart';
import { applyDiscount } from '../actionCreators';

class CartContainer extends Component {
  render() {
    return <Cart {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { cart: state.cart, discountRate: state.discountRate };
}

export default connect(
  mapStateToProps,
  { applyDiscount }
)(CartContainer);
