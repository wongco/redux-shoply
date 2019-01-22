import { DOTHIS } from './actionTypes';

export function dothis(param) {
  return {
    type: DOTHIS,
    payload: param
  };
}
