import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Img as MobileImg } from '../../ui-kit/Img.mobile';
import { BaseTile as MobileBaseTile } from '../BaseTile/BaseTile.mobile';
import type { ProductBlockInnerCommonProps } from './ProductBlockContent';
import { renderBenefit as mobileRenderBenefit } from './renderBenefit.mobile';

export interface ProductBlockInnerProps extends ProductBlockInnerCommonProps, UniBlockProps {
  isMobile?: boolean;
}

export const ProductBlockInner = JSX<ProductBlockInnerProps>(
  ({ className, context, title, titleSize, description, benefits, buttons, image, items }) => {
    return (
      <div className={`${className || ''}`}>
        <div>
          <MobileBaseTile
            context={context}
            title={title}
            titleSize={titleSize || 'XL'}
            description={description}
            items={items}
            buttons={buttons}
          >
            {benefits?.length ? (
              <div className="my-5">{benefits.map(mobileRenderBenefit)}</div>
            ) : null}
          </MobileBaseTile>
        </div>
        {image?.src && (
          <div className="mt-5">
            <MobileImg image={image} />
          </div>
        )}
      </div>
    );
  },
);
