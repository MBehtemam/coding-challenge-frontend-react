import { OCCURRED_BEFORE_CLEAR, OCCURRED_BEFORE_SET } from '../Constants/ActionTypes';

/**
 * this action clear occurred before
 */
export const clearOccurredBefore = () => ({
  type: OCCURRED_BEFORE_CLEAR
});

/**
 * this method get time and set is as occurred before
 * @param {Number} time time that you want to set as  occurred before
 */
export const setOccurredBefore = time => ({
  type: OCCURRED_BEFORE_SET,
  payload: time
});
