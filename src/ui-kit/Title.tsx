import { JSX } from '@redneckz/uni-jsx';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';

export enum SizeTableTag {
  'XL' = 1,
  'L' = 2,
  'M' = 2,
  'S' = 2,
}

export enum SizeTableClass {
  'XL' = 'text-title-lg',
  'L' = 'text-title',
  'M' = 'text-title-sm',
  'S' = 'text-title-xs',
}

export interface TitleProps extends Partial<HTMLHeadingElement> {
  size?: keyof typeof SizeTableTag;
}

export const Title = JSX<TitleProps>(({ size = 'L', className, children, ...rest }) => {
  const Tag = `h${SizeTableTag[size]}` as HeadingTag;
  return (
    <Tag className={getClasses(SizeTableClass[size], className)} {...rest}>
      {children}
    </Tag>
  );
});

const getClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');
