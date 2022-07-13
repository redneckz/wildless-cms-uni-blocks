import type { BaseTileContent } from '../BaseTile/BaseTileContent';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export interface PictureTextContent extends BaseTileContent {
  benefits?: Benefit[];
}
