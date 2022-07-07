import { JSX } from '@redneckz/uni-jsx';
import { ProductBlockInner } from './ProductBlockInner';
import type { ProductBlockInnerContent } from './ProductBlockContent';
import type { UniBlockProps } from '../../types';

export interface ProductBlockProps extends ProductBlockInnerContent, UniBlockProps {}

export const ProductBlock = JSX<ProductBlockProps>(
  ({ titleSize, image, benefits, ...props } /* Get rid of image and benefits */) => {
    const { className } = props;
    return (
      <section
        className={`font-sans bg-white pt-10 pl-[50px] pb-[50px] pr-[7.5rem] ${className || ''}`}
      >
        <ProductBlockInner {...props} titleSize="L" />
      </section>
    );
  },
);
