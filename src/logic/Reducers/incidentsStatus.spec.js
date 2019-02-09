import {
  INCIDENTS_FETCH_FAIL,
  INCIDENTS_LOADING_START,
  INCIDENTS_LOADING_STOP
} from '../Constants/ActionTypes';
import incidentsStatusReducer, { defaultState } from './incidentsStatusReducer';

describe('Test suits for incidents status', () => {
  it('should return default state on initializing', () => {
    expect(incidentsStatusReducer(undefined, {})).toEqual(defaultState);
  });
  it('should stop loading', () => {
    const expected = {
      ...defaultState,
      loading: false
    };
    expect(incidentsStatusReducer(undefined, { type: INCIDENTS_LOADING_STOP })).toEqual(expected);
  });
  it('should has loading true when it is started', () => {
    const expected = {
      ...defaultState,
      loading: true
    };
    expect(incidentsStatusReducer(undefined, { type: INCIDENTS_LOADING_START })).toEqual(expected);
  });
  it('should has some error with status problem', () => {
    const expected = {
      ...defaultState,
      ok: 0,
      err: 'some error'
    };
    expect(
      incidentsStatusReducer(undefined, {
        type: INCIDENTS_FETCH_FAIL,
        payload: { err: 'some error' }
      })
    ).toEqual(expected);
  });
});
