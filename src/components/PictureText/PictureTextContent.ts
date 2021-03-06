import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

/**
 * @title Картинка с текстом
 */
export interface PictureTextContent extends Pick<BaseTileCommonProps, 'title' | 'image'> {
  /** @title Список преимуществ */
  benefits?: Benefit[];
}
