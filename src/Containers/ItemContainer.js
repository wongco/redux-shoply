import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../Components/Item';
import { add, remove } from '../actionCreators';

class ItemContainer extends Component {
  render() {
    return <Item {...this.props} />;
  }
}

export default connect(
  null,
  { add, remove }
)(ItemContainer);
