import { adjustHref } from './adjustHref';

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
