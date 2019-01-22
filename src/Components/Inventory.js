import React, { Component } from 'react';
//import './Inventory.css';
import styled from 'styled-components';
import ItemContainer from '../Containers/ItemContainer';

class Inventory extends Component {
  render() {
    return (
      <div className="Inventory">
        <ul>
          {this.props.items.map(item => (
            <ItemContainer key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

Inventory.propTypes = {};

Inventory.defaultProps = {
  items: []
};

export default Inventory;
