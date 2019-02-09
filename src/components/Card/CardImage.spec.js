import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import CardImage from './CardImage';

describe('Test suits for Card Image', () => {
  it('should match with snapshot', () => {
    const tree = renderer.create(<CardImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
