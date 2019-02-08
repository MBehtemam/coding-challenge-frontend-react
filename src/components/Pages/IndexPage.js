import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SearchBar from '../SearchBar';
import IncidentsGrid from '../IncidentsGrid';
import * as FetchResults from '../../logic/Actions/fetchingActions';
import Total from '../Total';
import Pagination from '../Pagination';

class IndexPage extends Component {
  componentDidMount() {
    const { fetchResults } = this.props;
    fetchResults(false, this.props.match.params.page);
  }
  componentDidUpdate(prevProps){
    const { fetchResults } = this.props;
    if(prevProps.match.params.page !== this.props.match.params.page){
    fetchResults(false, this.props.match.params.page);
    }
  }
  render() {
    return (
      <Fragment>
        <SearchBar />
        <Total />
        <IncidentsGrid />
        <Pagination />
      </Fragment>
    );
  }
}

IndexPage.propTypes = {
  fetchResults: PropTypes.func
};
IndexPage.defaultProps = {
  fetchResults: FetchResults.fetchResults
};
const mapDispatchToProps = dispatch => ({
  fetchResults: (reload, page) => {
    dispatch(FetchResults.fetchResults(reload, page));
  }
});
export default withRouter(
  connect(
    undefined,
    mapDispatchToProps
  )(IndexPage)
);
