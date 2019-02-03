import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Logo from './Logo';

describe('Test suits for Logo Component', () => {
  it('should match with snapshot', () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should has correct style rule', () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toHaveStyleRule('width', '100px');
    expect(tree).toHaveStyleRule('height', '100px');
  });
});
