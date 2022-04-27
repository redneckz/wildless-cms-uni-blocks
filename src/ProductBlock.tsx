import {JSX} from '@redneckz/uni-jsx';
import {PrimaryButton} from './ui-kit'
import {Picture} from "./types";
import {Icons} from "./Icons";
import {Img} from "./Img";

export interface Benefit {
  label: string,
  description?: string,
  icon?: keyof typeof Icons
}

export interface ProductBlockContent {
  title?: string;
  description?: string | Node;
  image?: Picture;
  benefits?: Benefit[];
  buttonText?: string,
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
}

export interface ProductBlockProps extends ProductBlockContent {
  className?: string,
}

export const ProductBlock = JSX<ProductBlockProps>(props => {
  const {className, title, description, benefits, buttonText = 'Оформить карту', href, target, image} = props;
  return (
    <section className={`bg-white rounded-[40px] h-[470px] flex relative overflow-hidden ${className}`}>
      <div className={['flex', 'flex-col', 'p-[52px]', image && 'pr-0']
        .filter(Boolean)
        .join(' ')}>
        {title && <h1 className="font-sans font-medium text-[40px] leading-[48px] m-0 mb-[16px] whitespace-pre-wrap">
          {title}
        </h1>}
        {description &&
          <div className="font-sans font-normal text-[16px] leading-[24px] text-second-primary mb-[28px]">{description}</div>}
        {benefits && <div className="flex gap-[25px]">
          {benefits.map((benefit, index) => <div key={index} className="flex gap-[16px] items-center">
            {benefit.icon &&
              <div className="h-[48px] w-[48px] min-w-[48px] min-h-[48px] bg-second-light rounded-full p-[10px] box-border">
                {Icons[benefit.icon]}
              </div>}
            <div className="flex gap-[4px] flex-col">
              <h4 className="font-sans font-medium text-[20px] leading-[28px] m-0">
                {benefit.label}
              </h4>
              {benefit.description &&
                <div className="font-sans font-normal text-[14px] leading-[20px] text-second-primary">
                  {benefit.description}
                </div>}
            </div>
          </div>)}
        </div>}
        <div className="mt-auto">
          {href && <PrimaryButton target={target} href={href}>
            {buttonText}
          </PrimaryButton>}
        </div>
      </div>
      {image && <div className="h-full max-w-[450px] flex">
        {<Img image={image} className="flex" />}
      </div>}
    </section>
  );
});
