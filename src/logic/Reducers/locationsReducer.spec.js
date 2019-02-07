import {
  LOCATIONS_ADD_BATCH,
  LOCATIONS_CLEAR,
  LOCATIONS_SET_BATCH
} from '../Constants/ActionTypes';
import locationsReducer, { defaultState } from './locationsReducer';

describe('Test suits for locations reducer', () => {
  it('should return default state', () => {
    expect(locationsReducer(undefined, {})).toBe(defaultState);
  });
  it('should return clear and return empty array', () => {
    expect(locationsReducer([1, 2, 3, 4, 5], { type: LOCATIONS_CLEAR })).toHaveLength(0);
  });
  it('should adding locations', () => {
    expect(locationsReducer([1, 2, 3], { type: LOCATIONS_ADD_BATCH, payload: [10, 11] })).toEqual([
      1,
      2,
      3,
      10,
      11
    ]);
  });
  it('should set new locations', () => {
    expect(locationsReducer([1, 2, 3], { type: LOCATIONS_SET_BATCH, payload: [4, 5] })).toEqual([
      4,
      5
    ]);
  });
});
