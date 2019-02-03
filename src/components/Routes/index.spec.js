import React from 'react';
import Routes from '.';

describe('Test suits for Routes Component', () => {
  it('should match to snapshot', () => {
    expect(<Routes />).toMatchSnapshot();
  });
});
