import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Incident from './Incident';
import Col from '../Layout/Col';
import Row from '../Layout/Row';
import Column from '../Layout/Column';
import Card from '../Card';
import CardImage from '../Card/CardImage';
import CardTitle from '../Card/CardTitle';
import CardBody from '../Card/CardBody';
import CardFooter from '../Card/CardFooter';
import BicyclePlaceholder from '../../assets/bicycle-placeholder.png';

const Grid = ({ incidents, incidentsStatus }) => (
  <Col>
    {incidentsStatus.loading && <span>Loading.....</span>}
    {incidentsStatus.ok === 0 && incidentsStatus.loading === false && incidents.length === 0 && (
      <span>{incidentsStatus.err}</span>
    )}
    {incidents.length > 0 &&
      incidents.map(incident => (
        <Row key={incident.id}>
          <Card>
            <Row>
              <CardImage
                src={incident.media.image_url_thumb || BicyclePlaceholder}
                style={{ width: '150px', height: '150px' }}
              />
              <Col>
                <CardTitle>
                  <Link to={`/case/${incident.id}`}>{incident.title}</Link>
                </CardTitle>
                <CardBody>{incident.description}</CardBody>
              </Col>
            </Row>
          </Card>
        </Row>
      ))}
  </Col>
);
const mapStateToProps = (state, ownProps) => ({
  incidents:
    state.incidents[
      Object.keys(state.incidents).find(p => p === `p${ownProps.match.params.page}`)
    ] || [],
  incidentsStatus: state.incidentsStatus
});
Grid.propTypes = {
  incidents: PropTypes.instanceOf(Array),
  incidentsStatus: PropTypes.instanceOf(Object)
};
Grid.defaultProps = {
  incidents: [],
  incidentsStatus: {}
};
export default withRouter(
  connect(
    mapStateToProps,
    undefined
  )(Grid)
);
