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
  /**
   * @title Текст
   * @default Кнопка
   */
  text?: string;
  version?: ButtonVersion;
}

export interface ButtonWithIconProps extends ButtonProps {
  /** @title Верхний текст */
  aboveText?: string;
  /** @hidden */
  appendLeft?: any;
  /** @hidden */
  rounded?: boolean;
  /** @hidden */
  asSVG?: boolean;
}
