import type { ButtonVersion } from '../../model/ButtonVersion';
import type { LinkProps } from '../../model/LinkProps';

/**
 * @hidden
 */
export interface ButtonAdditionalProps {
  className?: string;
  disabled?: boolean;
  rel?: string;
  ariaLabel?: string;
  onClick?: (ev: MouseEvent) => any;
}

export interface ButtonProps extends ButtonAdditionalProps, LinkProps {
  text?: string;
  version?: ButtonVersion;
}

export interface ButtonWithIconProps extends ButtonProps {
  /** @hidden */
  aboveText?: string;
  /** @hidden */
  appendLeft?: any;
  /** @hidden */
  rounded?: boolean;
}
