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
import { Tile, TileContent } from './Tile';

export const Blocks = {
  Header,
  Footer,
  Placeholder,
  Tile,
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
  | TileContent
  | ProductBlockInnerContent
  | StepsBlockContent
  | BenefitsBlockContent
  | ProductGalleryContent
  | ExchangeRateTileContent
  | MobileAppTileContent;
