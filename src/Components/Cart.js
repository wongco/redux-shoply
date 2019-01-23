import React, { Component } from 'react';
//import './Inventory.css';
import styled from 'styled-components';
import CartItemContainer from '../Containers/CartItemContainer';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discountCode: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { cart } = this.props;
    const ids = Object.keys(cart);
    const subTotal = ids.reduce(
      (acc, id) => acc + cart[id].count * cart[id].price,
      0
    );
    const tax = subTotal * this.props.tax;
    const discount = this.props.discountRate * subTotal;
    return (
      <div>
        {ids.reduce((acc, id) => {
          if (cart[id].count) {
            acc.push(
              <CartItemContainer key={id} id={id} itemDetails={cart[id]} />
            );
          }
          return acc;
        }, [])}
        <div>
          <form
            onSubmit={evt => {
              evt.preventDefault();
              this.props.applyDiscount(this.state.discountCode);
            }}
          >
            <label htmlFor="discountCode">Discount Code: </label>
            <input
              name="discountCode"
              value={this.state.discountCode}
              type="text"
              placeholder="Code"
              onChange={this.handleChange}
            />
            <button>Apply Discount</button>
          </form>
          <table>
            <tbody>
              <tr>
                <td>Sub Total: </td>
                <td>{subTotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Tax: </td>
                <td>{tax.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Discount: </td>
                <td>{discount.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{(subTotal + tax - discount).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {};

Cart.defaultProps = {
  cart: {},
  tax: 0.15
};

export default Cart;
