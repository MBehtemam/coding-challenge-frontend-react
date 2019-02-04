import { OCCURRED_BEFORE_CLEAR, OCCURRED_BEFORE_SET } from '../Constants/ActionTypes';

export const defaultState = 0;
const occurredBefore = (state = defaultState, action) => {
  switch (action.type) {
    case OCCURRED_BEFORE_CLEAR:
      return defaultState;
    case OCCURRED_BEFORE_SET:
      return action.payload;
    default:
      return state;
  }
};

export default occurredBefore;
