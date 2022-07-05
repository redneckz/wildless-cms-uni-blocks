import { JSX } from '@redneckz/uni-jsx';
import type { MobileAppTileContent } from './MobileAppTileContent';
import { Tile } from './Tile';
import type { UniBlockProps } from './types';

export interface MobileAppTileProps extends MobileAppTileContent, UniBlockProps {}

export const MobileAppTile = JSX<MobileAppTileProps>(
  ({ className, context, title = 'Мобильное приложение', qr, buttons = [] }) => {
    return (
      <Tile className={className} context={context} title={title} buttons={buttons}>
        <div className="flex items-center">
          {qr?.src && qr?.href && (
            <a href={qr.href} target="_blank">
              <img
                src={qr.src}
                alt={title}
                title={title}
                width="164"
                height="164"
                className="w-[90px] h-[90px] min-w-[90px] min-h-[90px] bg-secondary-light"
              />
            </a>
          )}
          <span className="font-normal text-sm text-secondary-text ml-4">
            Наведите камеру телефона на QR-код и скачайте приложение
          </span>
        </div>
      </Tile>
    );
  },
);
