import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Header from './Header';

describe('Test suits for Header Component', () => {
  it('should match with snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should has correct styles', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toHaveStyleRule('display', 'flex');
  });
});
