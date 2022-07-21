import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';
import { Picture } from '../../model/Picture';

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
  extends Pick<BaseTileCommonProps, 'title' | 'titleSize' | 'description' | 'align' | 'image'> {
  bgColor?: HeadlineBgColor;
  image?: Picture;
}
