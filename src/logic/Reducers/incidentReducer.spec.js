import { INCIDENT_CLEAR, INCIDENT_SET } from '../Constants/ActionTypes';
import incidentReducer, { defaultState } from './incidentReducer';

describe('Test suits fro incident reducer', () => {
  it('should return default state', () => {
    expect(incidentReducer(undefined, {})).toEqual(defaultState);
  });
  it('should clear and return default state', () => {
    expect(incidentReducer({ key: '1' }, { type: INCIDENT_CLEAR })).toEqual(defaultState);
  });
  it('should set the new incident', () => {
    const expected = { key: '1' };
    expect(incidentReducer(undefined, { type: INCIDENT_SET, payload: expected })).toEqual(expected);
  });
});
