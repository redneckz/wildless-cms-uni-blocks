import type { Router } from '../../components/ContentPage/ContentPageContext';
import type { LinkProps } from '../../model/LinkProps';
import { isHrefActive } from './isHrefActive';

export const isSubItemActive =
  (router: Router) =>
  (subItem: LinkProps): boolean =>
    isHrefActive(subItem.href, router);
