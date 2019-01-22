import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
  height: 50px;
`;

const StyledHome = styled.div`
  background-color: lightgray;
  box-shadow: 5px 5px 10px darkgray;
  border-radius: 10px;
  padding: 10px;
`;

const StyledCartInfo = styled.div`
  background-color: lightgray;
  box-shadow: 5px 5px 10px darkgray;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
`;

class NavBar extends Component {
  render() {
    const values = Object.values(this.props.cart);
    const totalPrice = values
      .reduce((acc, next) => acc + next.price * next.count, 0)
      .toFixed(2);
    const totalItems = values.reduce((acc, next) => acc + next.count, 0);
    return (
      <StyledNav>
        <StyledHome>SHOPPPPPLY-Future Link</StyledHome>
        <StyledCartInfo>
          <div>Shopping Cart Total: {totalPrice}</div>
          <div>Total Items: {totalItems}</div>
          <div>Actual Cart</div>
        </StyledCartInfo>
      </StyledNav>
    );
  }
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
