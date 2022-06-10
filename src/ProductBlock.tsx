import { JSX } from '@redneckz/uni-jsx';
import { ProductBlockInner } from './ProductBlockInner';
import type { ProductBlockInnerContent } from './ProductBlockInner';
import type { UniBlocksComponentProps } from './types';

export interface ProductBlockProps extends ProductBlockInnerContent, UniBlocksComponentProps {}

export const ProductBlock = JSX<ProductBlockProps>((props) => {
  const className = props.className;
  return (
    <section className={`bg-white p-11 pr-[7.5rem] ${className || ''}`}>
      <ProductBlockInner {...props} />
    </section>
  );
});
