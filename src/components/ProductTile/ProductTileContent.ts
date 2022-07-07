import type { BaseTileContent } from '../BaseTile/BaseTileContent';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export interface ProductTileContent extends BaseTileContent {
  benefits?: Benefit[];
}
