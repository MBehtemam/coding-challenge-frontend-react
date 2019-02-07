// https://bikewise.org:443/api/v2/locations?occurred_before=1549535081994&occurred_after=1549535081994&incident_type=theft&proximity=Berlin&proximity_square=100&query=something&limit=100&all=true

const LocationsUrlGenerator = ({
  occurredBefore = undefined,
  occurredAfter = undefined,
  incidentType = 'theft',
  proximity = 'Berlin',
  proximitySquare = 100,
  query = undefined,
  limit = undefined,
  all = true
}) =>
  `https://bikewise.org:443/api/v2/locations?all=${all}${
    occurredBefore ? `&occurred_before=${occurredBefore}` : ''
  }${occurredAfter ? `&occurred_after=${occurredAfter}` : ''}${
    incidentType ? `&incident_type=${incidentType}` : ''
  }${proximity ? `&proximity=${proximity}` : ''}${
    proximitySquare ? `&proximity_square=${proximitySquare}` : ''
  }${query ? `&query=${query}` : ''}${limit ? `&limit=${limit}` : ''}`;
export default LocationsUrlGenerator;
