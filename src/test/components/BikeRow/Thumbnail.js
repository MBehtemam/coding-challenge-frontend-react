import React from 'react';
import renderer from 'react-test-renderer';
import Thumbnail from '../../../components/BikeRow/Thumbnail';
import 'jest-styled-components';

describe('Test suits for Bike Thumbnail', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Thumbnail src="https://via.placeholder.com/100" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should has correct width and height', () => {
    const tree = renderer.create(<Thumbnail src="https://via.placeholder.com/100" />).toJSON();
    expect(tree).toHaveStyleRule('width', '100px');
    expect(tree).toHaveStyleRule('height', '100px');
  });
});
