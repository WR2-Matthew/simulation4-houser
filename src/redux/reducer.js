import { GET_HOUSES } from './constraints';

initialState = {
  houses: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOUSES:
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}