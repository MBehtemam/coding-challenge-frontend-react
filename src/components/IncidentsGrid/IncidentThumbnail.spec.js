import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import IncidentThumbnail from './IncidentThumbnail';

describe('Test suits for IncidentsThumbnail', () => {
  it('should match with snapshot', () => {
    const tree = renderer.create(<IncidentThumbnail />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
