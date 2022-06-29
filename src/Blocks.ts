import { BenefitsBlock, BenefitsBlockContent } from './BenefitsBlock';
import { ExchangeRateTile, ExchangeRateTileContent } from './ExchangeRateTile';
import { Footer, FooterContent } from './Footer/index';
import { Header, HeaderContent } from './Header/index';
import { MobileAppTile, MobileAppTileContent } from './MobileAppTile';
import { Placeholder, PlaceholderContent } from './Placeholder';
import { ProductBlock } from './ProductBlock';
import { ProductBlockInnerContent } from './ProductBlockInner';
import { ProductGallery, ProductGalleryContent } from './ProductGallery';
import { StepsBlock, StepsBlockContent } from './StepsBlock';
import { ProductTile, ProductTileContent } from './ProductTile';
import { BaseTileContent } from './BaseTile';
import { PromoTile, PromoTileContent } from './PromoTile';
import { Tile } from './Tile';
import { TextBlock, TextBlockContent } from './TextBlock';
import { Gallery, GalleryContent } from './Gallery';

export const Blocks = {
  Header,
  Footer,
  Placeholder,
  Tile,
  PromoTile,
  TextBlock,
  ProductTile,
  ProductBlock,
  StepsBlock,
  BenefitsBlock,
  ProductGallery,
  ExchangeRateTile,
  MobileAppTile,
  Gallery,
};

export type BlockContent =
  | HeaderContent
  | FooterContent
  | PlaceholderContent
  | BaseTileContent
  | TextBlockContent
  | ProductTileContent
  | PromoTileContent
  | ProductBlockInnerContent
  | StepsBlockContent
  | BenefitsBlockContent
  | ProductGalleryContent
  | ExchangeRateTileContent
  | MobileAppTileContent
  | GalleryContent;
