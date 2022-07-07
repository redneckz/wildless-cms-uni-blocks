import type { LinkContent } from '../../model/LinkContent';
import type { BlockDefProps } from '../../types';
import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export interface ProductBlockInnerContent extends BaseTileCommonProps {
  benefits?: Benefit[];
}

export interface ProductBlockContent extends ProductBlockInnerContent {
  /** @title Хлебные крошки */
  breadcrumbs?: LinkContent[];
}

/**
 * @title Продуктовый блок
 */
export interface ProductBlockDef extends BlockDefProps {
  content?: ProductBlockContent;
  /**
   * @title Тип
   * @default ProductBlock
   */
  type: string;
}
