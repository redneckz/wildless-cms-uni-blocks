import type { BlockContent } from './components/BlockContent';
import type { ContentPageContext } from './components/ContentPage/ContentPageContext';
import type { BlockVersion } from './model/BlockVersion';

export type ColorPalette = 'pc' | 'bc' | 'eo' | 'eo2' | 'eo3' | 'eo4';

export interface BlockDef {
  type: string;
  style?: string[];
  content?: BlockContent;
  version?: BlockVersion;
  blocks?: BlockDef[];
  mobile?: Pick<BlockDef, 'content' | 'style'> & {
    hidden?: boolean;
  };
}

export interface Slot {
  style?: string[];
  blocks?: BlockDef[];
}

export interface Slots {
  header?: Slot;
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
  blocks?: BlockDef[]; //! for compatibility
  slots?: Slots;
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
