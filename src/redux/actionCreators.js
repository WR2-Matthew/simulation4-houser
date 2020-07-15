import { GET_HOUSES } from './constraints';

export function houses(data) {
  return {
    type: GET_HOUSES,
    payload: {
      houses: data
    }
  }
}