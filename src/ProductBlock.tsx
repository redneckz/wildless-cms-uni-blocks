import { JSX } from '@redneckz/uni-jsx';
import { Icons } from './Icons';
import { Img } from './Img';
import { Picture } from './types';
import { ButtonContent } from './ui-kit/Button';
import { PrimaryButton } from './ui-kit/PrimaryButton';
import { BlockItem } from './ui-kit/BlockItem';
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
  button?: ButtonContent;
}
export interface ProductBlockProps extends ProductBlockContent {
  className?: string;
}

export const ProductBlock = JSX<ProductBlockProps>((props) => {
  const { className, title, description, benefits, button, image, items } = props;
  return (
    <section
      className={`font-sans bg-white rounded-[40px] h-[470px] flex relative overflow-hidden ${className}`}
    >
      <div className={['flex', 'flex-col', 'p-11', image && 'pr-0'].filter(Boolean).join(' ')}>
        {title && <h1 className="font-medium text-title2 m-0 mb-4 whitespace-pre-wrap">{title}</h1>}
        {description && (
          <div className="font-normal text-base text-second-primary mb-7">{description}</div>
        )}
        {benefits && <div className="flex gap-6">{benefits.map(renderBenefit)}</div>}
        {items && (
          <section className="flex flex-col" role="list">
            {items?.map((_) => (
              <BlockItem key={_} className="mt-6" text={_} />
            ))}
          </section>
        )}
        {button && button.text && (
          <div className="mt-auto">
            <PrimaryButton {...button} />
          </div>
        )}
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
          {Icons[benefit.icon]}
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
