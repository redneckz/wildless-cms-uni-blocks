import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';
import type { Picture } from '../../model/Picture';
import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';

export interface PictureTextContent extends BaseTileCommonProps {
  /** @title Заголовок */
  title?: string;
  /** @title Преимущества */
  benefits?: Benefit[];
  /** @title Изображение */
  image?: Picture;
}
