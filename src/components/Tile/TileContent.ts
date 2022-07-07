import type { BlockDefProps } from '../../types';
import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';

export type TileContent = BaseTileCommonProps;

/**
 * @title Плитка
 */
export interface TileDef extends BlockDefProps {
  content?: TileContent;
  /**
   * @title Тип
   * @default Tile
   */
  type: string;
}
