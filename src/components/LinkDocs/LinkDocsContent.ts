import type { LinkContent } from '../../model/LinkContent';
import type { IconName } from '../../ui-kit/Icon/IconProps';

export interface LinkDocsItem extends LinkContent {
  icon?: IconName;
  showIcon?: boolean;
  ext?: string;
  showExt?: boolean;
  fileSize?: string;
}

export type ColumnsMode = 'single' | 'double';

export type LinkDocsTitleAlignment = 'left' | 'center' | 'right';

export interface LinkDocsTitle {
  text?: string;
  align?: LinkDocsTitleAlignment;
}

export interface LinkDocsContent {
  title?: LinkDocsTitle;
  documents?: LinkDocsItem[];
  columns?: ColumnsMode;
}
