import type { Router } from '../ContentPageContext';
import type { LinkContent } from '../types';
import { isURL, withoutQuery } from '../utils/url';

export function isTopItemActive({ href, pathname }: Router) {
  return (item: LinkContent): boolean => {
    const itemHref = withoutQuery(item.href);
    if (isURL(itemHref)) {
      return Boolean(href && href.startsWith(itemHref));
    }
    return Boolean(itemHref && pathname.startsWith(itemHref));
  };
}
