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
import type { BlockContent } from './Blocks';
import type { ContentPageContext } from './ContentPageContext';

export type ColorPalette = 'pc' | 'bc' | 'eo';

export type BlockVersion = 'primary' | 'secondary';

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

export interface UniBlockProps {
  className?: string;
  context: ContentPageContext;
}

export interface ContactInfo {
  text: string;
  type: 'tel' | 'email';
  description: string;
}

export interface LinkContent {
  text?: string;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
}

export type NavMenuItem = LinkContent;

export interface TopMenuItem extends NavMenuItem {
  items?: NavMenuItem[];
}

export interface Benefit {
  label: string;
  description?: string;
  icon?: string;
}
