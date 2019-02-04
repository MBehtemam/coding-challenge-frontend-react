import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import IncidentsGrid from '../IncidentsGrid';
import * as IncidentsActions from '../../logic/Actions/incidentsActions';

class IndexPage extends Component {
  componentDidMount() {
    const { getIncidents } = this.props;
    getIncidents();
  }

  render() {
    return (
      <Fragment>
        <SearchBar />
        <IncidentsGrid />
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
