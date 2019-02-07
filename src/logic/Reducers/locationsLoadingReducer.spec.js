import { LOADING_LOCATIONS_START, LOADING_LOCATIONS_STOP } from '../Constants/ActionTypes';
import locationsLoadingReducer, { defaultState } from './locationsLoadingReducer';

describe('Test suits for locations loading reducer', () => {
  it('should return default state', () => {
    expect(locationsLoadingReducer(undefined, {})).toBe(defaultState);
  });
  it('should return true when loading is start', () => {
    expect(locationsLoadingReducer(false, { type: LOADING_LOCATIONS_START })).toBe(true);
  });
  it('should return false when loading is stop', () => {
    expect(locationsLoadingReducer(true, { type: LOADING_LOCATIONS_STOP })).toBe(false);
  });
});
