import type { IconName } from '../../ui-kit/Icon/IconProps';

/**
 * @title Шаг
 */
export interface Step {
  /** @title Название */
  label: string;
  /** @title Описание */
  description?: string;
  icon?: IconName;
}

/**
 * @title Блок шаги
 */
export interface StepsBlockContent {
  /** @title Заголовок */
  title?: string;
  /**
   * @title Шаги
   * @maxItems 6
   */
  steps?: Step[];
}
