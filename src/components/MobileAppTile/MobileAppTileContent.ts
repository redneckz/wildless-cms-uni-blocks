import type { BlockDefProps } from '../../types';
import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';

/**
 * @title QR код
 */
export interface QRCode {
  /** @title QR код */
  src?: string;
  /** @title Ссылка */
  href?: string;
}

export interface MobileAppTileContent extends BaseTileCommonProps {
  /** @title Заголовок */
  title?: string;
  qr?: QRCode;
}

/**
 * @title Мобильное приложение
 */
export interface MobileAppTileDef extends BlockDefProps {
  content?: MobileAppTileContent;
  /**
   * @title Тип
   * @default MobileAppTile
   */
  type: string;
}
