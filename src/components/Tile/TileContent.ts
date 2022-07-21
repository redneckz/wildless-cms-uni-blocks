import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';

/**
 * @title Плитка
 */
export type TileContent = Omit<BaseTileCommonProps, 'align'>;
