import type { BlockVersion } from './model/BlockVersion';
import type { Picture } from './model/Picture';
import type { ButtonWithIconProps } from './ui-kit/ButtonProps';
import type { TitleSize } from './ui-kit/TitleProps';

export interface BaseTileContent {
  title?: string;
  titleSize?: TitleSize;
  description?: string;
  image?: Picture;
  items?: string[];
  buttons?: ButtonWithIconProps[];
  version?: BlockVersion;
}
