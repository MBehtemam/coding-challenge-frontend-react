import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibWJlaHRlbWFtIiwiYSI6ImNqcndoMndsaDBiaTUzeW81Z204Ymhud3cifQ.Kyp8cElli7B9Zott5-O-oQ'
});
const IncidentMap = () => (
  <Map
    // eslint-disable-next-line
    style="mapbox://styles/mapbox/streets-v9"
    containerStyle={{
      height: '50vh',
      width: '100vw'
    }}
    zoom={[15]}
    center={[13.4275574, 52.4703072]}
  >
    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'bicycle-15' }}>
      <Feature coordinates={[13.4275574, 52.4703072]} />
    </Layer>
  </Map>
);
export default IncidentMap;
