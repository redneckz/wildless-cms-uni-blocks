import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import * as Icons from './Icons/index';
import { Img } from './Img';
import { BlockVersion, Picture } from './types';
import { BlockItem } from './ui-kit/BlockItem';
import type { ButtonProps } from './ui-kit/Button';
import { Button } from './ui-kit/Button';
import { Breadcrumb, BreadcrumbProps } from './ui-kit/Breadcrumb';
import { useLink } from './useLink';

export interface Benefit {
  label: string;
  description?: string;
  icon?: keyof typeof Icons;
}

export interface ProductTileContent {
  title?: string;
  description?: string;
  breadcrumbs?: BreadcrumbProps[];
  image?: Picture;
  benefits?: Benefit[];
  items?: string[];
  buttons?: ButtonProps[];
}

export interface ProductTileProps extends ProductTileContent {
  className?: string;
  version?: BlockVersion;
  context: ContentPageContext;
}

const productBlockStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-brand text-white',
};

export const ProductTile = JSX<ProductTileProps>(
  ({
    className,
    context,
    title,
    description,
    breadcrumbs,
    benefits,
    buttons,
    image,
    items,
    version = 'primary',
  }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;

    return (
      <section
        className={`font-sans p-9 rounded-[40px] flex justify-between items-stretch relative ${
          className || ''
        } ${productBlockStyleMap[version]}`}
      >
        <div className="flex flex-col">
          {breadcrumbs?.length ? (
            <div className="text-xs mb-6">
              {join(<span className="text-secondary mx-2">/</span>)(
                breadcrumbs.map((breadcrumb, i) => (
                  <Breadcrumb
                    key={String(i)}
                    {...useLink(
                      { router, handlerDecorator },
                      { className: 'text-secondary', ...breadcrumb },
                    )}
                  />
                )),
              )}
            </div>
          ) : null}
          {title && <h1 className="font-medium text-title m-0 whitespace-pre-wrap">{title}</h1>}
          {description && (
            <div className="font-normal text-base max-w-[600px] mt-4">{description}</div>
          )}
          {benefits?.length ? (
            <div className="flex gap-6 mt-7">{benefits.map(renderBenefit)}</div>
          ) : null}
          {items?.length ? (
            <section className="space-y-2.5 mt-5" role="list">
              {items.map((_, i) => (
                <BlockItem key={String(i)} text={_} version={version} />
              ))}
            </section>
          ) : null}
          {buttons?.length ? (
            <div className="flex mt-auto gap-4">
              {buttons.map((button, index) =>
                renderButton(useLink({ router, handlerDecorator }, button), index),
              )}
            </div>
          ) : null}
        </div>
        {image && <Img image={image} className="absolute bottom-9 right-9" />}
      </section>
    );
  },
);

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

function renderButton(button: ButtonProps, i: number) {
  return button?.text ? (
    <Button key={String(i)} {...button} className="mt-8" version={button.version} />
  ) : null;
}

function join<E>(sep: E): (list: E[]) => E[] {
  return (list) => list.reduce((acc, el) => (acc.length ? acc.concat(sep, el) : [el]), [] as E[]);
}
