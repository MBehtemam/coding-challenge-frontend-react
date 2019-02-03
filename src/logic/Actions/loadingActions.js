import { LOADING_START_LOADING, LOADING_STOP_LOADING } from '../Constants/ActionTypes';

/**
 * Start loading
 */
export const startLoading = () => ({
  type: LOADING_START_LOADING
});

/**
 * Stop loading
 */
export const stopLoading = () => ({
  type: LOADING_STOP_LOADING
});
