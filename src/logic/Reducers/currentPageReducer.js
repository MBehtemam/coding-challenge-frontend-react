import { CURRENT_PAGE_RESET, CURRENT_PAGE_SET } from '../Constants/ActionTypes';

export const defaultState = 1;

const currentPage = (state = defaultState, action) => {
  switch (action.type) {
    case CURRENT_PAGE_RESET:
      return defaultState;
    case CURRENT_PAGE_SET:
      return action.payload;
    default:
      return state;
  }
};
export default currentPage;
