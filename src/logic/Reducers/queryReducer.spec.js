import { QUERY_CLEAR, QUERY_SET } from '../Constants/ActionTypes';
import queryReducer, { defaultState } from './queryReducer';

describe('Test suits for query reducer', () => {
  it('should return default state', () => {
    expect(queryReducer(undefined, {})).toBe(defaultState);
  });
  it('should clear state and return default state', () => {
    expect(queryReducer('something', { type: QUERY_CLEAR })).toBe(defaultState);
  });
  it('should set a query string ', () => {
    const val = 'someother';
    expect(queryReducer('something', { type: QUERY_SET, payload: val })).toBe(val);
  });
});
