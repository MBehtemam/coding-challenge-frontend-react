import { clearQuery, setQuery } from './queryActions';
import { QUERY_CLEAR, QUERY_SET } from '../Constants/ActionTypes';

describe('Test Suites form query actions', () => {
  it('should has correct type for clear query', () => {
    const expectedObj = { type: QUERY_CLEAR };
    expect(clearQuery()).toEqual(expectedObj);
  });
  it('should has correct type and payload for set Query', () => {
    const query = 'something';
    const expectedObj = { type: QUERY_SET, payload: query };
    expect(setQuery(query)).toEqual(expectedObj);
  });
});
