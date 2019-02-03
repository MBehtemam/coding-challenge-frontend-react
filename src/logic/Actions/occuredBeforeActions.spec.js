import { OCCURRED_BEFORE_CLEAR, OCCURRED_BEFORE_SET } from '../Constants/ActionTypes';
import { clearOccurredBefore, setOccurredBefore } from './occuredBeforeActions';

describe('Test suits for occurredAfter actions', () => {
  it('should has correct type for clear occurred before', () => {
    const expectedObj = { type: OCCURRED_BEFORE_CLEAR };
    expect(clearOccurredBefore()).toEqual(expectedObj);
  });
  it('should has correct type and payload for set occurred before', () => {
    const time = Date.now();
    const expectedObj = { type: OCCURRED_BEFORE_SET, payload: time };
    expect(setOccurredBefore(time)).toEqual(expectedObj);
  });
});
