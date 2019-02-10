import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SearchBar from '../SearchBar';
import IncidentsGrid from '../IncidentsGrid';
import FetchResults from '../../logic/Actions/fetchingActions';
import Total from '../Total';
import Pagination from '../Pagination';
import Header from '../Header/Header';
import Row from '../Layout/Row';
import HeatMap from '../Maps/HeatMap';

class IndexPage extends Component {
  componentDidMount() {
    const { fetchResults } = this.props;
    const {
      match: {
        params: { page }
      }
    } = this.props;
    fetchResults(false, page);
  }

  componentDidUpdate(prevProps) {
    const { fetchResults } = this.props;
    const {
      match: {
        params: { page }
      }
    } = this.props;
    const {
      match: {
        params: { page: prevPage }
      }
    } = prevProps;
    if (prevPage !== page) {
      fetchResults(false, page);
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <SearchBar />
        <Total />
        <Row>
          <HeatMap />
        </Row>
        <IncidentsGrid />
        <Pagination />
      </Fragment>
    );
  }
}

IndexPage.propTypes = {
  fetchResults: PropTypes.func,
  match: PropTypes.instanceOf(Object)
};
IndexPage.defaultProps = {
  fetchResults: FetchResults,
  match: {}
};
const mapDispatchToProps = dispatch => ({
  fetchResults: (reload, page) => {
    dispatch(FetchResults(reload, page));
  }
});
export default withRouter(
  connect(
    undefined,
    mapDispatchToProps
  )(IndexPage)
);
