import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Brand from './Brand';

describe('Test suits for Brand component', () => {
  it('should be match with snapshot', () => {
    const tree = renderer.create(<Brand />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should has correct styles', () => {
    const tree = renderer.create(<Brand />).toJSON();
    expect(tree).toHaveStyleRule('display', 'flex');
    expect(tree).toHaveStyleRule('flex-direction', 'column');
  });
});
