import React, { Component } from 'react';
//import './Inventory.css';
import styled from 'styled-components';
import Item from './Item';

const Inventory = () => {
  return (
    <div className="Inventory">
      <ul>
        {this.props.items.map(item => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
};

Inventory.propTypes = {};

Inventory.defaultProps = {};

export default Inventory;
