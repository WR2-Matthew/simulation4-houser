import { GET_HOUSES } from './constraints';

export function getHouses(data) {
  return {
    type: GET_HOUSES,
    payload: {
      houses: data
    }
  }
}