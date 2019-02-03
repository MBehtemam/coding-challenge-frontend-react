import { PER_PAGE_RESET, PER_PAGE_SET } from '../Constants/ActionTypes';
import perPageReducer, { defaultState } from './perPageReducer';

describe('Test Sutis for perPage reducer', () => {
  it('should return default state', () => {
    expect(perPageReducer(undefined, {})).toBe(defaultState);
  });
  it('should return default state on reseting', () => {
    expect(perPageReducer(100, { type: PER_PAGE_RESET })).toBe(defaultState);
  });
  it('should return set to custom number', () => {
    expect(perPageReducer(undefined, { type: PER_PAGE_SET, payload: 20 })).toBe(20);
  });
});
