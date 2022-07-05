import type { ButtonProps } from './ButtonProps';
import type { IconName } from './IconProps';

export interface IconButtonProps extends ButtonProps {
  icon?: IconName;
  aboveText?: string;
}
