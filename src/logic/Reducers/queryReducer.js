import { QUERY_CLEAR, QUERY_SET } from '../Constants/ActionTypes';

export const defaultState = '';

const queryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case QUERY_CLEAR:
      return defaultState;
    case QUERY_SET:
      return action.payload;
    default:
      return state;
  }
};

export default queryReducer;
