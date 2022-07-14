import type { LinkProps } from './LinkProps';

/**
 * @title Ссылка
 * @required ["text", "href"]
 */
export interface TopMenuItem extends LinkProps {
  /** @hidden */
  items?: LinkProps[];
}

export interface SitemapProps {
  /** @title Дополнительное меню */
  topItems?: TopMenuItem[];
}
