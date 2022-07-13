import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { TitleSize } from '../../ui-kit/Title/TitleProps';

export interface BaseTileContent {
  title?: string;
  titleSize?: TitleSize;
  description?: string;
  image?: Picture;
  items?: string[];
  buttons?: ButtonWithIconProps[];
  version?: BlockVersion;
  align?: string;
}
