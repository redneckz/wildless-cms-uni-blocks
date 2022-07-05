import type { IconName } from './ui-kit/IconProps';

export interface Step {
  label: string;
  description?: string;
  icon?: IconName;
}

export interface StepsBlockContent {
  title?: string;
  steps?: Step[];
}
