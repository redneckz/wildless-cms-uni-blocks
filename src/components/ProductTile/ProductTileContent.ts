import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

/**
 * @title Продуктовая плитка
 */
export interface ProductTileContent extends BaseTileCommonProps {
  benefits?: Benefit[];
}
