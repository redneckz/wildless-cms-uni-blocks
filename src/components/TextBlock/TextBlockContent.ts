import type { Picture } from '../../model/Picture';

/**
 * @title Цвет плитки
 * @enumNames ["Основная", "Второстепенная", "Второстепенная прозрачная"]
 */
export type TextBlockVersion = 'primary' | 'secondary' | 'secondary-light';

/**
 * @title Размер иконки
 * @enumNames ["Нет", "Маленькая", "Большая"]
 */
export type TextBlockIconVersion = 'none' | 'small' | 'big';

/**
 * @title Текстовый блок
 * @examples [{
 *   "title": "Заголовок",
 *   "description": "Описание",
 *   "blockVersion": "primary",
 *   "iconVersion": "small"
 * }]
 */
export interface TextBlockContent {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  blockVersion?: TextBlockVersion;
  iconVersion?: TextBlockIconVersion;
  image?: Picture;
}
