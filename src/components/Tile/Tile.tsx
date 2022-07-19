import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { getColSpan } from '../../utils/getColSpan';
import { BaseTile } from '../BaseTile/BaseTile';
import type { TileContent } from '../Tile/TileContent';

export interface TileProps extends TileContent, UniBlockProps {}

const tileStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const Tile = JSX<TileProps>((props) => {
  const { children, className, version = 'primary' } = props;

  return (
    <section
      className={`font-sans p-9 box-border ${className || ''} ${
        tileStyleMap[version]
      } ${getContainerPaddingRight(className)} ${getContainerMinHeight(className)} `}
    >
      <BaseTile {...props}>{children}</BaseTile>
    </section>
  );
});

function getContainerPaddingRight(className = '') {
  const colSpan = getColSpan(className);
  if (colSpan <= 6) {
    return 'pr-9';
  } else if (colSpan <= 8) {
    return 'pr-[4.75rem]';
  } else {
    return 'pr-[9.4rem]';
  }
}

function getContainerMinHeight(className = '') {
  const colSpan = getColSpan(className);
  if (colSpan <= 6) {
    return 'min-h-[300px]';
  } else if (colSpan <= 8) {
    return 'min-h-[320px]';
  } else {
    return 'min-h-[360px]';
  }
}
