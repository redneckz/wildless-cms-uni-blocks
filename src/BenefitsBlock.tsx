import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext, DynamicImport } from './ContentPageContext';
import { Benefit } from './types';

const iconSources = {
  ClockIcon: () => import('./Icons/ClockIcon').then((m) => m.ClockIcon),
  SignDocsIcon: () => import('./Icons/SignDocsIcon').then((m) => m.SignDocsIcon),
  ComfortableCompIcon: () =>
    import('./Icons/ComfortableCompIcon').then((m) => m.ComfortableCompIcon),
  ActualBalanceIcon: () => import('./Icons/ActualBalanceIcon').then((m) => m.ActualBalanceIcon),
};

export interface BenefitsBlockContent {
  title?: string;
  benefits?: Benefit[];
}

export interface BenefitsBlockProps extends BenefitsBlockContent {
  className?: string;
  context: ContentPageContext;
}

export const BenefitsBlock = JSX<BenefitsBlockProps>(({ className, context, title, benefits }) => {
  return (
    <section
      className={`font-sans text-primary-text bg-white p-12 rounded-[40px] flex flex-col items-center ${
        className || ''
      }`}
    >
      <h2 className="font-medium text-title m-0 max-w-[47rem] text-center">{title}</h2>
      {benefits?.length ? (
        <div className="grid grid-cols-2 gap-5 mt-8">
          {benefits.map((benefit, i) => renderStep(benefit, i, context.useDynamicImport))}
        </div>
      ) : null}
    </section>
  );
});

const renderStep = (benefit: Benefit, i: number, useDynamicImport: DynamicImport) => {
  return (
    <div
      key={String(i)}
      className="flex bg-secondary-light items-center p-10 rounded-[40px] gap-5 max-w-[580px]"
    >
      {benefit.icon && Boolean(iconSources[benefit.icon]) && (
        <div className="h-[70px] w-[70px] min-w-[70px] min-h-[70px]">
          {renderIcon(() =>
            useDynamicImport(iconSources[benefit.icon! as keyof typeof iconSources]),
          )}
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

const renderIcon = (getImport) => {
  const { loading, imported: icon } = getImport();
  if (loading || !icon) {
    return '...';
  }

  return icon();
};
