import { JSX } from '@redneckz/uni-jsx';
import { COLUMN_WIDTH } from './constants';

export const TableCarouselContainer = JSX<{ activeCardIndex: number }>(
  ({ children, activeCardIndex }) => (
    <div className="flex flex-grow overflow-hidden ">
      <div
        className="flex flex-grow duration-1000"
        style={{ transform: `translateX(-${activeCardIndex * COLUMN_WIDTH}px)` }}
      >
        {children}
      </div>
    </div>
  ),
);
