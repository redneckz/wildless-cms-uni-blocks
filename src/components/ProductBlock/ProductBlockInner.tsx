import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Img } from '../../ui-kit/Img';
import { BaseTile } from '../BaseTile/BaseTile';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';
import type { ProductBlockInnerCommonProps } from './ProductBlockContent';

export interface ProductBlockInnerProps extends ProductBlockInnerCommonProps, UniBlockProps {}

const benefitIconBgStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-main',
  secondary: 'bg-white/30',
};
const benefitTitleStyleMap: Record<BlockVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-white',
};
const benefitDescStyleMap: Record<BlockVersion, string> = {
  primary: 'text-secondary-text',
  secondary: 'text-white',
};

export const ProductBlockInner = JSX<ProductBlockInnerProps>(
  ({
    className,
    context,
    title,
    titleSize,
    description,
    benefits,
    buttons,
    image,
    items,
    version = 'primary',
  }) => {
    return (
      <div className={`flex grow justify-between items-stretch ${className || ''}`}>
        <div className={'flex flex-col'}>
          <BaseTile
            context={context}
            title={title}
            titleSize={titleSize || 'XL'}
            description={description}
            items={items}
            buttons={buttons}
            version={version}
          >
            {benefits?.length ? (
              <div className="flex gap-6 mt-6 mb-3.5">
                {benefits.map((_, i) => renderBenefit(_, i, version))}
              </div>
            ) : null}
          </BaseTile>
        </div>
        {image?.src && <Img className="mt-auto" image={image} />}
      </div>
    );
  },
);

function renderBenefit(benefit: Benefit, i: number, version: string) {
  return (
    <div key={String(i)} className="flex gap-4 items-center">
      {benefit.icon && (
        <Icon
          className={`w-[50px] h-[50px] min-w-[50px] min-h-[50px] rounded-full p-[10px] box-border ${benefitIconBgStyleMap[version]}`}
          name={benefit.icon}
          width="24"
          height="24"
        />
      )}
      <div className="flex gap-1 flex-col h-full max-w-[149px]">
        <h4 className={`font-medium text-xl m-0 ${benefitTitleStyleMap[version]}`}>
          {benefit.label}
        </h4>
        {benefit.description && (
          <div className={`font-normal text-sm ${benefitDescStyleMap[version]}`}>
            {benefit.description}
          </div>
        )}
      </div>
    </div>
  );
}
