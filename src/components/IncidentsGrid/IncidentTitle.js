import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Title = styled.header`
  color: blue;
`;

const IncidentTitle = ({ title, id }) => (
  <Title>
    <Link to={`/case/${id}`}>{title}</Link>
  </Title>
);

export default IncidentTitle;

IncidentTitle.props = {
  title: PropTypes.string,
  id: PropTypes.number
};
IncidentTitle.defaultProps = {
  title: '',
  id: null
};
