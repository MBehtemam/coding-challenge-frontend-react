import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from '.';

describe('Test suits for Button component', () => {
  it('should match with snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
