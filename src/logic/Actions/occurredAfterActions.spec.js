import { OCCURRED_AFTER_CLEAR, OCCURRED_AFTER_SET } from '../Constants/ActionTypes';
import { clearOccurredAfter, setOccurredAfter } from './occurredAfterActions';

describe('Test suits for occurredAfter actions', () => {
  it('should has correct type for clear occurred after', () => {
    const expectedObj = { type: OCCURRED_AFTER_CLEAR };
    expect(clearOccurredAfter()).toEqual(expectedObj);
  });
  it('should has correct type and payload for set occurred after', () => {
    const time = Date.now();
    const expectedObj = { type: OCCURRED_AFTER_SET, payload: time };
    expect(setOccurredAfter(time)).toEqual(expectedObj);
  });
});
