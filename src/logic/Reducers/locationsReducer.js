import {
  LOCATIONS_ADD_BATCH,
  LOCATIONS_CLEAR,
  LOCATIONS_SET_BATCH
} from '../Constants/ActionTypes';

export const defaultState = [];

const locationsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOCATIONS_ADD_BATCH:
      return [...state, ...action.payload];
    case LOCATIONS_SET_BATCH:
      return action.payload;
    case LOCATIONS_CLEAR:
      return [];
    default:
      return state;
  }
};
export default locationsReducer;
