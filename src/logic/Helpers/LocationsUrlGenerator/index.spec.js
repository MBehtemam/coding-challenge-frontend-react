import LocationsUrlGenerator from '.';

describe('Test suits for Locations Url generator', () => {
  it('should expected with params and url', () => {
    const params = {
      occurredBefore: undefined,
      occurredAfter: undefined,
      incidentType: 'theft',
      proximity: 'Berlin',
      proximitySquare: 100,
      query: undefined,
      limit: undefined,
      all: true
    };
    const expectedUrl =
      'https://bikewise.org:443/api/v2/locations?all=true&incident_type=theft&proximity=Berlin&proximity_square=100';
    expect(LocationsUrlGenerator(params)).toBe(expectedUrl);
  });
});
