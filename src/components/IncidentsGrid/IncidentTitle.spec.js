import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import 'jest-styled-components';
import IncidentTitle from './IncidentTitle';

describe('Test suits for Incident Title', () => {
  it('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <IncidentTitle />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
