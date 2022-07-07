import { BlockDefProps } from '../../types';

export interface ExchangeRateTileContent {
  /** @title Заголовок */
  title?: string;
}

/**
 * @title Курсы валют
 */
export interface ExchangeRateTileDef extends BlockDefProps {
  content?: ExchangeRateTileContent;
  /**
   * @title Тип
   * @default ExchangeRateTile
   */
  type: string;
}
