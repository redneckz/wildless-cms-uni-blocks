import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import type { BaseTileIconButton } from '../BaseTile/BaseTileProps';

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
  button?: BaseTileIconButton;
  /**
   * @title Список
   * @minItems 4
   */
  items?: string[];
  version?: BlockVersion;
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
