import type { BaseTileContent } from '../BaseTile/BaseTileContent';

export interface QRCode {
  src?: string;
  href?: string;
}

export interface MobileAppTileContent extends BaseTileContent {
  title?: string;
  qr?: QRCode;
}
