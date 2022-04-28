export interface ButtonContent {
  text?: string;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
}

export interface ButtonProps extends ButtonContent {
  className?: string;
  onClick?: () => any;
}
