import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../Components/CartItem';
import { add, remove } from '../actionCreators';

class CartItemContainer extends Component {
  render() {
    return <CartItem {...this.props} />;
  }
}

export default connect(
  null,
  { add, remove }
)(CartItemContainer);
