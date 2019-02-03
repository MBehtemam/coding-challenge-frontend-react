import { OCCURRED_BEFORE_CLEAR, OCCURRED_BEFORE_SET } from '../Constants/ActionTypes';
import occurredBeforeReducer, { defaultState } from './occurredBefore';

describe('Test suits for Occurred before reducer', () => {
  it('should return default state for reducer', () => {
    expect(occurredBeforeReducer(undefined, {})).toBe(defaultState);
  });
  it('should clear the state and return default state', () => {
    expect(occurredBeforeReducer(1549176153605, { type: OCCURRED_BEFORE_CLEAR })).toBe(null);
  });
  it('should set new state', () => {
    expect(
      occurredBeforeReducer(undefined, { type: OCCURRED_BEFORE_SET, payload: 1549176153605 })
    ).toBe(1549176153605);
  });
});
