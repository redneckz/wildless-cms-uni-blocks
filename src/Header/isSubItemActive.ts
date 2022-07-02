import type { Router } from '../ContentPageContext';
import type { LinkContent } from '../types';
import { isHrefActive } from '../utils/url';

export function isSubItemActive(router: Router) {
  return (subItem: LinkContent): boolean => isHrefActive(subItem.href, router);
}
