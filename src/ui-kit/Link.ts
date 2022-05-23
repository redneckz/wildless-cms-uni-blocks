export enum Variants {
  primary = 'btn-primary',
  secondary = 'btn-secondary',
}
export interface LinkContent {
  text?: string;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
  variant?: keyof typeof Variants;
}
