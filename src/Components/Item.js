import React, { Component } from 'react';
//import './Item.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 50px;
  border-radius: 10px;
  /* box-shadow: 5px 5px 10px darkgray; */

  * {
    box-sizing: border-box;
  }
`;

const Title = styled.p``;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 20vw;
  display: flex;
  justify-content: center;
  border: 2px solid black;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;

class Item extends Component {
  render() {
    const { id, name, price, image_url } = this.props.item;
    return (
      <StyledItem>
        <TextContainer>
          <p>{name}</p>
          <p>{price}</p>
        </TextContainer>
        <ImageContainer>
          <StyledImage src={image_url} alt="Inventory Item" />
        </ImageContainer>
        <div>
          <button onClick={() => this.props.add(id)}>Add to Cart</button>
          <button onClick={() => this.props.remove(id)}>
            Remove from Cart
          </button>
        </div>
      </StyledItem>
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
