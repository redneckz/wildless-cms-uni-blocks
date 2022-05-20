import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import { Icons } from './Icons';
import { Img } from './Img';
import { Picture } from './types';
import { BlockItem } from './ui-kit/BlockItem';
import type { LinkContent } from './ui-kit/Link';
import { PrimaryButton } from './ui-kit/PrimaryButton';
import { Breadcrumb, BreadcrumbProps } from './ui-kit/Breadcrumb';
import { useLink } from './useLink';

export interface Benefit {
  label: string;
  description?: string;
  icon?: keyof typeof Icons;
}

export interface ProductBlockContent {
  title?: string;
  description?: string;
  breadcrumbs?: BreadcrumbProps[];
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
  const { className, context, title, description, breadcrumbs, benefits, button, image, items } = props;

  return (
    <section
      className={`font-sans bg-white rounded-[40px] h-[470px] flex justify-between relative overflow-hidden ${className}`}
    >
      <div className={['flex', 'flex-col', 'p-11', image && 'pr-0'].filter(Boolean).join(' ')}>
        {breadcrumbs?.length ? (
          <div className="text-xs mb-6">
            {breadcrumbs.map((breadcrumb, i) => (
              <Breadcrumb key={String(i)} {...useLink(context, { className: 'text-secondary', ...breadcrumb })} />
            )).reduce((prev, curr) => [prev, <span className="text-secondary mx-2">/</span>, curr])}
          </div>
        ) : null}
        {title && <h1 className="font-medium text-title2 m-0 mb-4 whitespace-pre-wrap">{title}</h1>}
        {description && (
          <div className="font-normal text-base text-second-primary mb-7">{description}</div>
        )}
        {benefits?.length ? <div className="flex gap-6">{benefits.map(renderBenefit)}</div> : null}
        {items?.length ? (
          <section className="flex flex-col" role="list">
            {items.map((_) => (
              <BlockItem key={_} className="mt-6" text={_} />
            ))}
          </section>
        ) : null}
        {button?.text ? (
          <div className="mt-auto">
            <PrimaryButton {...useLink(context, button)} />
          </div>
        ) : null}
      </div>
      {image && <div className="h-full flex">{<Img image={image} className="flex" />}</div>}
    </section>
  );
});

function renderBenefit(benefit, index) {
  return (
    <div key={index} className="flex gap-4 items-center">
      {benefit.icon && (
        <div className="h-11 w-11 min-w-11 min-h-11 bg-second-light rounded-full p-[10px] box-border">
          {Icons[benefit.icon]()}
        </div>
      )}
      <div className="flex gap-1 flex-col">
        <h4 className="font-medium text-xl m-0">{benefit.label}</h4>
        {benefit.description && (
          <div className="font-normal text-sm text-second-primary">{benefit.description}</div>
        )}
      </div>
    </div>
  );
}
