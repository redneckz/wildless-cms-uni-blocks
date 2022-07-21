import { getOrigin, isURL } from './url';
import { MOBILE_URL_PATH } from './withoutMobilePath';

export const adjustHref = (
  href: string | undefined,
  router: { pathname: string; href?: string },
) => {
  if (!href) {
    return href;
  }

  const relativeHref = toRelativeHref(href, router) || '';
  const isMobilePage = router?.pathname.startsWith(MOBILE_URL_PATH);
  return isMobilePage && !isURL(relativeHref) ? `${MOBILE_URL_PATH}${relativeHref}` : relativeHref;
};

const toRelativeHref = (href: string | undefined, router: { href?: string }) => {
  if (!href) {
    return href;
  }

  const origin = getOrigin(router?.href);
  return origin ? href.replace(origin, '') || '/' : href;
};
