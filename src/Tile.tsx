import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion, UniBlockProps } from './types';
import { BaseTile } from './BaseTile';
import type { BaseTileContent } from './BaseTile';
import { getColSpan } from './utils/getColSpan';

export interface TileProps extends BaseTileContent, UniBlockProps {}

const tileStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const Tile = JSX<TileProps>((props) => {
  const { children, className, version = 'primary' } = props;

  return (
    <section
      className={`font-sans p-9 min-h-[320px] box-border ${className || ''} ${
        tileStyleMap[version]
      } ${getContainerPaddingRight(className)} `}
    >
      <BaseTile {...props}>{children}</BaseTile>
    </section>
  );
});

function getContainerPaddingRight(className: string = '') {
  const colSpan = getColSpan(className);
  if (colSpan <= 6) {
    return 'pr-9';
  } else if (colSpan <= 8) {
    return 'pr-[4.75rem]';
  } else {
    return 'pr-[9.4rem]';
  }
}
