import type { Picture } from '../../model/Picture';
import type { ButtonCommonProps } from '../../ui-kit/Button/Button';
import type { BlockVersion } from '../../model/BlockVersion';

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
  button?: ButtonCommonProps;
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
