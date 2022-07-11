import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';

/**
 * @title Акции
 * @examples [{
 *   "title": "Акции и спецпредложения",
 *   "date": "2022-04-16",
 *   "description": "Пенсионный кредит по специальной процентной ставке",
 *   "buttons": [
 *     {
 *       "text": "Все акции",
 *       "href": "/credits",
 *       "version": "secondary"
 *     }
 *   ],
 *   "version": "secondary"
 * }]
 */
export interface PromoTileContent extends BaseTileCommonProps {
  /** @title Дата публикации */
  date?: string;
}
