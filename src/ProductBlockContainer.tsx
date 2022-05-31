import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import * as Icons from './Icons/index';
import { BlockVersion, Picture } from './types';
import type { ButtonProps } from './ui-kit/Button';
import { Button } from './ui-kit/Button';
import { ProductBlock, ProductBlockContent } from './ProductBlock';

export interface Benefit {
  label: string;
  description?: string;
  icon?: keyof typeof Icons;
}

export interface ProductBlockContainerProps extends ProductBlockContent {
  className?: string;
  context: ContentPageContext;
}

export const ProductBlockContainer = JSX<ProductBlockContainerProps>((props) => {
  const className = props.className;
  return (
    <section className={`bg-white p-11 pr-[7.5rem] rounded-[40px] ${className || ''}`}>
      <ProductBlock {...props} />
    </section>
  );
});
