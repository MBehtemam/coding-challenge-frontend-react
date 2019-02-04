import { OCCURRED_AFTER_CLEAR, OCCURRED_AFTER_SET } from '../Constants/ActionTypes';
import occurredAfterReducer, { defaultState } from './occurredAfter';

describe('Test suits for Occurred before reducer', () => {
  it('should return default state for reducer', () => {
    expect(occurredAfterReducer(undefined, {})).toBe(defaultState);
  });
  it('should clear the state and return default state', () => {
    expect(occurredAfterReducer(1549176153605, { type: OCCURRED_AFTER_CLEAR })).toBe(defaultState);
  });
  it('should set new state', () => {
    expect(
      occurredAfterReducer(undefined, { type: OCCURRED_AFTER_SET, payload: 1549176153605 })
    ).toBe(1549176153605);
  });
});
