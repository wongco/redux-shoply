import React, { Component } from 'react';
import { connect } from 'react-redux';
import Inventory from '../Components/Inventory';

class InventoryContainer extends Component {
  render() {
    return <Inventory {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps)(InventoryContainer);
