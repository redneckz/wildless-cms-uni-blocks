import type { BaseTileContent } from './BaseTileContent';
import type { Benefit } from './BenefitsBlockContent';

export interface ProductTileContent extends BaseTileContent {
  benefits?: Benefit[];
}
