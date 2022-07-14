import type { IconName } from '../../ui-kit/Icon/IconProps';
import { LinkProps } from '../../model/LinkProps';

/** @title Режим отображения списка */
export type LinkColumnsMode = 'single' | 'double';

/**
 * @title Выравнивание заголовка
 * @enumNames ["По левому краю", "По центру", "По правому краю"]
 * */
export type LinkDocsTitleAlignment = 'left' | 'center' | 'right';

/**
 * @title Элемент списка
 */
export interface LinkDocsItem extends LinkProps {
  /** @title размер файла */
  fileSize?: string;
}

/** @title Список документов */
export interface LinkDocsContent {
  /** @title Заголовок */
  title?: string;
  /** @title Выравнивание заголовка */
  titleAlign?: LinkDocsTitleAlignment;
  /** @title Название иконки */
  icon?: IconName;
  /** @title Список */
  documents?: LinkDocsItem[];
  /** @title Отображение списка */
  columnsMode?: LinkColumnsMode;
}
