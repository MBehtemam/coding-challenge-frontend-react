import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Brand from './Brand';
import BrandTitle from './BrandTitle';
import BrandSubtitle from './BrandSubtitle';
import LogoImage from '../../assets/logo.jpg';
import Row from '../Layout/Row';

const Header = ({ className }) => (
  <Row as="header" className={className}>
    <Link to="/">
      <Logo src={LogoImage} />
    </Link>
    <Brand>
      <BrandTitle>Police Department of Berlin</BrandTitle>
      <BrandSubtitle>Stolen bykes</BrandSubtitle>
    </Brand>
  </Row>
);

Header.propTypes = {
  className: PropTypes.string
};
Header.defaultProps = {
  className: ''
};

export default styled(Header)`
  align-items: center;
  background-color: #563d7c;
  color: black;
  min-height: 60px;
`;
