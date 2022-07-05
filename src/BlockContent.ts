import type { BenefitsBlockContent } from './BenefitsBlockContent';
import type { ExchangeRateTileContent } from './ExchangeRateTileContent';
import type { FooterContent } from './Footer/FooterContent';
import type { GalleryContent } from './GalleryContent';
import type { HeaderContent } from './Header/HeaderContent';
import type { MobileAppTileContent } from './MobileAppTileContent';
import type { PlaceholderContent } from './PlaceholderContent';
import type { ProductBlockContent } from './ProductBlockContent';
import type { ProductGalleryContent } from './ProductGalleryContent';
import type { ProductTileContent } from './ProductTileContent';
import type { PromoTileContent } from './PromoTileContent';
import type { StepsBlockContent } from './StepsBlockContent';
import type { TextBlockContent } from './TextBlockContent';
import type { TileContent } from './TileContent';

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
  | GalleryContent;
