import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import { EmptyWalletIcon, PercentageSquareIcon, CalendarIcon } from './Icons/index';
import { Img } from './Img';
import { Picture } from './types';
import { BlockItem } from './ui-kit/BlockItem';
import type { ButtonProps } from './ui-kit/Button';
import { Button } from './ui-kit/Button';
import { Breadcrumb, BreadcrumbProps } from './ui-kit/Breadcrumb';
import { useLink } from './useLink';

const Icons = { EmptyWalletIcon, PercentageSquareIcon, CalendarIcon };

export interface Benefit {
  label: string;
  description?: string;
  icon?: keyof typeof Icons;
}

export interface ProductBlockInnerContent {
  title?: string;
  description?: string;
  breadcrumbs?: BreadcrumbProps[];
  image?: Picture;
  benefits?: Benefit[];
  items?: string[];
  buttons?: ButtonProps[];
}

export interface ProductBlockInnerProps extends ProductBlockInnerContent {
  context: ContentPageContext;
}

export const ProductBlockInner = JSX<ProductBlockInnerProps>(
  ({ context, title, description, breadcrumbs, benefits, buttons, image, items }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;

    return (
      <div className="font-sans flex justify-between items-stretch">
        <div className="flex flex-col">
          {breadcrumbs?.length ? (
            <div className="text-xs mb-6">
              {join(<span className="text-secondary-text mx-2">/</span>)(
                breadcrumbs.map((breadcrumb, i) => (
                  <Breadcrumb
                    key={String(i)}
                    {...useLink(
                      { router, handlerDecorator },
                      { className: 'text-secondary-text', ...breadcrumb },
                    )}
                  />
                )),
              )}
            </div>
          ) : null}
          {title && (
            <h1 className="font-medium text-title-lg m-0 whitespace-pre-wrap max-w-[600px]">
              {title}
            </h1>
          )}
          {description && (
            <div className="font-normal text-base max-w-[600px] mt-4">{description}</div>
          )}
          {benefits?.length ? (
            <div className="flex gap-6 mt-7">{benefits.map(renderBenefit)}</div>
          ) : null}
          {items?.length ? (
            <section className="space-y-2.5 mt-5" role="list">
              {items.map((_, i) => (
                <BlockItem key={String(i)} text={_} />
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
        {image?.src && <Img image={image} className="mt-auto" />}
      </div>
    );
  },
);

function renderBenefit(benefit: Benefit, i: number) {
  return (
    <div key={String(i)} className="flex gap-4 items-center">
      {benefit.icon && (
        <div className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] bg-main rounded-full p-[10px] box-border">
          {Icons[benefit.icon]()}
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

function renderButton(button: ButtonProps, i: number) {
  return button?.text ? (
    <Button key={String(i)} {...button} className="mt-8" version={button.version} />
  ) : null;
}

function join<E>(sep: E): (list: E[]) => E[] {
  return (list) => list.reduce((acc, el) => (acc.length ? acc.concat(sep, el) : [el]), [] as E[]);
}
