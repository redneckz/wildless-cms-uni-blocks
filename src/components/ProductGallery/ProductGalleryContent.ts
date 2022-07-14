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
