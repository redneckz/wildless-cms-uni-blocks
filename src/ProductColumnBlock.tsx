import { JSX } from '@redneckz/uni-jsx';
import { PrimaryButton } from './ui-kit/PrimaryButton';
import { BlockItem } from './ui-kit/BlockItem';
import type { ButtonContent } from './ui-kit/Button';

export interface ProductColumnBlockContent {
  title?: string;
  items?: string[];
  button?: ButtonContent;
  promo?: boolean;
}

export interface ProductColumnBlockProps extends ProductColumnBlockContent {
  className?: string;
}

export const ProductColumnBlock = JSX<ProductColumnBlockProps>(
  ({ className, title, items, button, promo }) => {
    return (
      <div
        className={`relative p-8 bg-white text-black font-sans rounded-[40px] ${className || ''}`}
      >
        <p className="text-title font-medium m-0">{title}</p>
        {items && items.length && (
          <section className="flex flex-col" role="list">
            {items?.map((_) => (
              <BlockItem key={_} className="mt-6" text={_} />
            ))}
          </section>
        )}
        {button && button.text && <PrimaryButton className="mt-12" {...button} />}
        {promo && (
          <div className="absolute right-0 bottom-0 bg-promo font-normal px-12 py-3 text-xl rounded-tl-[74px] rounded-br-[40px]">
            Акция
          </div>
        )}
      </div>
    );
  },
);
