import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import { Icons } from './Icons';
import { Img } from './Img';
import { Picture } from './types';
import { BlockItem } from './ui-kit/BlockItem';
import type { LinkContent } from './ui-kit/Link';
import { PrimaryButton } from './ui-kit/PrimaryButton';
import { useLink } from './useLink';

export interface Benefit {
  label: string;
  description?: string;
  icon?: keyof typeof Icons;
}

export interface ProductBlockContent {
  title?: string;
  description?: string;
  image?: Picture;
  benefits?: Benefit[];
  items?: string[];
  button?: LinkContent;
}

export interface ProductBlockProps extends ProductBlockContent {
  className?: string;
  context: ContentPageContext;
}

export const ProductBlock = JSX<ProductBlockProps>((props) => {
  const { className, context, title, description, benefits, button, image, items } = props;

  return (
    <section
      className={`font-sans bg-white rounded-[40px] flex justify-between relative overflow-hidden ${
        className || ''
      }`}
    >
      <div className={['flex', 'flex-col', 'p-11', image && 'pr-0'].filter(Boolean).join(' ')}>
        {title && (
          <h1 className="font-medium text-title2 m-0 max-w-[600px] whitespace-pre-wrap">{title}</h1>
        )}
        {description && (
          <div className="font-normal text-base text-second-primary max-w-[600px] mt-4">
            {description}
          </div>
        )}
        {benefits?.length ? (
          <div className="flex gap-6 mt-7">{benefits.map(renderBenefit)}</div>
        ) : null}
        {items?.length ? (
          <section className="flex flex-col mt-4" role="list">
            {items.map((_) => (
              <BlockItem key={_} className="mt-6" text={_} />
            ))}
          </section>
        ) : null}
        {button?.text ? (
          <div className="mt-auto">
            <PrimaryButton {...useLink(context, button)} className="mt-8" />
          </div>
        ) : null}
      </div>
      {image && <Img image={image} className="flex ml-auto mt-auto" />}
    </section>
  );
});

function renderBenefit(benefit: Benefit, index: number) {
  return (
    <div key={index} className="flex gap-4 items-center w-min">
      {benefit.icon && (
        <div className="h-11 w-11 min-w-11 min-h-11 bg-second-light rounded-full p-[10px] box-border">
          {Icons[benefit.icon]()}
        </div>
      )}
      <div className="flex gap-1 flex-col h-full">
        <h4 className="font-medium text-xl m-0 whitespace-nowrap">{benefit.label}</h4>
        {benefit.description && (
          <div className="font-normal text-sm text-second-primary">{benefit.description}</div>
        )}
      </div>
    </div>
  );
}
