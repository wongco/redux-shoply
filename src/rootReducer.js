import sampleData from './data.json';
import { ADD, REMOVE } from './actionTypes';

const INITIAL_STATE = { items: sampleData.items, cart: {} };

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
        const inventoryItem = state.items.find(item => item.id === payloadId);
        item = { ...inventoryItem };
        delete item[payloadId];
        // refactor to not use delete
        item.count = 1;
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
    default: {
      return state;
    }
  }
}

export default rootReducer;
