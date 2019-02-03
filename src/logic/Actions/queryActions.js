import { QUERY_CLEAR, QUERY_SET } from '../Constants/ActionTypes';

/**
 * Thsi action clear serach query
 */
export const clearQuery = () => ({
  type: QUERY_CLEAR
});

/**
 * this method get string and set is as a query search
 * @param {String} query string that you want to set as query search
 */
export const setQuery = query => ({
  type: QUERY_SET,
  payload: query
});
