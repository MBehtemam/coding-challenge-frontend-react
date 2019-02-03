import { INCIDENTS_ADD_BATCH, INCIDENTS_CLEAR } from '../Constants/ActionTypes';
import incidentsReducer, { defaultState } from './incidentsReducer';

describe('Test suits for incidents reducer', () => {
  it('should be empty array for first time', () => {
    expect(incidentsReducer(undefined, {})).toHaveLength(0);
  });
  it('should be equal to default state', () => {
    expect(incidentsReducer(undefined, {})).toEqual(defaultState);
  });
  it('should has length of 0 on clearing', () => {
    expect(incidentsReducer(['a', 'b', 'c'], { type: INCIDENTS_CLEAR })).toHaveLength(0);
  });
  it('should add bunch of incidents', () => {
    const currentState = [1, 2, 3];
    const addState = [5, 4];
    const length = 5;
    expect(
      incidentsReducer(currentState, { type: INCIDENTS_ADD_BATCH, payload: addState })
    ).toHaveLength(length);
  });
});
