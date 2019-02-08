import {
  INCIDENT_FETCH_FAILED,
  INCIDENT_LOADING_START,
  INCIDENT_LOADING_STOPT
} from '../Constants/ActionTypes';
import incidentStatusReducer, { defaultState } from './incidentStatusReducer';

describe('Test suits for incident status', () => {
  it('should return default state on initializing', () => {
    expect(incidentStatusReducer(undefined, {})).toEqual(defaultState);
  });
  it('should has loading true when it is started', () => {
    const expected = {
      ...defaultState,
      loading: true
    };
    expect(incidentStatusReducer(undefined, { type: INCIDENT_LOADING_START })).toEqual(expected);
  });
  it('should has some error with status problem', () => {
    const expected = {
      ...defaultState,
      ok: 0,
      err: 'some error'
    };
    expect(
      incidentStatusReducer(undefined, {
        type: INCIDENT_FETCH_FAILED,
        payload: { err: 'some error' }
      })
    ).toEqual(expected);
  });
});
