export const addSpacesBetweenNumbers = (number: number) =>
  new Intl.NumberFormat('ru-RU', { maximumSignificantDigits: 3 }).format(number);
