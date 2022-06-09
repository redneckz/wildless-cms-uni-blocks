import { JSX } from '@redneckz/uni-jsx';
import { ClockIcon, SignDocsIcon, ComfortableCompIcon, ActualBalanceIcon } from './Icons/index';
import type { UniBlocksComponentProps, Benefit } from './types';

const ICONS = { ClockIcon, SignDocsIcon, ComfortableCompIcon, ActualBalanceIcon };

export interface BenefitsBlockContent {
  title?: string;
  benefits?: Benefit[];
}

export interface BenefitsBlockProps extends BenefitsBlockContent, UniBlocksComponentProps {}

export const BenefitsBlock = JSX<BenefitsBlockProps>(({ className, title, benefits }) => {
  return (
    <section
      className={`font-sans text-primary-text bg-white p-12 rounded-[40px] flex flex-col items-center ${
        className || ''
      }`}
    >
      <h2 className="font-medium text-title m-0 max-w-[47rem] text-center">{title}</h2>
      {benefits?.length ? (
        <div className="grid grid-cols-2 gap-5 mt-8">{benefits.map(renderStep)}</div>
      ) : null}
    </section>
  );
});

const renderStep = (benefit: Benefit, i: number) => {
  return (
    <div
      key={String(i)}
      className="flex bg-secondary-light items-center p-10 rounded-[40px] gap-5 max-w-[580px]"
    >
      {benefit.icon && (
        <div className="h-[70px] w-[70px] min-w-[70px] min-h-[70px]">
          {ICONS[benefit.icon as keyof typeof ICONS]?.()}
        </div>
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
