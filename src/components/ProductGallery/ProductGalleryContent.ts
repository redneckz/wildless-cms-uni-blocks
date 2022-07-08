import type { ProductBlockInnerContent } from '../ProductBlock/ProductBlockContent';

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
  productBlock: ProductBlockInnerContent;
}

/**
 * @title Продуктовая галерея
 */
export interface ProductGalleryContent {
  /**
   * @title Задержка
   * @hidden //! temporary
   */
  duration?: number;
  /** @title Слайды */
  slides?: ProductSlideContent[];
}
