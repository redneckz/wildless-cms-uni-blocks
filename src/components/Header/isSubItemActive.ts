import type { LinkProps } from '../../model/LinkProps';
import { isHrefActive } from '../../utils/url';
import type { Router } from '../ContentPage/ContentPageContext';

export function isSubItemActive(router: Router) {
  return (subItem: LinkProps): boolean => isHrefActive(subItem.href, router);
}
