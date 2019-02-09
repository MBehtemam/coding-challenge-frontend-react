import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as IncidentActions from '../../logic/Actions/incidentActions';
import IncidentTitle from '../IncidentsGrid/IncidentTitle';
import IncidentAddress from '../IncidentsGrid/IncidentAddress';
import IncidentTime from '../IncidentsGrid/IncidentTime';
import IncidentMap from '../IncidentDetail/IncidentMap';
import IncidentDescription from '../IncidentsGrid/IncidentDescription';
import Header from '../Header/Header';
import Row from '../Layout/Row';
import Col from '../Layout/Col';

class IncidentDetailPage extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      fetchIncident
    } = this.props;
    fetchIncident(id);
  }

  render() {
    const { incident, incidentStatus, location } = this.props;
    return (
      <>
        <Header />
        {incidentStatus.ok === 0 && incidentStatus.loading === false && (
          <span>{incidentStatus.err}</span>
        )}
        {incidentStatus.loading && <span>Loading</span>}
        {incidentStatus.ok === 1 &&
          incidentStatus.loading === false &&
          Object.keys(incident).length > 0 && (
            <Col>
              <IncidentTitle>{incident.title}</IncidentTitle>
              <Row>
                <IncidentAddress>{incident.address}</IncidentAddress>
                <IncidentTime>{new Date(incident.occurred_at).toDateString()}</IncidentTime>
              </Row>
            </Col>
          )}
        <IncidentMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          location={location}
        />
        <IncidentDescription>{incident.description}</IncidentDescription>
      </>
    );
  }
}

IncidentDetailPage.propTypes = {
  incident: PropTypes.instanceOf(Object),
  incidentStatus: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object),
  fetchIncident: PropTypes.func,
  location: PropTypes.instanceOf(Array)
};
IncidentDetailPage.defaultProps = {
  incident: {},
  incidentStatus: {},
  match: {},
  fetchIncident: IncidentActions.fetchIncident,
  location: [0, 0]
};
const mapStateToProps = (state, ownProps) => ({
  incident: state.incident,
  incidentStatus: state.incidentStatus,
  location: (
    state.locations.find(l => l.properties.id === parseInt(ownProps.match.params.id, 10)) || {
      geometry: { coordinates: [0, 0] }
    }
  ).geometry.coordinates
});
const mapDispatchToProps = dispatch => ({
  fetchIncident: id => dispatch(IncidentActions.fetchIncident(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IncidentDetailPage)
);
