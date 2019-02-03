import { PROXIMITY_CLEAR, PROXIMITY_SET } from '../Constants/ActionTypes';
import proximityReducer, { defaultState } from './proximityReducer';

describe('Test Suites for proximity reducer', () => {
  it('should return default state', () => {
    expect(proximityReducer(undefined, {})).toBe(defaultState);
  });
  it('should clear state and return default state', () => {
    expect(proximityReducer('France', { type: PROXIMITY_CLEAR })).toBe(defaultState);
  });
  it('should set proximity value', () => {
    const val = 'Berlin';
    expect(proximityReducer(undefined, { type: PROXIMITY_SET, payload: val })).toBe(val);
  });
});
