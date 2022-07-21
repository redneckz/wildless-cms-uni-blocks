import { isURL, withoutQuery } from '../../utils/url';
import { withoutMobilePath } from '../../utils/withoutMobilePath';

export const isHrefActive = (
  href: string | undefined,
  router: { pathname?: string; href?: string },
  cmp: (href: string, baseHref: string) => boolean = (href, baseHref) => baseHref.startsWith(href),
) => {
  return cmp(
    withoutQuery(href),
    withoutMobilePath(withoutQuery(isURL(href) ? router.href : router.pathname)),
  );
};
