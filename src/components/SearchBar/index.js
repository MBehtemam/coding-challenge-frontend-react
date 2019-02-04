import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  min-height: 100px;
`;

const SearchBar = () => (
  <Wrapper>
    <span>Search bar section</span>
  </Wrapper>
);

export default SearchBar;
