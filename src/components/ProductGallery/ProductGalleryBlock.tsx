import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { TitleSize } from '../../ui-kit/Title/TitleProps';
import type { ProductBlockInnerCommonProps } from '../ProductBlock/ProductBlockContent';
import { ProductBlockInner } from '../ProductBlock/ProductBlockInner';

export interface ProductGalleryBlockProps extends UniBlockProps {
  titleSize?: TitleSize;
  block?: ProductBlockInnerCommonProps;
}

export const ProductGalleryBlock = JSX<ProductGalleryBlockProps>(
  ({ block, titleSize, context }) => {
    return (
      <section className="flex grow-0 shrink-0 basis-full" role="listitem">
        <div className="p-10 flex grow">
          <ProductBlockInner
            className="pl-2.5 pt-2.5 pb-1.5 pr-[6.25rem]"
            context={context}
            titleSize={titleSize}
            {...block}
          />
        </div>
      </section>
    );
  },
);
