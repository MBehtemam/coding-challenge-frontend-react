import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import IncidentAddress from './IncidentAddress';

describe('Test suits for Incidetn Address', () => {
  it('should match with snapshot', () => {
    const tree = renderer.create(<IncidentAddress>210 Berlin</IncidentAddress>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
