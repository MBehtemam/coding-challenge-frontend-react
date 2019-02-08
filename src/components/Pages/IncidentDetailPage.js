import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as IncidentActions from '../../logic/Actions/incidentActions';
import IncidentTitle from '../IncidentsGrid/IncidentTitle';
import IncidentAddress from '../IncidentsGrid/IncidentAddress';
import IncidentTime from '../IncidentsGrid/IncidentTime';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`;
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
    const { incident, incidentStatus } = this.props;
    return (
      <>
        {incidentStatus.loading && <span>Loading</span>}
        {incidentStatus.ok === 1 &&
          incidentStatus.loading === false &&
          Object.keys(incident).length > 0 && (
            <Wrapper>
              <IncidentTitle title={incident.title} id={incident.id} />
              <IncidentAddress>{incident.address}</IncidentAddress>
              <IncidentTime>{new Date(incident.occurred_at).toDateString()}</IncidentTime>
            </Wrapper>
          )}
        {incidentStatus.ok === 0 && incidentStatus.loading === false && (
          <span>{incidentStatus.err}</span>
        )}
      </>
    );
  }
}

IncidentDetailPage.propTypes = {
  incident: PropTypes.instanceOf(Object),
  incidentStatus: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object),
  fetchIncident: PropTypes.func
};
IncidentDetailPage.defaultProps = {
  incident: {},
  incidentStatus: {},
  match: {},
  fetchIncident: IncidentActions.fetchIncident
};
const mapStateToProps = state => ({
  incident: state.incident,
  incidentStatus: state.incidentStatus
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
