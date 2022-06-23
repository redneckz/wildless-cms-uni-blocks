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
  const { children, className, version = 'primary' } = props;

  return (
    <TileSection
      className={`font-sans p-9 min-h-[320px] box-border ${className || ''} ${
        tileStyleMap[version]
      }`}
    >
      <BaseTile {...props}>{children}</BaseTile>
    </TileSection>
  );
});

const TileSection = JSX<{ className?: string }>(({ className = '', children }) => {
  const colSpanPrefix = 'col-span-';
  const colSpanStr = className.split(/\s+/).find((_) => _.startsWith(colSpanPrefix));
  const colSpan = colSpanStr ? parseInt(colSpanStr.substring(colSpanPrefix.length), 10) : 12;
  if (colSpan <= 6) {
    return <section className={`pr-9 ${className || ''}`}>{children}</section>;
  } else if (colSpan <= 8) {
    return <section className={`pr-[4.75rem] ${className || ''}`}>{children}</section>;
  } else {
    return <section className={`pr-[9.4rem] ${className || ''}`}>{children}</section>;
  }
});
