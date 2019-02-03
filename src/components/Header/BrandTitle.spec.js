import React from 'react';
import renderer from 'react-test-renderer';
import BrandTitle from './BrandTitle';

describe('Test suits for BrandTitle Component', () => {
  it('should match with snapshot', () => {
    const tree = renderer.create(<BrandTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
