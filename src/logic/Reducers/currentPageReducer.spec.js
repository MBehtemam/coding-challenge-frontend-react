import { CURRENT_PAGE_RESET, CURRENT_PAGE_SET } from '../Constants/ActionTypes';
import currentPageReducer, { defaultState } from './currentPageReducer';

describe('Test suits for current page reducer', () => {
  it('should return default state', () => {
    expect(currentPageReducer(undefined, {})).toBe(defaultState);
  });
  it('should set current page to specific number', () => {
    const value = 10;
    expect(currentPageReducer(undefined, { type: CURRENT_PAGE_SET, payload: value })).toBe(value);
  });
  it('should reset the page number', () => {
    expect(currentPageReducer(2, { type: CURRENT_PAGE_RESET })).toBe(defaultState);
  });
});
