import type { LinkProps } from '../../model/LinkProps';
import { isHrefActive } from '../../utils/url';
import type { Router } from '../ContentPage/ContentPageContext';

export function isTopItemActive(router: Router) {
  return (topItem: LinkProps): boolean =>
    isHrefActive(topItem.href, router, (topItemHref, baseHref) => baseHref.startsWith(topItemHref));
}
