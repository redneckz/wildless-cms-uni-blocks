import type { Router } from '../ContentPageContext';
import type { LinkContent } from '../ui-kit/Link';
import { isURL, withoutQuery } from '../utils/url';

export function isSubItemActive({ href, pathname }: Router) {
  return (item: LinkContent): boolean => {
    return withoutQuery(item.href) === (isURL(item.href) ? withoutQuery(href) : pathname);
  };
}
