import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';

/**
 * @title Плитка
 * @examples [{
 *   "title": "Плитка",
 *   "titleSize": "M",
 *   "description": "Описание",
 *   "image": {
 *     "format": "webp",
 *     "size": {
 *       "width": 300
 *     }
 *   },
 *   "items": [
 *     "Пункт 1",
 *     "Пункт 2",
 *     "Пункт 3"
 *   ],
 *   "buttons": [
 *     {
 *       "text": "Подробнее",
 *       "version": "primary"
 *     }
 *   ]
 * }]
 */
export type TileContent = BaseTileCommonProps;
