import React from 'react';
import 'jest-styled-components';
import Title from '../../components/BikeRow/Title';
import renderer from 'react-test-renderer';

describe('Test suits for Bike Row Title', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Title>Bike Index</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should has correct style', () => {
    const tree = renderer.create(<Title>Bike Index</Title>).toJSON();
    expect(tree).toHaveStyleRule('font-size', '2rem');
    expect(tree).toHaveStyleRule('color', 'blue');
  });
});
