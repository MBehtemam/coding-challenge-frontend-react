import {
  LAST_PAGE_FETCH_NUMBER_INCREMENT,
  LAST_PAGE_FETCH_NUMBER_RESET,
  LAST_PAGE_FETCH_NUMBER_SET
} from '../Constants/ActionTypes';

/**
 * this action increment last page number by one
 */
export const incrementLastPageNumber = () => ({
  type: LAST_PAGE_FETCH_NUMBER_INCREMENT
});

/**
 * this action resete last page number
 */
export const resetLastPageNumber = () => ({
  type: LAST_PAGE_FETCH_NUMBER_RESET
});

/**
 * this action give a number and set it as last page number
 * @param {Number} number number that you want to set it as a last page number
 */
export const setLastPageNumber = number => ({
  type: LAST_PAGE_FETCH_NUMBER_SET,
  payload: number
});
