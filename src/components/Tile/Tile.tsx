import { JSX } from '@redneckz/uni-jsx';
import { BaseTile } from '../BaseTile/BaseTile';
import type { BlockVersion } from '../../model/BlockVersion';
import type { TileContent } from '../Tile/TileContent';
import type { UniBlockProps } from '../../types';
import { getColSpan } from '../../utils/getColSpan';

export interface TileProps extends TileContent, UniBlockProps {}

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
