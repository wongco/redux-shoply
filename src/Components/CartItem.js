import React, { Component } from 'react';
//import './Item.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { name, count, price, image_url } = this.props.itemDetails;
    const id = this.props.id;
    return (
      <div>
        <div>
          <div>
            <img src={image_url} alt="Product" />
          </div>
          <p>{name}</p>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Price</th>
                <th>Count</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{price}</td>
                <td>{count}</td>
                <td>{(price * count).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <button onClick={() => this.props.add(id)}> + </button>
            <button onClick={() => this.props.remove(id)}> - </button>
          </div>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {};

CartItem.defaultProps = {};

export default CartItem;
