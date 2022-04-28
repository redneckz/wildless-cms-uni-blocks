import { JSX } from '@redneckz/uni-jsx';
import { PrimaryButton } from './ui-kit';
import { Picture } from './types';
import { Icons } from './Icons';
import { Img } from './Img';

export interface Benefit {
  label: string;
  description?: string;
  icon?: keyof typeof Icons;
}

export interface ProductBlockContent {
  title?: string;
  description?: string | Node;
  image?: Picture;
  benefits?: Benefit[];
  buttonText?: string;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
}

export interface ProductBlockProps extends ProductBlockContent {
  className?: string;
}

export const ProductBlock = JSX<ProductBlockProps>((props) => {
  const {
    className,
    title,
    description,
    benefits,
    buttonText = 'Оформить карту',
    href,
    target,
    image,
  } = props;
  return (
    <section className={`bg-white rounded-10 h-[470px] flex relative overflow-hidden ${className}`}>
      <div className={['flex', 'flex-col', 'p-11', image && 'pr-0'].filter(Boolean).join(' ')}>
        {title && (
          <h1 className="font-sans font-medium text-10 leading-11 m-0 mb-4 whitespace-pre-wrap">
            {title}
          </h1>
        )}
        {description && (
          <div className="font-sans font-normal text-[16px] leading-6 text-second-primary mb-7">
            {description}
          </div>
        )}
        {benefits && <div className="flex gap-6">{benefits.map(renderBenefit)}</div>}
        <div className="mt-auto">
          {href && (
            <PrimaryButton target={target} href={href}>
              {buttonText}
            </PrimaryButton>
          )}
        </div>
      </div>
      {image && <div className="h-full flex">{<Img image={image} className="flex" />}</div>}
    </section>
  );
});

function renderBenefit(benefit, index) {
  return (
    <div key={index} className="flex gap-4 items-center">
      {benefit.icon && (
        <div className="h-11 w-11 min-w-11 min-h-11 bg-second-light rounded-full p-2.5 box-border">
          {Icons[benefit.icon]}
        </div>
      )}
      <div className="flex gap-1 flex-col">
        <h4 className="font-sans font-medium text-5 leading-7 m-0">{benefit.label}</h4>
        {benefit.description && (
          <div className="font-sans font-normal text-3.5 leading-5 text-second-primary">
            {benefit.description}
          </div>
        )}
      </div>
    </div>
  );
}
