import type { Picture } from '../../model/Picture';
import type { BlockDefProps } from '../../types';

/**
 * @title Карточка
 */
export interface GalleryCard {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  image?: Picture;
  /** @title Ссылка */
  href?: string;
  /** @title Список */
  items?: string[];
}

export interface GalleryContent {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  /** @title Карточки */
  cards?: GalleryCard[];
}

/**
 * @title Галерея
 */
export interface GalleryDef extends BlockDefProps {
  content?: GalleryContent;
  /**
   * @title Тип
   * @default Gallery
   */
  type: string;
}
