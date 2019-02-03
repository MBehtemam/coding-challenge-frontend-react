import { LOADING_START_LOADING, LOADING_STOP_LOADING } from '../Constants/ActionTypes';

export const defaultState = false;

const loadingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_START_LOADING:
      return true;
    case LOADING_STOP_LOADING:
      return false;
    default:
      return state;
  }
};
export default loadingReducer;
