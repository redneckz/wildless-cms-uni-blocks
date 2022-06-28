import { JSX } from '@redneckz/uni-jsx';
import { EmptyWalletIcon, PercentageSquareIcon, CalendarIcon } from './Icons/index';
import type { UniBlockProps, Benefit } from './types';
import { BaseTile } from './BaseTile';
import { Title } from './ui-kit/Title';
import type { BaseTileContent } from './BaseTile';
import { Img } from './Img';

const ICONS = { EmptyWalletIcon, PercentageSquareIcon, CalendarIcon };

export interface ProductBlockInnerContent extends BaseTileContent {
  benefits?: Benefit[];
}

export interface ProductBlockInnerProps extends ProductBlockInnerContent, UniBlockProps {}

export const ProductBlockInner = JSX<ProductBlockInnerProps>(
  ({ className, context, title, description, benefits, buttons, image, items }) => {
    return (
      <div className={`flex grow justify-between items-stretch ${className || ''}`}>
        <div className={'flex flex-col'}>
          {title && (
            <Title size="XL" className="font-medium m-0 mb-4 whitespace-pre-wrap max-w-[600px]">
              {title}
            </Title>
          )}
          <BaseTile context={context} description={description} items={items} buttons={buttons}>
            {benefits?.length ? (
              <div className="flex gap-6 mt-6 mb-3.5">{benefits.map(renderBenefit)}</div>
            ) : null}
          </BaseTile>
        </div>
        {image?.src && <Img className="mt-auto" image={image} />}
      </div>
    );
  },
);

function renderBenefit(benefit: Benefit, i: number) {
  return (
    <div key={String(i)} className="flex gap-4 items-center">
      {benefit.icon && (
        <div className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] bg-main rounded-full p-[10px] box-border">
          {ICONS[benefit.icon as keyof typeof ICONS]?.()}
        </div>
      )}
      <div className="flex gap-1 flex-col h-full">
        <h4 className="font-medium text-xl m-0">{benefit.label}</h4>
        {benefit.description && (
          <div className="font-normal text-sm text-secondary-text">{benefit.description}</div>
        )}
      </div>
    </div>
  );
}
