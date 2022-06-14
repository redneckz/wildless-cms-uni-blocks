import { JSX } from '@redneckz/uni-jsx';
import { Tile } from './Tile';
import type { UniBlockProps } from './types';

export interface MobileAppTileContent {
  title?: string;
  qr?: string;
}

export interface MobileAppTileProps extends MobileAppTileContent, UniBlockProps {}

export const MobileAppTile = JSX<MobileAppTileProps>(
  ({ className, context, title = 'Мобильное приложение', qr }) => {
    return (
      <Tile className={className} context={context} title={title}>
        <div className="flex items-center">
          {qr && (
            <img
              src={qr}
              alt={title}
              title={title}
              width="90"
              height="90"
              className="w-[90px] h-[90px] bg-secondary-light"
            />
          )}
          <span className="font-normal text-sm text-secondary-text ml-4">
            Наведите камеру телефона на QR-код и скачайте приложение
          </span>
        </div>
      </Tile>
    );
  },
);
