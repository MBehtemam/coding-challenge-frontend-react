import {
  LAST_PAGE_FETCH_NUMBER_RESET,
  LAST_PAGE_FETCH_NUMBER_SET,
  LAST_PAGE_FETCH_NUMBER_INCREMENT
} from '../Constants/ActionTypes';
import lastPageFetchNumberReducer, { defaultState } from './lastPageFetchNumberReducer';

describe('Test suits for last pageFetchNumber reducer', () => {
  it('should return default state', () => {
    expect(lastPageFetchNumberReducer(undefined, {})).toBe(defaultState);
  });
  it('should reset state and return default state', () => {
    expect(lastPageFetchNumberReducer(10, { type: LAST_PAGE_FETCH_NUMBER_RESET })).toBe(
      defaultState
    );
  });
  it('should set last page number to specific number', () => {
    const val = 20;
    expect(lastPageFetchNumberReducer(10, { type: LAST_PAGE_FETCH_NUMBER_SET, payload: val })).toBe(
      val
    );
  });
  it('should increment last page number', () => {
    const val = 10;
    const expected = 11;
    expect(lastPageFetchNumberReducer(val, { type: LAST_PAGE_FETCH_NUMBER_INCREMENT })).toBe(
      expected
    );
  });
});
