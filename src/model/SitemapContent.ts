import type { LinkContent } from '../model/LinkContent';

/**
 * @title Ссылка
 * @required ["text", "href"]
 */
export interface TopMenuItem extends LinkContent {
  /** @hidden */
  items?: LinkContent[];
}

export interface SitemapContent {
  /** @title Дополнительное меню */
  topItems?: TopMenuItem[];
}
