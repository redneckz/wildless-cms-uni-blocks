export enum SizeTableClass {
  'XL' = 'text-title-lg',
  'L' = 'text-title',
  'M' = 'text-title-sm',
  'S' = 'text-title-xs',
  'XS' = 'text-title-xs',
  'XXS' = 'text-title-xxs',
  'XXXS' = 'text-title-xxxs',
}

export type TitleSize = keyof typeof SizeTableClass;

export interface TitleProps extends Partial<HTMLHeadingElement> {
  size?: TitleSize;
}
