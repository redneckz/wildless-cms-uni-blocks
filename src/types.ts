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

export interface BlockDef<BlockContent> {
  type: string;
  style?: string[];
  content?: BlockContent;
  blocks?: BlockDef<BlockContent>[];
}

export interface ContentPageDef<BlockContent> {
  title: string;
  slug: string;
  style?: string[];
  blocks?: BlockDef<BlockContent>[];
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
  sources: ImgSource[];
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
