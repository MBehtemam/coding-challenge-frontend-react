import { LOADING_LOCATIONS_START, LOADING_LOCATIONS_STOP } from '../Constants/ActionTypes';

/**
 * this actions start loading for fetching locations
 */
export const locationsLoadingStart = () => ({
  type: LOADING_LOCATIONS_START
});

/**
 * this method stop loading for fetching locations
 */
export const locationsLoadingStop = () => ({
  type: LOADING_LOCATIONS_STOP
});
