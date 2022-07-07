import type { BlockDefProps } from '../types';
import type { BenefitsBlockContent } from './BenefitsBlock/BenefitsBlockContent';
import type { ComparisonTableContent } from './ComparisonTable/ComparisonTableContent';
import type { ExchangeRateTileContent } from './ExchangeRateTile/ExchangeRateTileContent';
import type { FooterContent } from './Footer/FooterContent';
import type { GalleryContent } from './Gallery/GalleryContent';
import type { HeaderContent } from './Header/HeaderContent';
import type { MobileAppTileContent } from './MobileAppTile/MobileAppTileContent';
import type { PlaceholderContent } from './Placeholder/PlaceholderContent';
import type { ProductBlockContent } from './ProductBlock/ProductBlockContent';
import type { ProductGalleryContent } from './ProductGallery/ProductGalleryContent';
import type { ProductTileContent } from './ProductTile/ProductTileContent';
import type { PromoTileContent } from './PromoTile/PromoTileContent';
import type { StepsBlockContent } from './StepsBlock/StepsBlockContent';
import type { TextBlockContent } from './TextBlock/TextBlockContent';
import type { TileContent } from './Tile/TileContent';

/**
 * @hidden
 */
export type BlockContent =
  | HeaderContent
  | FooterContent
  | PlaceholderContent
  | TileContent
  | PromoTileContent
  | TextBlockContent
  | ProductTileContent
  | ProductBlockContent
  | StepsBlockContent
  | BenefitsBlockContent
  | ProductGalleryContent
  | ExchangeRateTileContent
  | MobileAppTileContent
  | GalleryContent
  | ComparisonTableContent;
