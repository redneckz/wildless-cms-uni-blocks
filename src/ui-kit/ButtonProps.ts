import type { ButtonVersion } from '../model/ButtonVersion';
import type { LinkContent } from '../model/LinkContent';
import { IconName } from './IconProps';

export interface ButtonInnerProps {
  text?: string;
  aboveText?: string;
  appendLeft?: any;
  rounded?: boolean;
}

export interface ButtonProps
  extends LinkContent,
    ButtonInnerProps,
    Partial<Pick<HTMLAnchorElement, 'rel' | 'ariaLabel'>> {
  className?: string;
  onClick?: (ev: MouseEvent) => any;
  version?: ButtonVersion;
  disabled?: boolean;
}

export interface ButtonWithIconProps extends ButtonProps {
  icon?: IconName;
}
