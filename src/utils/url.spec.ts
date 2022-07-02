import { adjustHref, getOrigin, toRelativeHref, withoutQuery } from './url';

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

  describe('adjustHref', () => {
    it('should compute URL relative to some base URL', () => {
      expect(
        adjustHref('http://foo.ru/other/path', {
          pathname: '/some/path',
          href: 'http://foo.ru/some/path',
        }),
      ).toBe('/other/path');
    });

    it('should compute mobile URL for mobile pages', () => {
      expect(
        adjustHref('http://foo.ru/other/path', {
          pathname: '/mobile/some/path',
          href: 'http://foo.ru/mobile/some/path',
        }),
      ).toBe('/mobile/other/path');
    });

    it('should return nothing if nothing provided', () => {
      expect(adjustHref(undefined, { pathname: '/mobile/some/path' })).toBe(undefined);
    });
  });

  describe('toRelativeHref', () => {
    it('should compute URL relative to some base URL', () => {
      expect(toRelativeHref('http://foo.ru/other/path', { href: 'http://foo.ru/some/path' })).toBe(
        '/other/path',
      );
    });

    it('should return nothing if nothing provided', () => {
      expect(toRelativeHref(undefined, {})).toBe(undefined);
    });
  });
});
