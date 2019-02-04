import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SearchBar from '.';

describe('Test suits for Searchbar ', () => {
  it('should match with snapshot', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
