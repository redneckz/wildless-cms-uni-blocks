import type { SitemapContent } from '../../model/SitemapContent';
import type { BlockDefProps } from '../../types';

/**
 * @required ["defaultLocation", "topItems"]
 */
export interface HeaderContent extends SitemapContent {
  /**
   * @title Город по-умолчанию
   * @default Москва
   */
  defaultLocation?: string;
}

/**
 * @title Шапка
 */
export interface HeaderDef extends BlockDefProps {
  content?: HeaderContent;
  /**
   * @title Тип
   * @default Header
   */
  type: string;
}
