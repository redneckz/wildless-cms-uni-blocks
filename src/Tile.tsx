import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion, Picture, UniBlockProps } from './types';
import { BaseTile } from './BaseTile';
import type { BaseTileContent } from './BaseTile';

export interface TileProps extends BaseTileContent, UniBlockProps {}

const tileStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const Tile = JSX<TileProps>((props) => {
  const children = props.children;
  const className = props.className;
  const version = props.version || 'primary';

  return (
    <section className={`font-sans p-9 ${className || ''} ${tileStyleMap[version]}`}>
      <BaseTile {...props}>{children}</BaseTile>
    </section>
  );
});
