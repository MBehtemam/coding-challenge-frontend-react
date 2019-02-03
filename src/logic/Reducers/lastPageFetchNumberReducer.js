import {
  LAST_PAGE_FETCH_NUMBER_RESET,
  LAST_PAGE_FETCH_NUMBER_SET,
  LAST_PAGE_FETCH_NUMBER_INCREMENT
} from '../Constants/ActionTypes';

export const defaultState = 0;
const lastPageFetchNumberReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LAST_PAGE_FETCH_NUMBER_RESET:
      return defaultState;
    case LAST_PAGE_FETCH_NUMBER_SET:
      return action.payload;
    case LAST_PAGE_FETCH_NUMBER_INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
export default lastPageFetchNumberReducer;
