import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IncidentTitle from './IncidentTitle';
import IncidentDescription from './IncidentDescription';
import IncidentTime from './IncidentTime';
import IncidentAddress from './IncidentAddress';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const IncidentInfo = ({ id, title, description, address, occurredAt }) => (
  <Wrapper>
    <IncidentTitle title={title} id={id} />
    <IncidentDescription>{description}</IncidentDescription>
    <WrapperRow>
      <IncidentTime datetime={new Date(occurredAt).toDateString()}>
        {new Date(occurredAt).toDateString()}
      </IncidentTime>
      <IncidentAddress>{address}</IncidentAddress>
    </WrapperRow>
  </Wrapper>
);
IncidentInfo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.string,
  occurredAt: PropTypes.number
};
IncidentInfo.defaultProps = {
  id: 0,
  title: '',
  description: '',
  address: '',
  occurredAt: Date.now()
};
export default IncidentInfo;
