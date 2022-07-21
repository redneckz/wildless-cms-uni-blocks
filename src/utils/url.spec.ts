import { getOrigin, withoutQuery } from './url';

describe('url', () => {
  describe('withoutQuery', () => {
    it('should return URL without query params', () => {
      expect(withoutQuery('http://foo.ru/other/path?first=1&second=2')).toBe(
        'http://foo.ru/other/path',
      );
    });
  });

  describe('getOrigin', () => {
    it('should return origin of specified URL', () => {
      expect(getOrigin('http://foo.ru/other/path?first=1&second=2')).toBe('http://foo.ru');
    });
  });
});
