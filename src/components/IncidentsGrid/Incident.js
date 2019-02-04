import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
    occurred_at: occurredAt,
    media: { image_url_thumb: imageUrlThumb }
  }
}) => (
  <Wrapper>
    <IncidentThumbnail src={imageUrlThumb} />
    <IncidentInfo
      id={id}
      title={title}
      description={description}
      address={address}
      occurredAt={occurredAt}
    />
  </Wrapper>
);

Incident.propTypes = {
  incident: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
    occurredAt: PropTypes.string,
    media: PropTypes.any
  })
};
Incident.defaultProps = {
  incident: {}
};
export default Incident;
