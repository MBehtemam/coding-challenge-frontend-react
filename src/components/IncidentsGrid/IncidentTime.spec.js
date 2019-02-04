import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import IncidentTime from './IncidentTime';

describe('Test suits for Incident Time', () => {
  it('Should match to snapshot', () => {
    const tree = renderer
      .create(<IncidentTime datetime="2008-02-14 20:00">2008-02-14 20:00</IncidentTime>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
