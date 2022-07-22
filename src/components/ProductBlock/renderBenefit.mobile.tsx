import { Icon } from '../../ui-kit/Icon/Icon';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export function renderBenefit(benefit: Benefit, i: number) {
  return (
    <div key={String(i)} className="flex gap-3 items-center mb-2.5 last:mb-0">
      {benefit.icon && (
        <Icon
          className="w-[40px] h-[40px] min-w-[40px] min-h-[40px] bg-main rounded-full p-[5px] box-border"
          name={benefit.icon}
          width="24"
          height="24"
        />
      )}
      <h4 className="font-medium text-primary-text text-base m-0">{benefit.label}</h4>
      {benefit.description && (
        <div className="font-normal text-sm text-secondary-text">{benefit.description}</div>
      )}
    </div>
  );
}
