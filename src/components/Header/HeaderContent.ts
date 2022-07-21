import type { SitemapProps } from '../../model/SitemapProps';

/**
 * @title Цвет фона
 * @enumNames [
 *    "Белый",
 *    "Прозрачный"
 * ]
 */
export type HeaderBgColor = 'white' | 'transparent';

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
   * @default white
   */
  bgColorScheme?: HeaderBgColor;
}
