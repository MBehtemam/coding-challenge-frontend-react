import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import BrandSubtitle from './BrandSubtitle';

describe('Test suits for brand subtitle', () => {
  it('should match with snapshot', () => {
    const tree = renderer.create(<BrandSubtitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
