export const MOBILE_URL_PATH = '/mobile';

export const isURL = (href?: string) => href?.includes('//');

export const isHrefActive = (
  href: string | undefined,
  router: { pathname?: string; href?: string },
  cmp: (href: string, baseHref: string) => boolean = (href, baseHref) => href === baseHref,
) => {
  return cmp(
    withoutQuery(href),
    withoutMobilePath(withoutQuery(isURL(href) ? router.href : router.pathname)),
  );
};

export const withoutQuery = (href?: string) => (href || '').replace(/\/?\?.*/, '');

export const withoutMobilePath = (href?: string) => (href || '').replace(MOBILE_URL_PATH, '');

export const getOrigin = (href?: string) => {
  if (!isURL(href)) {
    return undefined;
  }

  const url = href!;
  const protoSeparator = '//';
  const endOfProto = url.indexOf(protoSeparator);
  const endOfOrigin = url.indexOf('/', endOfProto + protoSeparator.length);
  return endOfOrigin !== -1 ? url.substring(0, endOfOrigin) : url;
};

export const adjustHref = (
  href: string | undefined,
  router: { pathname: string; href?: string },
) => {
  if (!href) {
    return href;
  }

  const relativeHref = toRelativeHref(href, router)!;
  const isMobilePage = router?.pathname.startsWith(MOBILE_URL_PATH);
  return isMobilePage && !isURL(relativeHref) ? `${MOBILE_URL_PATH}${relativeHref}` : relativeHref;
};

export const toRelativeHref = (href: string | undefined, router: { href?: string }) => {
  if (!href) {
    return href;
  }

  const origin = getOrigin(router?.href);
  return origin ? href.replace(origin, '') || '/' : href;
};
