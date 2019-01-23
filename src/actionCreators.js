import { ADD, REMOVE, APPLY_DISCOUNT } from './actionTypes';

export function add(id) {
  return {
    type: ADD,
    payload: { id }
  };
}
export function remove(id) {
  return {
    type: REMOVE,
    payload: { id }
  };
}
export function applyDiscount(discountCode) {
  return {
    type: APPLY_DISCOUNT,
    payload: { discountCode }
  };
}
