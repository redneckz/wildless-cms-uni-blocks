import { JSX } from '@redneckz/uni-jsx';
import { COLUMN_WIDTH } from './constants';

export interface TableCarouselContainerProps {
  activeCardIndex: number;
}

export const TableCarouselContainer = JSX<TableCarouselContainerProps>(
  ({ children, activeCardIndex }) => (
    <div className="flex flex-1 overflow-hidden">
      <div
        className="flex gap-4 duration-1000"
        style={{ transform: `translateX(-${activeCardIndex * COLUMN_WIDTH}px)` }}
      >
        {children}
      </div>
    </div>
  ),
);
