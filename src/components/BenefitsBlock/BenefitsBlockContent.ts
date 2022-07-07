import type { IconName } from '../../ui-kit/Icon/IconProps';

export interface Benefit {
  label: string;
  description?: string;
  icon?: IconName;
}

export interface BenefitsBlockContent {
  title?: string;
  benefits?: Benefit[];
}
