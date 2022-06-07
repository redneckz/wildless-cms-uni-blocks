import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import { ProductBlockInner, ProductBlockInnerContent } from './ProductBlockInner';

export interface ProductBlockProps extends ProductBlockInnerContent {
  className?: string;
  context: ContentPageContext;
}

export const ProductBlock = JSX<ProductBlockProps>((props) => {
  const className = props.className;
  return (
    <section className={`bg-white p-11 pr-[7.5rem] rounded-[40px] ${className || ''}`}>
      <ProductBlockInner {...props} />
    </section>
  );
});
