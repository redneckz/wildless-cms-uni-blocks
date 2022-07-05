import { JSX } from '@redneckz/uni-jsx';
import type { Benefit, BenefitsBlockContent } from './BenefitsBlockContent';
import type { UniBlockProps } from './types';
import { Icon } from './ui-kit/Icon';

export interface BenefitsBlockProps extends BenefitsBlockContent, UniBlockProps {}

export const BenefitsBlock = JSX<BenefitsBlockProps>(({ className, title, benefits }) => {
  return (
    <section
      className={`font-sans text-primary-text bg-white p-12 pb-2 flex flex-col items-center ${
        className || ''
      }`}
    >
      <h2 className="font-medium text-title m-0 max-w-[47rem] text-center">{title}</h2>
      {benefits?.length ? (
        <div className="grid grid-cols-2 gap-5 mt-9">{benefits.map(renderStep)}</div>
      ) : null}
    </section>
  );
});

const renderStep = (benefit: Benefit, i: number) => {
  return (
    <div key={String(i)} className="flex items-center p-10 gap-5 max-w-[580px]">
      {benefit.icon && (
        <Icon
          className="h-[70px] w-[70px] min-w-[70px] min-h-[70px]"
          name={benefit.icon}
          width="70"
          height="70"
        />
      )}
      <div>
        <h3 className="font-medium text-xl m-0">{benefit.label}</h3>
        {benefit.description && (
          <div className="font-normal text-sm mt-2">{benefit.description}</div>
        )}
      </div>
    </div>
  );
};
