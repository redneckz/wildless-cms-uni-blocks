export enum SizeTableClass {
  'XL' = 'text-title-lg',
  'L' = 'text-title',
  'M' = 'text-title-sm',
  'S' = 'text-title-xs',
  'XS' = 'text-title-xxs',
}

export type TitleSize = keyof typeof SizeTableClass;

export interface TitleProps extends Partial<HTMLHeadingElement> {
  size?: TitleSize;
}
