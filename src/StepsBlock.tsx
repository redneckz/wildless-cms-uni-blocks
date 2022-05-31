import { JSX } from '@redneckz/uni-jsx';
import { ContentPageContext } from './ContentPageContext';
import { Icons } from './Icons';

export interface Step {
  label: string;
  description?: string;
  icon?: keyof typeof Icons;
}

export interface StepsBlockProps {
  className?: string;
  context: ContentPageContext;
  title?: string;
  steps?: Step[];
}

export const StepsBlock = JSX<StepsBlockProps>(({ className, context, title, steps }) => {
  return (
    <section
      className={`font-sans bg-white px-12 py-20 rounded-[2.5rem] flex flex-col items-center ${
        className || ''
      }`}
    >
      <h2 className="font-medium text-title m-0 max-w-[47rem] text-center">{title}</h2>
      {steps?.length ? <div className="flex mt-9">{steps.map(renderStep)}</div> : null}
    </section>
  );
});

const renderStep = (step: Step, i: number) => {
  return (
    <div
      key={String(i)}
      className="flex flex-col items-center text-center px-12 relative after:content-[''] last:after:content-none after:bg-secondary-light after:absolute after:top-[50px] after:h-0.5 after:w-full after:right-[-50%]"
    >
      <div className="h-[6.25rem] w-[6.25rem] min-w-[6.25rem] min-h-[6.25rem] bg-secondary-light rounded-[2.5rem] p-[26px] box-border z-10">
        {(step.icon && Icons[step.icon]?.()) || <span className="text-title-lg">{i + 1}</span>}
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
