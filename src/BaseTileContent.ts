import type { BlockVersion } from './model/BlockVersion';
import type { Picture } from './model/Picture';
import type { IconButtonProps } from './ui-kit/IconButtonProps';
import type { TitleSize } from './ui-kit/TitleProps';

export interface BaseTileContent {
  title?: string;
  titleSize?: TitleSize;
  description?: string;
  image?: Picture;
  items?: string[];
  buttons?: Omit<IconButtonProps, 'className' | 'onClick' | 'ariaLabel'>[];
  version?: BlockVersion;
}
