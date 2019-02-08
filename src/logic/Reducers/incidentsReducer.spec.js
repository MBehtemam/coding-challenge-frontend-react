import { INCIDENTS_ADD_BATCH, INCIDENTS_CLEAR } from '../Constants/ActionTypes';
import incidentsReducer, { defaultState } from './incidentsReducer';

describe('Test suits for incidents reducer', () => {
  it('should be empty object for first time', () => {
    expect(incidentsReducer(undefined, {})).toEqual({});
  });
  it('should be equal to default state', () => {
    expect(incidentsReducer(undefined, {})).toEqual(defaultState);
  });
  it('should has empty object on clearing', () => {
    expect(incidentsReducer({ page1: [1, 2, 3], p2: [4, 5] }, { type: INCIDENTS_CLEAR })).toEqual(
      {}
    );
  });
  it('should add bunch of incidents', () => {
    const currentState = { p1: [1, 2, 3], p2: [4, 5] };
    const payload = { pageId: 3, incidents: [6, 7] };
    const expected = { p1: [1, 2, 3], p2: [4, 5], p3: [6, 7] };
    expect(incidentsReducer(currentState, { type: INCIDENTS_ADD_BATCH, payload })).toEqual(
      expected
    );
  });
});
