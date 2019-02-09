import { PROXIMITY_CLEAR, PROXIMITY_SET } from '../Constants/ActionTypes';

export const setProximity = proximity => ({
  type: PROXIMITY_SET,
  payload: proximity
});

export const clearProximity = () => ({
  type: PROXIMITY_CLEAR
});
