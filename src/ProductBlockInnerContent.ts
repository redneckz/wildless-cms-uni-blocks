import type { BaseTileContent } from './BaseTileContent';
import type { Benefit } from './BenefitsBlockContent';

export interface ProductBlockInnerContent extends BaseTileContent {
  benefits?: Benefit[];
}
