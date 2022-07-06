import { JSX } from '@redneckz/uni-jsx';
import { SizeTableClass, TitleProps } from './TitleProps';

export const Title = JSX<TitleProps>(({ size = 'L', className, children, ...rest }) => {
  const Tag = size === 'XL' ? 'h1' : 'h2';
  return (
    <Tag className={getClasses(SizeTableClass[size], className)} {...rest}>
      {children}
    </Tag>
  );
});

const getClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');
