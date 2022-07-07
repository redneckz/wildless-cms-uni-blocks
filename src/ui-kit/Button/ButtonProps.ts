import type { ButtonVersion } from '../../model/ButtonVersion';
import type { LinkContent } from '../../model/LinkContent';

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

export interface ButtonProps extends ButtonAdditionalProps, LinkContent {
  text?: string;
  version?: ButtonVersion;
}

export interface ButtonWithIconProps extends ButtonProps {
  aboveText?: string;
  /** @hidden */
  appendLeft?: any;
  rounded?: boolean;
}
