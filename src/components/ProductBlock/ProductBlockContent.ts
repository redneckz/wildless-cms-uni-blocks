import type { LinkProps } from '../../model/LinkProps';
import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export interface ProductBlockInnerCommonProps extends BaseTileCommonProps {
  /** @title Преимущества */
  benefits?: Benefit[];
}

/**
 * @title Продуктовый блок
 */
export interface ProductBlockContent extends ProductBlockInnerCommonProps {
  /** @title Хлебные крошки */
  breadcrumbs?: LinkProps[];
}
