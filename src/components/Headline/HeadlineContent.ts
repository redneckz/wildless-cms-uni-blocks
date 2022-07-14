import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';

/**
 * @title Цвет фона
 * @enumNames [
 *    "Прозрачный",
 *    "Белый"
 * ]
 */
export type HeadlineBgColor = 'transparent' | 'bg-white';

/**
 * @title Заголовок
 */
export interface HeadlineContent
  extends Pick<BaseTileCommonProps, 'title' | 'titleSize' | 'description' | 'align'> {
  bgColor?: HeadlineBgColor;
}
