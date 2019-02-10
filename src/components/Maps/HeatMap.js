import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { connect } from 'react-redux';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibWJlaHRlbWFtIiwiYSI6ImNqcndoMndsaDBiaTUzeW81Z204Ymhud3cifQ.Kyp8cElli7B9Zott5-O-oQ'
});
const layerPaint = {
  // Increase the heatmap weight based on frequency and property magnitude
  'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],
  // Increase the heatmap color weight weight by zoom level
  // heatmap-intensity is a multiplier on top of heatmap-weight
  'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
  // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
  // Begin color ramp at 0-stop with a 0-transparancy color
  // to create a blur-like effect.
  'heatmap-color': [
    'interpolate',
    ['linear'],
    ['heatmap-density'],
    0,
    'rgba(33,102,172,0)',
    0.2,
    'rgb(103,169,207)',
    0.4,
    'rgb(209,229,240)',
    0.6,
    'rgb(253,219,199)',
    0.8,
    'rgb(239,138,98)',
    1,
    'rgb(178,24,43)'
  ],
  // Adjust the heatmap radius by zoom level
  'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 1, 2, 9, 20],
  // Transition from heatmap to circle layer by zoom level
  'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 1]
};

const HeatMap = ({ locations }) => (
  <Map
    // eslint-disable-next-line
    style="mapbox://styles/mapbox/dark-v9"
    containerStyle={{
      height: '50vh',
      width: '100vw'
    }}
    zoom={[10]}
    center={locations.length > 0 ? locations[0] : [0, 0]}
  >
    <Layer type="heatmap" paint={layerPaint}>
      {locations.map(location => (
        <Feature key={`${location[1]}-${location[0]}`} coordinates={location} />
      ))}
    </Layer>
  </Map>
);

const mapStateToProps = state => ({
  locations: state.locations.map(l => l.geometry.coordinates)
});

HeatMap.propTypes = {
  locations: PropTypes.instanceOf(Array)
};
HeatMap.defaultProps = {
  locations: []
};
export default connect(
  mapStateToProps,
  undefined
)(HeatMap);
