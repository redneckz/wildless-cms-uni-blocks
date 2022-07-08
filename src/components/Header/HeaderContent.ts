import type { SitemapContent } from '../../model/SitemapContent';

/**
 * @title Шапка
 * @required ["defaultLocation", "topItems"]
 */
export interface HeaderContent extends SitemapContent {
  /**
   * @title Город по-умолчанию
   * @default Москва
   */
  defaultLocation?: string;
}
