import { maxBy } from './maxBy';

describe('maxBy', () => {
  it('should return max value', () => {
    expect(maxBy((_: number) => _)([1, 3, 2])).toBe(3);
  });

  it('should return max value with respect to discriminator', () => {
    expect(maxBy((_: string) => _.length)(['123', '123456789', '123456'])).toBe('123456789');
  });
});
