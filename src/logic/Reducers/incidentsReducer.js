import { INCIDENTS_ADD_BATCH, INCIDENTS_CLEAR } from '../Constants/ActionTypes';

export const defaultState = [];

const incidentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCIDENTS_ADD_BATCH:
      return [...state, ...action.payload];
    case INCIDENTS_CLEAR:
      return [];
    default:
      return state;
  }
};
export default incidentsReducer;
