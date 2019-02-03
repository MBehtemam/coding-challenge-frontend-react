import { INCIDENTS_ADD_BATCH, INCIDENTS_CLEAR } from '../Constants/ActionTypes';
import { addIncidents, clearIncidents } from './incidentsActions';

describe('Test suits for incidents actions', () => {
  it('should has correct type', () => {
    const expectedObj = { type: INCIDENTS_CLEAR };
    expect(clearIncidents()).toEqual(expectedObj);
  });
  it('should has correct type and payload', () => {
    const payload = [1, 2, 3];
    const expectedObj = { type: INCIDENTS_ADD_BATCH, payload };
    expect(addIncidents(payload)).toEqual(expectedObj);
  });
});
