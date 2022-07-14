import type { IconName } from '../../ui-kit/Icon/IconProps';

/**
 * @title Преимущество
 */
export interface Benefit {
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: string;
  icon?: IconName;
}

/**
 * @title Блок преимущества
 */
export interface BenefitsBlockContent {
  /** @title Заголовок */
  title?: string;
  /**
   * @title Список преимущества
   * @maxItems 6
   */
  benefits?: Benefit[];
}
