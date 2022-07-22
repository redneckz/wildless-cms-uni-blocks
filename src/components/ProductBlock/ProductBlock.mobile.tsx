import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { ProductBlockInnerCommonProps } from './ProductBlockContent';
import { ProductBlockInner as MobileProductBlockInner } from './ProductBlockInner.mobile';

export interface ProductBlockProps extends ProductBlockInnerCommonProps, UniBlockProps {}

export const ProductBlock = JSX<ProductBlockProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (props /* Get rid of image and benefits */) => {
    const { className } = props;
    return (
      <section className={`font-sans bg-white px-4 py-6 ${className || ''}`}>
        <MobileProductBlockInner {...props} titleSize="S" />
      </section>
    );
  },
);
