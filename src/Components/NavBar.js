import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  height: 50px;
`;

const StyledHome = styled.div`
  background-color: purple;
`;

const StyledCartInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
  background-color: green;
`;

const NavBar = () => {
  const total = 0;
  const totalItems = 5;
  return (
    <StyledNav>
      <StyledHome>SHOPPPPPLY-Future Link</StyledHome>
      <StyledCartInfo>
        <div>Shopping Cart Total: {total}</div>
        <div>Total Items: {totalItems}</div>
        <div>Future Link to Actual Cart</div>
      </StyledCartInfo>
    </StyledNav>
  );
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
