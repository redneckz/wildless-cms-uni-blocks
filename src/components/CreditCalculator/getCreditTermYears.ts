import { MAX_YEARS_LENGTH, MONTHS_IN_YEAR } from './constants';

export const getCreditTermYears = (minMonths: number, maxMonths: number) => {
  const creditTermYears: number[] = [];

  const totalYears = Math.ceil((maxMonths - minMonths) / 12);
  const firstYear = Math.floor(minMonths / MONTHS_IN_YEAR) + 1;

  for (let i = firstYear; i < totalYears + firstYear; i++) {
    creditTermYears.push(i);
  }

  const maxYearValue = creditTermYears[creditTermYears.length - 1];

  const res = creditTermYears.slice(0, MAX_YEARS_LENGTH);
  res[creditTermYears.length - 1] = maxYearValue;

  return res;
};
