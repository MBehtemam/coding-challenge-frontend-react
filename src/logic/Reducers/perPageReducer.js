import { PER_PAGE_RESET, PER_PAGE_SET } from '../Constants/ActionTypes';

export const defaultState = 10;
const perPage = (state = defaultState, action) => {
  switch (action.type) {
    case PER_PAGE_RESET:
      return 10;
    case PER_PAGE_SET:
      return action.payload;
    default:
      return state;
  }
};
export default perPage;
