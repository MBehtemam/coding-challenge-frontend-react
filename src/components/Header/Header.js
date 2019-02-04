import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Brand from './Brand';
import BrandTitle from './BrandTitle';
import BrandSubtitle from './BrandSubtitle';
import LogoImage from '../../assets/logo.jpg';

const Wrapper = styled.header`
  align-items: center;
  background-color: rgb(219, 112, 147);
  color: white;
  display: flex;
  min-height: 90px;
`;

const Header = () => (
  <Wrapper>
    <Logo src={LogoImage} />
    <Brand>
      <BrandTitle>Something</BrandTitle>
      <BrandSubtitle>Stolen bykes</BrandSubtitle>
    </Brand>
  </Wrapper>
);

export default Header;
