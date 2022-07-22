import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Title } from '../../ui-kit/Title/Title';
import type { Step, StepsBlockContent } from './StepsBlockContent';

export interface StepsBlockProps extends StepsBlockContent, UniBlockProps {}

export const StepsBlock = JSX<StepsBlockProps>(
  ({ className, title, description, showLines = true, steps, size = 'normal' }) => {
    return (
      <section
        className={`box-border font-sans text-primary-text bg-white px-20 py-[50px] flex flex-col ${
          className || ''
        }`}
      >
        <Title size="XXXS" className="font-medium m-0 max-w-[47rem] text-center">
          {title}
        </Title>
        {description && <p className={`text-md text-center ${title && 'mt-2'}`}>{description}</p>}
        {steps?.length ? (
          <div className={`box-border py-0.5 mb-0.5 mt-5`}>
            <div className="flex flex-col justify-between gap-x-[101px]">
              {steps.map((step, i, array) => renderStepTitle({ step, size }, i, array))}
            </div>
          </div>
        ) : null}
      </section>
    );
  },
);

const renderStepTitle = ({ step: step, size: size }, i: number, array: Step[]) => {
  const isLastStep = array.length - 1 === i;
  const iconAreaSize =
    size === 'normal'
      ? 'h-[70px] w-[70px] min-w-[70px] min-h-[70px]'
      : 'h-[50px] w-[50px] min-w-[50px] min-h-[50px]';
  const iconSize = size === 'normal' ? '38' : '27';
  const margin = size === 'normal' ? 'ml-[34px]' : 'ml-[24px]';
  return (
    <div>
      <div key={String(i)} className="flex flex-row text-center relative">
        <div
          className={`${iconAreaSize} bg-secondary-light rounded-full z-10 mr-3 flex justify-center content-center`}
        >
          <span className="font-medium text-title-xs text-secondary-text self-center">
            {(step.icon && <Icon name={step.icon} width={iconSize} height={iconSize} />) || i + 1}
          </span>
        </div>
        <div className="flex flex-col justify-center relative">
          {step.label && (
            <div className="font-medium text-mobile-md m-0 text-left">{step.label}</div>
          )}
          {step.description && (
            <div
              className={`font-normal text-sm text-secondary-text text-left ${
                step.label ? 'mt-1' : ''
              }`}
            >
              {step.description}
            </div>
          )}
        </div>
      </div>
      {!isLastStep && <div className={`h-8 w-[2px] bg-secondary-light ${margin}`} />}
    </div>
  );
};
