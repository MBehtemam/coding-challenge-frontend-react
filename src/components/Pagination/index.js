import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from '../Layout/Row';
import Link from './Link.styled';

const CustomRow = styled(Row)`
  justify-content: center;
`;
const Pagination = ({ pagesCount, pageId }) => (
  <CustomRow>
    <Link to="/page/1">First</Link>
    <Link to={pageId > 1 ? `/page/${pageId - 1}` : `/page/1`}>Prev</Link>
    {pagesCount.length - 10 > 10 && <strong>{`  <<<<<  `}</strong>}
    {pagesCount.slice(pageId - 1, pageId + 10).map(page => (
      <Link key={page} selected={page === pageId} to={`/page/${page}`}>
        {page}
      </Link>
    ))}
    {pagesCount.length - pageId > 10 && <strong>{`  >>>>>  `}</strong>}
    <Link to={`/page/${pagesCount.length === pageId ? pageId : pageId + 1}`}>Next</Link>
    <Link to={`/page/${pagesCount.length}`}>Last</Link>
  </CustomRow>
);
const mapStateToProps = (state, ownProps) => ({
  pagesCount: Array.from({ length: state.locations.length / state.perPage + 1 }, (v, k) => k + 1),
  pageId: parseInt(ownProps.match.params.page, 10)
});

Pagination.propTypes = {
  pagesCount: PropTypes.instanceOf(Array),
  pageId: PropTypes.number
};
Pagination.defaultProps = {
  pagesCount: [],
  pageId: 0
};

export default withRouter(
  connect(
    mapStateToProps,
    undefined
  )(Pagination)
);
