import { JSX } from '@redneckz/uni-jsx';
import { PrimaryButton } from './ui-kit/PrimaryButton';
import { BlockItem } from './ui-kit/BlockItem';
import type { ButtonContent } from './ui-kit/Button';

export interface ProductColumnBlockContent {
  title?: string;
  items?: string[];
  button?: ButtonContent;
}

export interface ProductColumnBlockProps extends ProductColumnBlockContent {
  className?: string;
}

export const ProductColumnBlock = JSX<ProductColumnBlockProps>(
  ({ className, title, items, button }) => {
    return (
      <div className={`p-8 bg-white rounded-[40px] ${className || ''}`}>
        <p className="text-black text-title font-sans font-medium m-0">{title}</p>
        <section className="flex flex-col" role="list">
          {items?.map((_) => (
            <BlockItem key={_} className="mt-6" text={_} />
          ))}
        </section>
        {button && <PrimaryButton className='mt-12' {...button} />}
      </div>
    );
  },
);
