import type { ButtonVersion } from '../model/ButtonVersion';
import type { LinkContent } from '../model/LinkContent';
import { IconName } from './IconProps';

export interface ButtonInnerProps {
  text?: string;
  aboveText?: string;
  appendLeft?: any;
  rounded?: boolean;
}

export interface ButtonProps extends LinkContent, ButtonInnerProps {
  className?: string;
  version?: ButtonVersion;
  disabled?: boolean;
  rel?: string;
  ariaLabel?: string;
  /** @hidden */
  onClick?: (ev: MouseEvent) => any;
}

export interface ButtonWithIconProps extends ButtonProps {
  icon?: IconName;
}
