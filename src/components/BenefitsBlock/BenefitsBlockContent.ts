import type { IconName } from '../../ui-kit/Icon/IconProps';

export interface Benefit {
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: string;
  icon?: IconName;
}

/**
 * @title Преимущества
 */
export interface BenefitsBlockContent {
  /** @title Заголовок */
  title?: string;
  /** @maxItems 6 */
  benefits?: Benefit[];
}
