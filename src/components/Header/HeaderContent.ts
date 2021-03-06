import { BgColorVersion } from '../../model/BgColorVersion';
import type { SitemapProps } from '../../services/sitemap/SitemapProps';

/**
 * @title Шапка
 * @required ["defaultLocation", "topItems"]
 */
export interface HeaderContent extends SitemapProps {
  /**
   * @title Город по-умолчанию
   * @default Москва
   */
  defaultLocation?: string;
  /**
   * @title Фон элемента
   * @hidden
   * @default white
   */
  bgColor?: BgColorVersion;
}
