import type { LinkProps } from './LinkProps';

/**
 * @title Меню
 * @required ["text", "href"]
 */
export interface TopMenuItem extends LinkProps {
  /** @title Ссылки */
  items?: LinkProps[];
}

export interface SitemapProps {
  /** @title Дополнительное меню */
  topItems?: TopMenuItem[];
}
