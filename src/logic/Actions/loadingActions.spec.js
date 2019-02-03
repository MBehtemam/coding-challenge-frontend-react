import { startLoading, stopLoading } from './loadingActions';
import { LOADING_START_LOADING, LOADING_STOP_LOADING } from '../Constants/ActionTypes';

describe('Test suits for  loading action', () => {
  it('should has correct type for start loading', () => {
    const expectedObj = { type: LOADING_START_LOADING };
    expect(startLoading()).toEqual(expectedObj);
  });

  it('should has correct type for stop loading', () => {
    const expectedObj = { type: LOADING_STOP_LOADING };
    expect(stopLoading()).toEqual(expectedObj);
  });
});
