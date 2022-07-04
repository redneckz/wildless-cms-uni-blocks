import type { ButtonVersion } from '../model/ButtonVersion';
import type { LinkContent } from '../model/LinkContent';

export interface ButtonProps extends LinkContent {
  className?: string;
  onClick?: (ev: MouseEvent) => any;
  version?: ButtonVersion;
  ariaLabel?: string;
  disabled?: boolean;
}
