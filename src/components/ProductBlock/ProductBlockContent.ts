import type { LinkProps } from '../../model/LinkProps';
import type { TitleSize } from '../../ui-kit/Title/TitleProps';
import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export interface ProductBlockInnerCommonProps
  extends Omit<BaseTileCommonProps, 'align' | 'titleSize'> {
  /**
   * @title Размер заголовка
   * @default M
   * @hidden
   */
  titleSize?: TitleSize;
  /**
   * @title Преимущества
   * @minItems 2
   * @maxItems 3
   */
  benefits?: Benefit[];
}

/**
 * @title Продуктовый блок
 */
export interface ProductBlockContent extends ProductBlockInnerCommonProps {
  /** @title Хлебные крошки */
  breadcrumbs?: LinkProps[];
}
