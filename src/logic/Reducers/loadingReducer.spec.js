import { LOADING_START_LOADING, LOADING_STOP_LOADING } from '../Constants/ActionTypes';
import loadingReducer, { defaultState } from './loadingReducer';

describe('Test suits for loading reducer', () => {
  it('should return default state', () => {
    expect(loadingReducer(undefined, {})).toBe(defaultState);
  });
  it('should return true when loading is start', () => {
    expect(loadingReducer(false, { type: LOADING_START_LOADING })).toBe(true);
  });
  it('should return false when loading is stop', () => {
    expect(loadingReducer(true, { type: LOADING_STOP_LOADING })).toBe(false);
  });
});
