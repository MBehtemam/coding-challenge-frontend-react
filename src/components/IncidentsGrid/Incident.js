import React from 'react';
import styled from 'styled-components';
import IncidentThumbnail from './IncidentThumbnail';
import IncidentInfo from './IncidentInfo';

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
`;

const Incident = ({
  incident: {
    id,
    title,
    description,
    address,
    occurred_at,
    media: { image_url_thumb }
  }
}) => (
  <Wrapper>
    <IncidentThumbnail src={image_url_thumb} />
    <IncidentInfo
      id={id}
      title={title}
      description={description}
      address={address}
      occurred_at={occurred_at}
    />
  </Wrapper>
);
export default Incident;
