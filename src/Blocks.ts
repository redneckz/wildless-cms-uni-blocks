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
import { Tile } from './Tile';

export const Blocks = {
  Header,
  Footer,
  Placeholder,
  Tile,
  ProductTile,
  ProductBlock,
  StepsBlock,
  BenefitsBlock,
  ProductGallery,
  ExchangeRateTile,
  MobileAppTile,
};

export type BlockContent =
  | HeaderContent
  | FooterContent
  | PlaceholderContent
  | BaseTileContent
  | ProductTileContent
  | ProductBlockInnerContent
  | StepsBlockContent
  | BenefitsBlockContent
  | ProductGalleryContent
  | ExchangeRateTileContent
  | MobileAppTileContent;
