import React from 'react';
import Header from '../../components/Header';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
describe('Tests for Header Component', () => {
  it('Should correctly render header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should has correct height', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toHaveStyleRule('height', '10vh');
  });
});
