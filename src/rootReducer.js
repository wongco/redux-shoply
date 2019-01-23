import sampleData from './data.json';
import { ADD, REMOVE, APPLY_DISCOUNT } from './actionTypes';

const INITIAL_STATE = { items: sampleData.items, cart: {}, discountRate: 0 };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD: {
      Object.freeze(state.cart);
      const cart = { ...state.cart };
      const payloadId = action.payload.id;
      Object.freeze(state.cart[payloadId]);
      let item;
      if (payloadId in state.cart) {
        item = { ...cart[payloadId] };
        item.count = item.count + 1;
      } else {
        // adding an item to the cart with count of 1
        const inventoryItem = state.items.find(item => item.id === payloadId);
        const { id, ...inventoryDetails } = inventoryItem;
        item = { ...inventoryDetails, count: 1 };
      }
      cart[payloadId] = item;
      return { ...state, cart };
    }

    case REMOVE: {
      Object.freeze(state.cart);
      const cart = { ...state.cart };
      const payloadId = action.payload.id;
      Object.freeze(state.cart[payloadId]);
      if (cart.hasOwnProperty(payloadId)) {
        const item = { ...cart[payloadId] };
        item.count = item.count ? item.count - 1 : 0;
        cart[payloadId] = item;
      }
      return { ...state, cart };
    }

    case APPLY_DISCOUNT: {
      switch (action.payload.discountCode) {
        case 'REMOVE10': {
          return { ...state, discountRate: 0.1 };
        }
        case 'REMOVE20': {
          return { ...state, discountRate: 0.2 };
        }
        case 'REMOVE30': {
          return { ...state, discountRate: 0.3 };
        }
        default: {
          return state;
        }
      }
    }

    default: {
      return state;
    }
  }
}

export default rootReducer;
