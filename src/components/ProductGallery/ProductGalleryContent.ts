import type { ProductBlockInnerCommonProps } from '../ProductBlock/ProductBlockContent';

/** @title Кнопка под слайдом */
interface ProductGalleryNav {
  /** @title Заголовок */
  title: string;
  /** @title Описание */
  desc: string;
}

/**
 * @title Слайд
 */
export interface ProductSlideContent {
  nav: ProductGalleryNav;
  /** @title Содержимое слайда */
  productBlock: ProductBlockInnerCommonProps;
}

/**
 * @title Продуктовая галерея
 * @examples [{
 *   "slides": [
 *     {
 *       "nav": {
 *         "title": "Заголовок",
 *         "desc": "Описание"
 *       },
 *       "productBlock": {
 *         "title": "Продуктовая галерея",
 *         "image": {
 *           "format": "webp",
 *           "size": {
 *             "width": 300
 *           }
 *         },
 *         "description": "Описание",
 *         "items": [
 *           "Элемент списка 1",
 *           "Элемент списка 2",
 *           "Элемент списка 3"
 *         ]
 *       }
 *     }
 *   ]
 * }]
 */
export interface ProductGalleryContent {
  /**
   * @title Задержка
   * @hidden //! temporary not used
   */
  duration?: number;
  /** @title Слайды */
  slides?: ProductSlideContent[];
}
