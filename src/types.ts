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
import type { PlaceholderContent } from './Placeholder';
import type { RichTextContent } from './RichText';
import type { TextContent } from './Text';
import type { TextWithImageContent } from './TextWithImage';

export type BlockContent =
  | TextContent
  | TextWithImageContent
  | RichTextContent
  | PlaceholderContent;

export interface BlockDef {
  type: string;
  style?: string[];
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

export const GraphQL = {
  Block: `
    type BlockContent {
      primary: String
      secondary: String
      __html: String
    }

    type Block {
      type: String!
      style: [String!]
      content: BlockContent
      blocks: [Block!]
    }
  `,
  Page: `
    title: String!
    slug: String
    date: Date
    style: [String!]
    blocks: [Block!]
  `,
};
