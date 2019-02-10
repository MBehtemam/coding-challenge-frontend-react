import { INCIDENT_TYPE_CLEAR, INCIDENT_TYPE_SET } from '../Constants/ActionTypes';
import incidentTypeReducer, { defaultState } from './incidentTypeReducer';

describe('Test suits for incident type reducer', () => {
  it('should return default state on initialize', () => {
    expect(incidentTypeReducer(undefined, {})).toEqual(defaultState);
  });
  it('should clear state and return default state', () => {
    expect(incidentTypeReducer('theft', { type: INCIDENT_TYPE_CLEAR })).toEqual(defaultState);
  });
  it('should set new state', () => {
    const expected = 'theft';
    expect(incidentTypeReducer(undefined, { type: INCIDENT_TYPE_SET, payload: expected })).toEqual(
      expected
    );
  });
});
