import type { BaseTileContent } from '../BaseTile/BaseTileContent';
import { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export interface PictureTextContent extends BaseTileContent {
  benefits?: Benefit[];
}
