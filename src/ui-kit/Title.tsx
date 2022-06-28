import { JSX } from '@redneckz/uni-jsx';

export enum SizeTableClass {
  'XL' = 'text-title-lg',
  'L' = 'text-title',
  'M' = 'text-title-sm',
  'S' = 'text-title-xs',
}

export type TitleSize = keyof typeof SizeTableClass;

export interface TitleProps extends Partial<HTMLHeadingElement> {
  size?: TitleSize;
}

export const Title = JSX<TitleProps>(({ size = 'L', className, children, ...rest }) => {
  const Tag = size === 'XL' ? 'h1' : 'h2';
  return (
    <Tag className={getClasses(SizeTableClass[size], className)} {...rest}>
      {children}
    </Tag>
  );
});

const getClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');
