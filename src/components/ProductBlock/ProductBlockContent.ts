import type { LinkContent } from '../../model/LinkContent';
import type { BaseTileContent } from '../BaseTile/BaseTileContent';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export interface ProductBlockInnerContent extends BaseTileContent {
  benefits?: Benefit[];
}

export interface ProductBlockContent extends ProductBlockInnerContent {
  breadcrumbs?: LinkContent[];
}
