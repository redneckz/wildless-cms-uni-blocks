import type { IconName } from '../../ui-kit/Icon/IconProps';

/**
 * @title Шаг
 */
export interface Step {
  /** @title Название */
  label?: string;
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
  /** @title Линии */
  showLines?: boolean;
  /**
   * @title Шаги
   * @minItems 2
   * @maxItems 3
   */
  steps?: Step[];
}
