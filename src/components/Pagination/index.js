import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Pagination = ({ incidents }) => (
  <section>
    {incidents.map(incident => (
      <Link key={incident} to={`/page/${incident}`}>
        {incident}
      </Link>
    ))}
  </section>
);

const mapStateToProps = state => ({
  incidents: Array.from({ length: 23 / state.perPage + 2 }, (v, k) => k + 1)
});

Pagination.propTypes = {
  incidents: PropTypes.instanceOf(Array)
};
Pagination.defaultProps = {
  incidents: []
};

export default withRouter(
  connect(
    mapStateToProps,
    undefined
  )(Pagination)
);
