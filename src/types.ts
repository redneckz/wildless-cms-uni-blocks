import type {
  AvifOptions,
  FormatEnum,
  GifOptions,
  HeifOptions,
  JpegOptions,
  PngOptions,
  ResizeOptions,
  TiffOptions,
  WebpOptions,
} from 'sharp';
import type { HeaderContent } from './Header/index';
import type { PlaceholderContent } from './Placeholder';
import type { RichTextContent } from './RichText';
import type { TextContent } from './Text';
import type { TextWithImageContent } from './TextWithImage';
import type { TileContent } from './Tile';
import type { ProductBlockInnerContent } from './ProductBlockInner';

export type BlockVersion = 'primary' | 'secondary';

export type ColorPalette = 'pc' | 'bc' | 'eo';

export type BlockContent =
  | HeaderContent
  | TextContent
  | TextWithImageContent
  | RichTextContent
  | PlaceholderContent
  | ProductBlockInnerContent
  | TileContent;

export interface BlockDef {
  type: string;
  style?: string[];
  version?: BlockVersion;
  content?: BlockContent;
  blocks?: BlockDef[];
}

export interface ContentPageMeta {
  title: string;
  slug: string;
  description?: string;
  keywords?: string[];
  robots?: string[];
  og?: Record<string, string>;
}

export interface ContentPageDef extends ContentPageMeta {
  style?: string[];
  blocks?: BlockDef[];
  likeControl?: boolean;
  colorPalette?: ColorPalette;
}

export interface Img {
  src: string;
  alt?: string;
  title?: string;
}

export interface ImgSource {
  src: string;
  format?: keyof FormatEnum;
  options?:
    | JpegOptions
    | PngOptions
    | WebpOptions
    | AvifOptions
    | HeifOptions
    | GifOptions
    | TiffOptions;
  size?: ResizeOptions;
}

export interface Picture extends Img, ImgSource {
  sources?: ImgSource[];
}
