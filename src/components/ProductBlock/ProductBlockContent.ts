import type { LinkProps } from '../../model/LinkProps';
import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export interface ProductBlockInnerCommonProps extends BaseTileCommonProps {
  /** @title Преимущества */
  benefits?: Benefit[];
}

/**
 * @title Продуктовый блок
 * @examples [{
 *   "title": "Продукт",
 *   "description": "Описание",
 *   "image": {
 *     "format": "webp",
 *     "size": {
 *       "width": 300
 *     }
 *   },
 *   "items": [
 *     "Элемент списка 1",
 *     "Элемент списка 2",
 *     "Элемент списка 3"
 *   ],
 *   "buttons": [
 *     {
 *       "text": "Подробнее",
 *       "version": "secondary"
 *     }
 *   ]
 * }]
 */
export interface ProductBlockContent extends ProductBlockInnerCommonProps {
  /** @title Хлебные крошки */
  breadcrumbs?: LinkProps[];
}
