import { add, remove } from './actionCreators';
import { ADD, REMOVE } from './actionTypes';

describe('actionCreators return expected values', () => {
  it('gives back objects with correct types', () => {
    expect(add(5)).toEqual({ type: ADD, payload: { id: 5 } });
    expect(remove(5)).toEqual({ type: REMOVE, payload: { id: 5 } });
  });
});
