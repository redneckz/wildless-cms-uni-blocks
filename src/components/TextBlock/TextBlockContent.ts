import type { Picture } from '../../model/Picture';
import type { BlockDefProps } from '../../types';

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

export interface TextBlockContent {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  blockVersion?: TextBlockVersion;
  iconVersion?: TextBlockIconVersion;
  image?: Picture;
}

/**
 * @title Текстовый блок
 */
export interface TextBlockDef extends BlockDefProps {
  content?: TextBlockContent;
  /**
   * @title Тип
   * @default TextBlock
   */
  type: string;
}
