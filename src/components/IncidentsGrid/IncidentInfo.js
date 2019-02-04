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
const IncidentInfo = ({ id, title, description, address, occurred_at }) => (
  <Wrapper>
    <IncidentTitle title={title} id={id} />
    <IncidentDescription>{description}</IncidentDescription>
    <WrapperRow>
      <IncidentTime datetime={new Date(occurred_at).toDateString()}>
        {new Date(occurred_at).toDateString()}
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
  occured_at: PropTypes.number
};
export default IncidentInfo;
