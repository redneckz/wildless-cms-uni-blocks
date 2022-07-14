import type { LinkContent } from '../../model/LinkContent';
import type { IconName } from '../../ui-kit/Icon/IconProps';

export type LinkColumnsMode = 'single' | 'double';

export type LinkDocsTitleAlignment = 'left' | 'center' | 'right';

export interface LinkDocsItem extends LinkContent {
  fileSize?: string;
}

export interface LinkDocsContent {
  title?: string;
  titleAlign?: LinkDocsTitleAlignment;
  icon?: IconName;
  documents?: LinkDocsItem[];
  columnsMode?: LinkColumnsMode;
}
