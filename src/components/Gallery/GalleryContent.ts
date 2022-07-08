import type { Picture } from '../../model/Picture';

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

/**
 * @title Галерея
 */
export interface GalleryContent {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  /** @title Карточки */
  cards?: GalleryCard[];
}
