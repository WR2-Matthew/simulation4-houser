import { GET_HOUSES, ADD_HOME } from './constraints';

export function getHouses(data) {
  return {
    type: GET_HOUSES,
    payload: {
      houses: data
    }
  }
};

export function addingEstates(property, address, city, state, zip) {
  return {
    type: ADD_HOME,
    payload: {
      newHouse: {
        property, address, city, state, zip
      }
    }
  }
}