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

/**
 * @title Мобильное приложение
 */
export interface MobileAppTileContent extends BaseTileCommonProps {
  /** @title Заголовок */
  title?: string;
  qr?: QRCode;
}
