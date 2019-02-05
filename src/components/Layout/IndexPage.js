import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import IncidentsGrid from '../IncidentsGrid';
import * as IncidentsActions from '../../logic/Actions/incidentsActions';
import Total from '../Total';
import Pagination from '../Pagination/';

class IndexPage extends Component {
  componentDidMount() {
    const { getIncidents } = this.props;
    getIncidents();
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
  getIncidents: PropTypes.func
};
IndexPage.defaultProps = {
  getIncidents: IncidentsActions.getIncidents
};
const mapDispatchToProps = dispatch => ({
  getIncidents: () => {
    dispatch(IncidentsActions.getIncidents());
  }
});
export default connect(
  undefined,
  mapDispatchToProps
)(IndexPage);
