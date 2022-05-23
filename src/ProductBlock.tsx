import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import { Icons } from './Icons';
import { Img } from './Img';
import { Picture } from './types';
import { BlockItem } from './ui-kit/BlockItem';
import type { LinkContent } from './ui-kit/Link';
import { Button } from './ui-kit/Button';
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
  buttons?: LinkContent[];
}

export interface ProductBlockProps extends ProductBlockContent {
  className?: string;
  context: ContentPageContext;
}

export const ProductBlock = JSX<ProductBlockProps>((props) => {
  const { className, context, title, description, breadcrumbs, benefits, buttons, image, items } =
    props;

  return (
    <section
      className={`font-sans bg-white p-11 pr-[7.5rem] rounded-[40px] flex justify-between relative overflow-hidden ${
        className || ''
      }`}
    >
      <div className="flex text-primary-text flex-col">
        {breadcrumbs?.length ? (
          <div className="text-xs mb-6">
            {breadcrumbs
              .map((breadcrumb, i) => (
                <Breadcrumb
                  key={String(i)}
                  {...useLink(context, { className: 'text-secondary', ...breadcrumb })}
                />
              ))
              .reduce((prev, curr, i) => [
                prev,
                <span key={`delimiter_${i}`} className="text-secondary mx-2">
                  /
                </span>,
                curr,
              ])}
          </div>
        ) : null}
        {title && (
          <h1 className="font-medium text-title2 m-0 max-w-[600px] whitespace-pre-wrap">{title}</h1>
        )}
        {description && (
          <div className="font-normal text-base max-w-[600px] mt-4">{description}</div>
        )}
        {benefits?.length ? (
          <div className="flex gap-6 mt-7">{benefits.map(renderBenefit)}</div>
        ) : null}
        {items?.length ? (
          <section className="flex flex-col mt-4" role="list">
            {items.map((_, i) => (
              <BlockItem key={String(i)} className="mt-6" text={_} />
            ))}
          </section>
        ) : null}
        {buttons?.length ? (
          <div className="mt-auto flex gap-4">
            {buttons.map((button, index) =>
              button?.text ? (
                <Button key={String(index)} {...useLink(context, button)} className="mt-8" variant={button.variant} />
              ) : null,
            )}
          </div>
        ) : null}
      </div>
      {image && <Img image={image} className="flex ml-auto mt-auto" />}
    </section>
  );
});

function renderBenefit(benefit: Benefit, i: number) {
  return (
    <div key={String(i)} className="flex gap-4 items-center">
      {benefit.icon && (
        <div className="h-11 w-11 min-w-11 min-h-11 bg-main rounded-full p-[10px] box-border">
          {Icons[benefit.icon]()}
        </div>
      )}
      <div className="flex gap-1 flex-col h-full">
        <h4 className="font-medium text-xl m-0">{benefit.label}</h4>
        {benefit.description && (
          <div className="font-normal text-sm text-secondary">{benefit.description}</div>
        )}
      </div>
    </div>
  );
}
