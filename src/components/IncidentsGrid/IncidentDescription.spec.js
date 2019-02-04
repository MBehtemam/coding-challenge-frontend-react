import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import IncidentDescription from './IncidentDescription';

describe('Test suits for Incident Description', () => {
  it('should match with snapshot', () => {
    const tree = renderer
      .create(<IncidentDescription>Some description</IncidentDescription>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
