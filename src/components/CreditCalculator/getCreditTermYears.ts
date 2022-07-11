import { MONTHS_IN_YEAR } from './constants';

const MAX_YEARS_LENGTH = 5;

export const getCreditTermYears = (minMonths: number, maxMonths: number) => {
  const totalYears = Math.ceil((maxMonths - minMonths) / 12);
  const firstYear = Math.floor(minMonths / MONTHS_IN_YEAR) + 1;

  const result = new Array(Math.min(totalYears - 1, MAX_YEARS_LENGTH))
    .fill(0)
    .map((_, i) => firstYear + i);

  const maxYear = totalYears + firstYear - 1;
  return result.concat(maxYear);
};
