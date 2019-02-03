import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '.';

describe('Test suits for Layout component', () => {
  it('should match to snapshot', () => {
    const tree = renderer.create(<Layout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
