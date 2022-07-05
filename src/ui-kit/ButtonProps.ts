import type { ButtonVersion } from '../model/ButtonVersion';
import type { LinkContent } from '../model/LinkContent';
import { IconName, IconProps } from './IconProps';

export interface ButtonInnerProps {
  text?: string;
  aboveText?: string;
  icon?: IconName;
  iconProps?: Omit<IconProps, 'name'>;
  rounded?: boolean;
}

export interface ButtonProps extends LinkContent, ButtonInnerProps {
  className?: string;
  onClick?: (ev: MouseEvent) => any;
  version?: ButtonVersion;
  ariaLabel?: string;
  disabled?: boolean;
}
