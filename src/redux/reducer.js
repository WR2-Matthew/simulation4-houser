import { GET_HOUSES, ADD_HOME } from './constraints';

const initialState = {
  houses: [],
  newHouse: {
    property: '',
    address: '',
    city: '',
    state: '',
    zip: null,
    mortgage: null,
    rent: null,
    image: ''
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOUSES:
      return Object.assign({}, state, action.payload)
    case ADD_HOME:
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}