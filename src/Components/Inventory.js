import React, { Component } from 'react';
//import './Inventory.css';
import styled from 'styled-components';
import ItemContainer from '../Containers/ItemContainer';

const StyledInventory = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 80%;
`;

const StyledInventoryContainer = styled.div`
  display: flex;
  justify-content: center;
`;

class Inventory extends Component {
  render() {
    return (
      <StyledInventoryContainer className="Inventory">
        <StyledInventory>
          {this.props.items.map(item => (
            <ItemContainer key={item.id} item={item} />
          ))}
        </StyledInventory>
      </StyledInventoryContainer>
    );
  }
}

Inventory.propTypes = {};

Inventory.defaultProps = {
  items: []
};

export default Inventory;
