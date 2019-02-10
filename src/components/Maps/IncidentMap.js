import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibWJlaHRlbWFtIiwiYSI6ImNqcndoMndsaDBiaTUzeW81Z204Ymhud3cifQ.Kyp8cElli7B9Zott5-O-oQ'
});
const IncidentMap = ({ location }) => (
  <Map
    // eslint-disable-next-line
    style="mapbox://styles/mapbox/streets-v9"
    containerStyle={{
      height: '50vh',
      width: '100vw'
    }}
    zoom={[16]}
    center={location}
  >
    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'bicycle-15', 'icon-size': 2.2 }}>
      <Feature coordinates={location} />
    </Layer>
  </Map>
);
IncidentMap.propTypes = {
  location: PropTypes.instanceOf(Array)
};
IncidentMap.defaultProps = {
  location: [0, 0]
};
export default IncidentMap;
