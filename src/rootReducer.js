import sampleData from './data.json';

const INITIAL_STATE = { items: sampleData.items, cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PLACEHOLDER': {
      // do stuff
      return { ...state };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
