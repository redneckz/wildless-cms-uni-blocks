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
 */
export interface TextBlockContent {
  /** @title Заголовок */
  title?: string;
  description?: string;
  iconVersion?: TextBlockIconVersion;
  image?: Picture;
  blockVersion?: TextBlockVersion;
}
