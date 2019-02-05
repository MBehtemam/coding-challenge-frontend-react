import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Incident from './Incident';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Grid = ({ incidents }) => (
  <Wrapper>
    {incidents.map(incident => (
      <Incident key={incident.id} incident={incident} />
    ))}
  </Wrapper>
);
const mapStateToProps = (state, ownProps) => ({
  incidents: state.incidents.slice(
    (ownProps.match.params.page - 1) * state.perPage,
    ownProps.match.params.page * state.perPage
  )
});
Grid.propTypes = {
  incidents: PropTypes.instanceOf(Array)
};
Grid.defaultProps = {
  incidents: []
};
export default withRouter(
  connect(
    mapStateToProps,
    undefined
  )(Grid)
);
