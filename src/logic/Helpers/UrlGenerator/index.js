const UrlGenerator = ({
  page = 1,
  perPage = 10,
  occurredBefore = undefined,
  occurredAfter = undefined,
  incidentType = 'theft',
  proximity = 'Berlin',
  proximitySquare = 10,
  query = undefined
}) => {
  const str = `https://bikewise.org:443/api/v2/incidents?page=${page}&per_page=${perPage}${
    occurredBefore ? `&occurred_before=${occurredBefore}` : ''
  }${occurredAfter ? `&occurred_after=${occurredAfter}` : ''}${
    incidentType ? `&incident_type=${incidentType}` : ''
  }${proximity ? `&proximity=${proximity}` : ''}${
    proximitySquare ? `&proximity_square=${proximitySquare}` : ''
  }${query ? `&query=${query}` : ''}`;
  return str;
};
export default UrlGenerator;
