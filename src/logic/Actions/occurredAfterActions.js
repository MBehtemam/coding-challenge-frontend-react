import { OCCURRED_AFTER_CLEAR, OCCURRED_AFTER_SET } from '../Constants/ActionTypes';

/**
 * this action clear occurred after
 */
export const clearOccurredAfter = () => ({
  type: OCCURRED_AFTER_CLEAR
});

/**
 * this method get time and set is as occurred after
 * @param {Number} time time that you want to set as  occurred after
 */
export const setOccurredAfter = time => ({
  type: OCCURRED_AFTER_SET,
  payload: time
});
