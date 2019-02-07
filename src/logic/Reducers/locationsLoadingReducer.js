import { LOADING_LOCATIONS_START, LOADING_LOCATIONS_STOP } from '../Constants/ActionTypes';

export const defaultState = false;
const locationsLoadingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_LOCATIONS_START:
      return true;
    case LOADING_LOCATIONS_STOP:
      return false;
    default:
      return state;
  }
};
export default locationsLoadingReducer;
