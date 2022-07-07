import type { BlockDefProps } from '../../types';
import type { IconName } from '../../ui-kit/Icon/IconProps';

export interface Benefit {
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: string;
  icon?: IconName;
}

export interface BenefitsBlockContent {
  /** @title Заголовок */
  title?: string;
  /** @maxItems 6 */
  benefits?: Benefit[];
}

/**
 * @title Преимущества
 */
export interface BenefitsBlockDef extends BlockDefProps {
  content?: BenefitsBlockContent;
  /**
   * @title Тип
   * @default BenefitsBlock
   */
  type: string;
}
