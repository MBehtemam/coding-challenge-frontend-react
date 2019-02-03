import UrlGenerator from '.';

describe('Test suits for Url generator', () => {
  it('shoud generate expected url', () => {
    const expected =
      'https://bikewise.org:443/api/v2/incidents?page=1&per_page=10&occurred_before=1549176153605&occurred_after=1543309200&incident_type=theft&proximity=Berlin&proximity_square=100&query=bike';
    const params = {
      page: 1,
      perPage: 10,
      occurredBefore: 1549176153605,
      occurredAfter: 1543309200,
      incidentType: 'theft',
      proximity: 'Berlin',
      proximitySquare: 100,
      query: 'bike'
    };
    expect(UrlGenerator(params)).toBe(expected);
  });
  it('shoud generate expected url without query', () => {
    const expected =
      'https://bikewise.org:443/api/v2/incidents?page=1&per_page=10&occurred_before=1549176153605&occurred_after=1543309200&incident_type=theft&proximity=Berlin&proximity_square=100';
    const params = {
      page: 1,
      perPage: 10,
      occurredBefore: 1549176153605,
      occurredAfter: 1543309200,
      incidentType: 'theft',
      proximity: 'Berlin',
      proximitySquare: 100
    };
    expect(UrlGenerator(params)).toBe(expected);
  });
});
