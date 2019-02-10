import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import Col from '../Layout/Col';
import Row from '../Layout/Row';
import Card from '../Card';
import CardImage from '../Card/CardImage';
import CardTitle from '../Card/CardTitle';
import CardBody from '../Card/CardBody';
import CardFooter from '../Card/CardFooter';
import { PrimaryButton } from '../Button';
import BicyclePlaceholder from '../../assets/bicycle-placeholder.png';
import IncidentTime from './IncidentTime';
import IncidentAddress from './IncidentAddress';

const Grid = ({ incidents, incidentsStatus, goToPage }) => (
  <Col>
    <span style={{ textAlign: 'center' }}>
      <BeatLoader loading={incidentsStatus.loading} color="#36D7B7" size={25} />
    </span>
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
              <Col style={{ justifyContent: 'space-between' }}>
                <CardTitle>{incident.title}</CardTitle>
                <CardBody>
                  <Col>
                    <Row>{incident.description}</Row>
                    <Row>
                      <IncidentTime>{new Date(incident.occurred_at).toDateString()}</IncidentTime>
                      <IncidentAddress>{incident.address}</IncidentAddress>
                    </Row>
                  </Col>
                </CardBody>
                <CardFooter>
                  <PrimaryButton onClick={() => goToPage(incident.id)}>Details</PrimaryButton>
                </CardFooter>
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
const mapDispatchToProps = (dispatch, ownProps) => ({
  goToPage: id => ownProps.history.push(`/case/${id}`)
});
Grid.propTypes = {
  incidents: PropTypes.instanceOf(Array),
  incidentsStatus: PropTypes.instanceOf(Object),
  goToPage: PropTypes.func
};
Grid.defaultProps = {
  incidents: [],
  incidentsStatus: {},
  goToPage: () => ({})
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Grid)
);
