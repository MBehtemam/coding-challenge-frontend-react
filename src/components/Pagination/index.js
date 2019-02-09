import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Pagination = ({ pagesCount }) => (
  <section>
    {pagesCount.map(page => (
      <Link key={page} to={`/page/${page}`}>
        {page}
      </Link>
    ))}
  </section>
);

const mapStateToProps = state => ({
  pagesCount: Array.from({ length: state.locations.length / state.perPage + 2 }, (v, k) => k + 1)
});

Pagination.propTypes = {
  pagesCount: PropTypes.instanceOf(Array)
};
Pagination.defaultProps = {
  pagesCount: []
};

export default withRouter(
  connect(
    mapStateToProps,
    undefined
  )(Pagination)
);
