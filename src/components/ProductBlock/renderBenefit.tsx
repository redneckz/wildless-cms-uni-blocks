import { Icon } from '../../ui-kit/Icon/Icon';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export function renderBenefit(benefit: Benefit, i: number) {
  return (
    <div key={String(i)} className="flex gap-4 items-center">
      {benefit.icon && (
        <Icon
          className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] bg-main rounded-full p-[10px] box-border"
          name={benefit.icon}
          width="24"
          height="24"
        />
      )}
      <div className="flex gap-1 flex-col h-full max-w-[149px]">
        <h4 className="font-medium text-primary-text text-xl m-0">{benefit.label}</h4>
        {benefit.description && (
          <div className="font-normal text-sm text-secondary-text">{benefit.description}</div>
        )}
      </div>
    </div>
  );
}
