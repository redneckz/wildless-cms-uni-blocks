import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import { BlockItem } from './ui-kit/BlockItem';
import type { ButtonProps } from './ui-kit/Button';
import { Button } from './ui-kit/Button';
import { useLink } from './useLink';

export interface ProductColumnBlockContent {
  title?: string;
  items?: string[];
  button?: ButtonProps;
  promo?: boolean;
}

export interface ProductColumnBlockProps extends ProductColumnBlockContent {
  className?: string;
  context: ContentPageContext;
}

export const ProductColumnBlock = JSX<ProductColumnBlockProps>(
  ({ className, context, title, items, button, promo }) => {
    return (
      <div
        className={`relative p-8 bg-white text-black font-sans rounded-[40px] ${className || ''}`}
      >
        <p className="text-title font-medium m-0">{title}</p>
        {items?.length ? (
          <section className="flex flex-col" role="list">
            {items.map((_, i) => (
              <BlockItem key={String(i)} className="mt-6" text={_} />
            ))}
          </section>
        ) : null}
        {button?.text ? <Button className="mt-12" {...useLink(context, button)} /> : null}
        {promo && (
          <div className="absolute right-0 bottom-0 bg-promo font-normal px-12 py-3 text-xl rounded-tl-[74px] rounded-br-[40px]">
            Акция
          </div>
        )}
      </div>
    );
  },
);
