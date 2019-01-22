import rootReducer from './rootReducer';
import { add, remove } from './actionCreators';

describe('actions function as intended', () => {
  let state;
  beforeAll(() => {
    state = {
      items: [
        {
          id: 1,
          name: 'tv',
          price: 219.99,
          image_url:
            'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue'
        }
      ],
      cart: {
        1: {
          name: 'tv',
          price: 219.99,
          count: 5,
          image_url:
            'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue'
        }
      }
    };
  });

  it('adds an item appropriately and does not mutate previous state', () => {
    expect(state.cart[1]).toHaveProperty('count', 5);
    const newState = rootReducer(state, add(1));
    expect(newState.cart[1]).toHaveProperty('count', 6);
    expect(state.cart[1]).toHaveProperty('count', 5);
  });
  it('removes an item appropriately and does not mutate previous state', () => {
    expect(state.cart[1]).toHaveProperty('count', 5);
    const newState = rootReducer(state, remove(1));
    expect(newState.cart[1]).toHaveProperty('count', 4);
    expect(state.cart[1]).toHaveProperty('count', 5);
  });
});
