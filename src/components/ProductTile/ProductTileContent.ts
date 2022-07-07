import type { BlockDefProps } from '../../types';
import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export interface ProductTileContent extends BaseTileCommonProps {
  benefits?: Benefit[];
}

/**
 * @title Продуктовая плитка
 */
export interface ProductTileDef extends BlockDefProps {
  content?: ProductTileContent;
  /**
   * @title Тип
   * @default ProductTile
   */
  type: string;
}
