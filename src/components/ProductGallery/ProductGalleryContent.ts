import type { BlockDefProps } from '../../types';
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

export interface ProductGalleryContent {
  /**
   * @title Задержка
   * @hidden //! temporary
   */
  duration?: number;
  /** @title Слайды */
  slides?: ProductSlideContent[];
}

/**
 * @title Продуктовая галерея
 */
export interface ProductGalleryDef extends BlockDefProps {
  content?: ProductGalleryContent;
  /**
   * @title Тип
   * @default ProductGallery
   */
  type: string;
}
