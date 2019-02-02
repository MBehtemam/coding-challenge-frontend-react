import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../../components/SearchBar';
import 'jest-styled-components';

describe('Test suits for SearchBar component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should has correct height', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toHaveStyleRule('height', '5vh');
  });
});
