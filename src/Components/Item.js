import React, { Component } from 'react';
//import './Item.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Item extends Component {
  render() {
    const { id, name, price, image_url } = this.props.item;
    return (
      <li>
        <div>
          <p>{name}</p>
          <p>{price}</p>
          <img src={image_url} alt="Inventory Item" />
        </div>
        <div>
          <button onClick={() => this.props.add(id)}>Add to Cart</button>
          <button onClick={() => this.props.remove(id)}>
            Remove from Cart
          </button>
        </div>
      </li>
    );
  }
}

Item.propTypes = {};

Item.defaultProps = {
  // item: {
  //   id: 0,
  //   name: 'Cake',
  //   price: '$5',
  //   image_url: ''
  // },
  // add: () => '',
  // remove: () => ''
};

export default Item;
