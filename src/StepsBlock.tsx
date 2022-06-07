import { JSX } from '@redneckz/uni-jsx';
import { ContentPageContext } from './ContentPageContext';
import * as Icons from './Icons/index';
import { UniBlocksComponentProps } from './types';

const iconSources = {
  NewDocIcon: () => import('./Icons/NewDocIcon').then((m) => m.NewDocIcon),
  PassSendIcon: () => import('./Icons/PassSendIcon').then((m) => m.PassSendIcon),
  ActualBalanceIcon: () => import('./Icons/ActualBalanceIcon').then((m) => m.ActualBalanceIcon),
};
export interface Step {
  label: string;
  description?: string;
  icon?: keyof typeof iconSources;
}

export interface StepsBlockContent {
  title?: string;
  steps?: Step[];
}

export interface StepsBlockProps extends StepsBlockContent, UniBlocksComponentProps {}

export const StepsBlock = JSX<StepsBlockProps>(({ className, context, title, steps }) => {
  return (
    <section
      className={`font-sans text-primary-text bg-white px-12 py-20 rounded-[40px] flex flex-col items-center ${
        className || ''
      }`}
    >
      <h2 className="font-medium text-title m-0 max-w-[47rem] text-center">{title}</h2>
      {steps?.length ? (
        <div className="flex mt-9">
          {steps.map((step, i) => renderStep(step, i, context.useDynamicImport))}
        </div>
      ) : null}
    </section>
  );
});

const renderStep = (step: Step, i: number, useDynamicImport: DynamicImport) => {
  return (
    <div
      key={String(i)}
      className="flex flex-col items-center text-center px-12 relative after:content-[''] last:after:content-none after:bg-secondary-light after:absolute after:top-[50px] after:h-0.5 after:w-full after:right-[-50%]"
    >
      <div className="h-[100px] w-[100px] min-w-[100px] min-h-[100px] bg-secondary-light rounded-[40px] p-[26px] box-border z-10 items-center">
        {step.icon && Boolean(iconSources[step.icon]) ? (
          renderIcon(() => useDynamicImport(iconSources[step.icon!]))
        ) : (
          <span className="text-title-lg">{i + 1}</span>
        )}
      </div>
      <div className="max-w-min">
        <h5 className="font-medium text-xl m-0 mt-4 whitespace-nowrap px-3">{step.label}</h5>
        {step.description && (
          <div className="font-normal text-sm text-secondary-text mt-2">{step.description}</div>
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

  return icon({ width: 48, height: 48 });
};
