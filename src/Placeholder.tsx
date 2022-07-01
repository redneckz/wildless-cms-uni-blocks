import { JSX } from '@redneckz/uni-jsx';
import { Tile } from './Tile';
import type { UniBlockProps } from './types';

export interface PlaceholderContent {
  title?: string;
}

export interface PlaceholderProps extends PlaceholderContent, UniBlockProps {
  className?: string;
}

const GOLDEN_RATIO = 1.618;

export const Placeholder = JSX<PlaceholderProps>(({ className, context, title }) => {
  return (
    <Tile className={className} context={context} title={title} description="Блок в разработке...">
      <figure className="m-0 min-w-[600px]">{renderShimmer()}</figure>
    </Tile>
  );
});

const renderShimmer = (size: number = 3) =>
  goldenSequence(100, size)
    .map((_) => Math.floor(_))
    .map(renderShimmerItem);

const renderShimmerItem = (width: number = 100, index: number) => (
  <div key={String(index)} style={{ width: `${width}%` }} className="h-4 mt-2 bg-secondary-light" />
);

const goldenSequence = (first: number, size: number): number[] =>
  [first].concat(size > 0 ? goldenSequence(first / GOLDEN_RATIO, size - 1) : []);
