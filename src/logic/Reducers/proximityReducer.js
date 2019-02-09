import { PROXIMITY_CLEAR, PROXIMITY_SET } from '../Constants/ActionTypes';

export const defaultState = 'London';

const proximityReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PROXIMITY_CLEAR:
      return defaultState;
    case PROXIMITY_SET:
      return action.payload;
    default:
      return state;
  }
};
export default proximityReducer;
