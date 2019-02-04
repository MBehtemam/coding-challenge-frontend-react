import { OCCURRED_AFTER_CLEAR, OCCURRED_AFTER_SET } from '../Constants/ActionTypes';

export const defaultState = 0;
const occurredAfter = (state = defaultState, action) => {
  switch (action.type) {
    case OCCURRED_AFTER_CLEAR:
      return defaultState;
    case OCCURRED_AFTER_SET:
      return action.payload;
    default:
      return state;
  }
};

export default occurredAfter;
