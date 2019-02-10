import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from '../../Layout/Row';
import * as IncidentTypeActions from '../../../logic/Actions/incidentTypeActions';

const InputLabel = styled.label`
  background-color: #000000;
  border-radius: 10px 0px 0px 10px;
  color: #ffffff;
  padding: 12px 10px;
`;
const Select = styled.select`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  color: #495057;
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
`;
const IncidentType = ({ incidentTypes, incidentType, setIncidentType }) => (
  <Row>
    <InputLabel>Type</InputLabel>
    <Select defaultValue={incidentType} onChange={e => setIncidentType(e.target.value)}>
      {incidentTypes.map(type => (
        <option key={type}>{type}</option>
      ))}
    </Select>
  </Row>
);

IncidentType.propTypes = {
  incidentTypes: PropTypes.instanceOf(Array),
  incidentType: PropTypes.string,
  setIncidentType: PropTypes.func
};
IncidentType.defaultProps = {
  incidentTypes: [],
  incidentType: '',
  setIncidentType: IncidentTypeActions.setIncidentType
};
const mapStateToProps = state => ({
  incidentTypes: state.incidentTypes,
  incidentType: state.incidentType
});
const mapDispatchToProps = dispatch => ({
  setIncidentType: type => IncidentTypeActions.setIncidentType(type)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentType);
