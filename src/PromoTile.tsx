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
    return (
      <Tile
        className={className}
        context={context}
        title={title}
        buttons={buttons}
        version={version}
      >
        <div>
          {date && <div className="text-sm mb-2">{formatDate(date)}</div>}
          <div className="text-base">{description}</div>
        </div>
      </Tile>
    );
  },
);

function formatDate(date: string) {
  const dateObj = new Date(date);
  const dateFormat: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return dateObj.toLocaleString('ru-RU', dateFormat).replace('г.', '');
}
