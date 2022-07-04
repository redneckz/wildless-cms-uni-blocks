import { BaseTileContent } from './BaseTile';
import { BenefitsBlock, BenefitsBlockContent } from './BenefitsBlock';
import { ExchangeRateTile, ExchangeRateTileContent } from './ExchangeRateTile';
import { Footer, FooterContent } from './Footer/index';
import { Gallery } from './Gallery';
import { GalleryContent } from './GalleryInner';
import { Header, HeaderContent } from './Header/index';
import { MobileAppTile, MobileAppTileContent } from './MobileAppTile';
import { Placeholder, PlaceholderContent } from './Placeholder';
import { ProductBlock } from './ProductBlock';
import { ProductBlockInnerContent } from './ProductBlockInner';
import { ProductGallery, ProductGalleryContent } from './ProductGallery';
import { ProductTile, ProductTileContent } from './ProductTile';
import { PromoTile, PromoTileContent } from './PromoTile';
import { StepsBlock, StepsBlockContent } from './StepsBlock';
import { TextBlock, TextBlockContent } from './TextBlock';
import { Tile } from './Tile';

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
