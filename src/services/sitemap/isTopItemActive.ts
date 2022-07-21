import type { Router } from '../../components/ContentPage/ContentPageContext';
import { isHrefActive } from './isHrefActive';
import { isSubItemActive } from './isSubItemActive';
import { TopMenuItem } from './SitemapProps';

export const isTopItemActive =
  (router: Router) =>
  (topItem: TopMenuItem): boolean =>
    topItem.items?.some(isSubItemActive(router)) || isHrefActive(topItem.href, router);
