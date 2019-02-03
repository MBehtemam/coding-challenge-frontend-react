import ConvertToDateString from './ConvertToDateString';

describe('Convert To Date String Test Suits', () => {
  it('should return correct date string', () => {
    const timestamp = 1438533008;
    const expectedDateString = 'Sat Jan 17 1970';
    expect(ConvertToDateString(timestamp)).toBe(expectedDateString);
  });
  it('should return correct date ', () => {
    const timestamp = 1549175615158;
    const expectedDateString = 'Sun Feb 03 2019';
    expect(ConvertToDateString(timestamp)).toBe(expectedDateString);
  });
  // it('should throw an error', () => {
  //   const timestamp = 'somebadthing';
  //   expect(ConvertToDateString(timestamp)).toThrowError(String);
  // });
});
