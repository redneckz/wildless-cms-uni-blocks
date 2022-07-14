import { LinkProps } from '../../model/LinkProps';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import { BaseTileCommonProps } from '../BaseTile/BaseTileProps';

/** @title Режим отображения списка */
export type LinkColumnsMode = 'single' | 'double';

/**
 * @title Элемент списка
 */
export interface LinkDocsItem extends LinkProps {
  /** @title размер файла */
  fileSize?: string;
}

/**
 * @title Список документов
 */
export interface LinkDocsContent extends Pick<BaseTileCommonProps, 'align' | 'title'> {
  /** @title Название иконки */
  icon?: IconName;
  /** @title Список */
  documents?: LinkDocsItem[];
  /** @title Отображение списка */
  columnsMode?: LinkColumnsMode;
}
