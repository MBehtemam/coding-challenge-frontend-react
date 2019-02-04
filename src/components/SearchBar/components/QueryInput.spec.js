import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import QueryInput from './QueryInput';

describe('Test suits for Query Input', () => {
  it('it should match with snapshot', () => {
    const tree = renderer.create(<QueryInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
