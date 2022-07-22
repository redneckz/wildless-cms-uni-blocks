import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { TitleSize } from '../../ui-kit/Title/TitleProps';

/**
 * @title Выравнивание
 * @enumNames [
 *    "По левому краю",
 *    "По центру",
 *    "По правому краю"
 * ]
 */
export type AlignType = 'left' | 'center' | 'right';

export interface BaseTileIconButton extends ButtonWithIconProps {
  icon?: IconName;
}

/**
 * @title Плитка общая
 */
export interface BaseTileCommonProps extends BaseTileTitleProps, BaseTileMainProps {}

/**
 * @title Заголовок Плитки
 */
export interface BaseTileTitleProps {
  /** @title Заголовок */
  title?: string;
  /**
   * @title Размер заголовка
   * @default M
   */
  titleSize?: TitleSize;
  align?: AlignType;
}

/**
 * @title Плитка
 */
export interface BaseTileMainProps {
  /** @title Описание */
  description?: string;
  image?: Picture;
  /** @title Список */
  items?: string[];
  /**
   * @title Кнопки
   * @maxItems 4
   */
  buttons?: BaseTileIconButton[];
  version?: BlockVersion;
  align?: AlignType;
}
