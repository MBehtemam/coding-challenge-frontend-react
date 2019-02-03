import {
  incrementLastPageNumber,
  resetLastPageNumber,
  setLastPageNumber
} from './lastPageFetchNumberActions';
import {
  LAST_PAGE_FETCH_NUMBER_INCREMENT,
  LAST_PAGE_FETCH_NUMBER_RESET,
  LAST_PAGE_FETCH_NUMBER_SET
} from '../Constants/ActionTypes';

describe('Test suits for last page number actions', () => {
  it('should set correct type for incrementLastPageNumber', () => {
    const expectedObj = { type: LAST_PAGE_FETCH_NUMBER_INCREMENT };
    expect(incrementLastPageNumber()).toEqual(expectedObj);
  });
  it('should has correct type for reset last page number', () => {
    const expectedObj = { type: LAST_PAGE_FETCH_NUMBER_RESET };
    expect(resetLastPageNumber()).toEqual(expectedObj);
  });
  it('should has correct type for set last page number', () => {
    const number = 10;
    const expectedObj = { type: LAST_PAGE_FETCH_NUMBER_SET, payload: 10 };
    expect(setLastPageNumber(number)).toEqual(expectedObj);
  });
});
