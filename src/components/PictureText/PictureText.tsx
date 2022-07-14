import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { PictureTextContent } from './PictureTextContent';

import { Icon } from '../../ui-kit/Icon/Icon';
import { Img } from '../../ui-kit/Img';
import { Title } from '../../ui-kit/Title/Title';
import { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export interface PictureTextProps extends PictureTextContent, UniBlockProps {}

export const PictureText = JSX<PictureTextProps>(({ className, title, image, benefits }) => {
  return (
    <section className={`relative font-sans text-primary-text bg-white p-14 ${className}`}>
      <Title className="font-medium m-0 text-center">{title}</Title>
      <div className={'flex justify-center mt-9'}>
        {image?.src && <Img className="mr-6" image={image} />}
        {benefits?.length ? (
          <div className="flex flex-col">{benefits.map(renderBenefit)}</div>
        ) : null}
      </div>
    </section>
  );
});

function renderBenefit(benefit: Benefit, i: number) {
  return (
    <div key={String(i)} className="flex flex-row mb-8">
      {benefit.icon && (
        <Icon
          className="w-[48px] h-[48px] bg-main rounded-full box-border p-[12px]"
          name={benefit.icon}
          width="48"
          height="48"
        />
      )}
      <div className="flex gap-1 flex-col h-full ml-5 max-w-[490px]">
        <div className="font-medium text-primary-text text-xl m-0">{benefit.label}</div>
        {benefit.description && (
          <div className="font-normal text-sm text-secondary-text">{benefit.description}</div>
        )}
      </div>
    </div>
  );
}
