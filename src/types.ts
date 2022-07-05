import type { BlockContent } from './BlockContent';
import type { ContentPageContext } from './ContentPageContext';
import type { BlockVersion } from './model/BlockVersion';

export type ColorPalette = 'pc' | 'bc' | 'eo';

export type SectionType = 'header' | 'main';

export interface BlockDef {
  type: string;
  style?: string[];
  version?: BlockVersion;
  content?: BlockContent;
  blocks?: BlockDef[];
  mobile?: Pick<BlockDef, 'content' | 'style'> & {
    hidden?: boolean;
  };
}

export interface Section {
  type: SectionType;
  style?: string[];
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
  sections?: (Section | BlockDef)[];
  likeControl?: boolean;
  colorPalette?: ColorPalette;
}

export interface UniBlockProps {
  className?: string;
  context: ContentPageContext;
}

export interface DaDataResult {
  suggestions?: DaDataSuggestion<DaDataAddress>[];
}

export interface DaDataSuggestion<T> {
  value?: string;
  unrestricted_value?: string;
  data?: T;
}

export interface DaDataAddress {
  city?: string | null;
}
