import type { BenefitsBlockContent } from './BenefitsBlock/BenefitsBlockContent';
import type { ComparisonTableContent } from './ComparisonTable/ComparisonTableContent';
import type { ExchangeRateTileContent } from './ExchangeRateTile/ExchangeRateTileContent';
import type { FooterContent } from './Footer/FooterContent';
import type { GalleryContent } from './Gallery/GalleryContent';
import type { HeaderContent } from './Header/HeaderContent';
import type { LinkDocsContent } from './LinkDocs/LinkDocsContent';
import type { MobileAppTileContent } from './MobileAppTile/MobileAppTileContent';
import type { PictureTextContent } from './PictureText/PictureTextContent';
import type { PlaceholderContent } from './Placeholder/PlaceholderContent';
import type { ProductBlockContent } from './ProductBlock/ProductBlockContent';
import type { ProductGalleryContent } from './ProductGallery/ProductGalleryContent';
import type { ProductTileContent } from './ProductTile/ProductTileContent';
import type { PromoTileContent } from './PromoTile/PromoTileContent';
import type { StepsBlockContent } from './StepsBlock/StepsBlockContent';
import type { TextBlockContent } from './TextBlock/TextBlockContent';
import type { TileContent } from './Tile/TileContent';
import { TariffsTableContent } from './TariffsTable/TariffsTableContent';

/**
 * @hidden
 */
export type BlockContent =
  | BenefitsBlockContent
  | ComparisonTableContent
  | ExchangeRateTileContent
  | FooterContent
  | GalleryContent
  | HeaderContent
  | LinkDocsContent
  | MobileAppTileContent
  | PictureTextContent
  | PlaceholderContent
  | ProductBlockContent
  | ProductGalleryContent
  | ProductTileContent
  | PromoTileContent
  | StepsBlockContent
  | TariffsTableContent
  | TextBlockContent
  | TileContent;
