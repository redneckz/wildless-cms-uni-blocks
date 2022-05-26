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
import type { HeaderContent } from './Header';
import type { PlaceholderContent } from './Placeholder';
import type { ProductColumnBlockContent } from './ProductColumnBlock';
import type { RichTextContent } from './RichText';
import type { TextContent } from './Text';
import type { TextWithImageContent } from './TextWithImage';
import type { ProductTileContent } from './ProductTile';

export type BlockVersion = 'primary' | 'secondary';

export type BlockContent =
  | ProductColumnBlockContent
  | HeaderContent
  | TextContent
  | TextWithImageContent
  | RichTextContent
  | PlaceholderContent
  | ProductTileContent;

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
