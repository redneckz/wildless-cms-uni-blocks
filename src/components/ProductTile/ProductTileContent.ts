import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

/**
 * @title Продуктовая плитка
 * @examples [{
 *   "title": "Продуктовая плитка",
 *   "description": "Описание",
 *   "image": {
 *     "format": "webp",
 *     "size": {
 *       "width": 300
 *     }
 *   },
 *   "benefits": [
 *     {
 *       "label": "Преимущество 1",
 *       "description": "Описание"
 *     },
 *     {
 *       "label": "Преимущество 2",
 *       "description": "Описание"
 *     },
 *     {
 *       "label": "Преимущество 3",
 *       "description": "Описание"
 *     }
 *   ],
 *   "buttons": [
 *     {
 *       "text": "Подробнее",
 *       "version": "primary"
 *     }
 *   ]
 * }]
 */
export interface ProductTileContent extends BaseTileCommonProps {
  /** @title Преимущества */
  benefits?: Benefit[];
}
