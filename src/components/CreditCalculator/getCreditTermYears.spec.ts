import { getCreditTermYears } from './getCreditTermYears';

describe('getCreditTermYears', () => {
  it('should return array starts from min year plus one and ends with max year', () => {
    const minMonths = 12;
    const maxMonths = 96;
    const items = [2, 3, 4, 5, 6, 8];
    expect(getCreditTermYears(minMonths, maxMonths)).toEqual(items);
  });
});
