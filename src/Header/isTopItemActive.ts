import type { Router } from '../ContentPageContext';
import type { LinkContent } from '../types';
import { isHrefActive } from '../utils/url';

export function isTopItemActive(router: Router) {
  return (topItem: LinkContent): boolean =>
    isHrefActive(topItem.href, router, (topItemHref, baseHref) => baseHref.startsWith(topItemHref));
}
