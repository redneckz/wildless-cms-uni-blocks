import type { IconName } from '../../ui-kit/Icon/IconProps';

export type SizeVersion = 'normal' | 'small';

/**
 * @title Шаг
 */
export interface Step {
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: string;
  icon?: IconName;
  step?: number;
}

/**
 * @title Блок шаги
 */
export interface StepsBlockContent {
  /** @title Заголовок */
  title?: string;
  description?: string;
  /** @title Линии */
  showLines?: boolean;
  /**
   * @title Шаги
   * @minItems 2
   * @maxItems 3
   */
  steps?: Step[];
  size?: SizeVersion; // TODO: mobile content
}
