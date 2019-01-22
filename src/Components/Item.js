import React from 'react';
//import './Item.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = () => {
  const { id, name, price, image_url } = this.props.item;
  return (
    <li>
      <div>Description Container</div>
      <div>
        <button onClick={() => this.props.add(id)}>Add to Cart</button>
        <button onClick={() => this.props.remove(id)}>Remove from Cart</button>
      </div>
    </li>
  );
};

Item.propTypes = {};

Item.defaultProps = {};

export default Item;
