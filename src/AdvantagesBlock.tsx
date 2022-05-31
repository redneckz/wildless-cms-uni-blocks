import { JSX } from '@redneckz/uni-jsx';
import { ContentPageContext } from './ContentPageContext';
import * as Icons from './Icons/index';

export interface Benefit {
  label: string;
  description?: string;
  icon?: keyof typeof Icons;
}

export interface AdvantagesBlockProps {
  className?: string;
  context: ContentPageContext;
  title?: string;
  benefits?: Benefit[];
}

export const AdvantagesBlock = JSX<AdvantagesBlockProps>(
  ({ className, context, title, benefits }) => {
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
  },
);

const renderStep = (benefit: Benefit, i: number) => {
  return (
    <div
      key={String(i)}
      className="flex bg-secondary-light items-center p-10 rounded-[40px] gap-5 max-w-[580px]"
    >
      {benefit.icon && (
        <div className="h-[70px] w-[70px] min-w-[70px] min-h-[70px]">{Icons[benefit.icon]?.()}</div>
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
