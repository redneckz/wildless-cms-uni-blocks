import { JSX } from '@redneckz/uni-jsx';
import type { BaseTileContent } from './BaseTile';
import { Tile } from './Tile';
import type { UniBlockProps } from './types';

export interface PromoTileContent extends BaseTileContent {
  date?: string;
}

export interface PromoTileProps extends PromoTileContent, UniBlockProps {}

export const PromoTile = JSX<PromoTileProps>(
  ({
    className,
    context,
    title = 'Акции и спецпредложения',
    date,
    description,
    buttons = [],
    version,
  }) => {
    let foramtedDate;
    if (date) {
      const dateObj = new Date(date);
      const dateFormat: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };
      foramtedDate = dateObj.toLocaleString('ru-RU', dateFormat).replace('г.', '');
    }
    return (
      <Tile
        className={className}
        context={context}
        title={title}
        buttons={buttons}
        version={version}
      >
        <div>
          {foramtedDate && <div className="text-sm mb-2">{foramtedDate}</div>}
          <div className="text-base">{description}</div>
        </div>
      </Tile>
    );
  },
);
