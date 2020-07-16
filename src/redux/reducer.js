import { GET_HOUSES } from './constraints';

const initialState = {
  houses: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOUSES:
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}