import incidentTypesReducer, { defaultState } from './incidentTypesReducer';

describe('Test suits for incident types reducer', () => {
  it('should match with snapshot', () => {
    expect(incidentTypesReducer(undefined, {})).toEqual(defaultState);
  });
});
