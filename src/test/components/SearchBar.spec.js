import React from 'react';
import SearchBar from '../../components/SearchBar';
import renderer from 'react-test-renderer';
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
