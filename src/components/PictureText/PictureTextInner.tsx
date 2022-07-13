import { JSX } from '@redneckz/uni-jsx';
import { PictureTextContent } from './PictureTextContent';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Img } from '../../ui-kit/Img';
import { Title } from '../../ui-kit/Title/Title';
import { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export interface PictureTextInnerProps extends PictureTextContent, UniBlockProps {}

export const PictureTextInner = JSX<PictureTextInnerProps>(
  ({ className, title, image, benefits }) => {
    return (
      <section className={`relative font-sans text-primary-text bg-white p-14 ${className}`}>
        <Title className="font-medium m-0 text-center">{title}</Title>
        <div className={'flex m-auto mt-9 max-w-[800px]'}>
          {image?.src && <Img className="mr-6" image={image} />}
          {benefits?.length ? (
            <div className="flex flex-col max-w-[558px]">{benefits.map(renderBenefit)}</div>
          ) : null}
        </div>
      </section>
    );
  },
);

function renderBenefit(benefit: Benefit, i: number) {
  return (
    <div key={String(i)} className="flex flex-row mb-8">
      {benefit.icon && (
        <div className="w-[48px] h-[48px] mb-2">
          <Icon
            className="w-[48px] h-[48px] min-w-[48px] min-h-[48px] bg-main rounded-full box-border p-[12px]"
            name={benefit.icon}
            width="24"
            height="24"
          />
        </div>
      )}
      <div className="flex gap-1 flex-col h-full ml-5">
        <div className="font-medium text-primary-text text-xl m-0">{benefit.label}</div>
        {benefit.description && (
          <div className="font-normal text-sm text-secondary-text">{benefit.description}</div>
        )}
      </div>
    </div>
  );
}
