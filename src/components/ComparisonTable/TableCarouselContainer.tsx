import { JSX } from '@redneckz/uni-jsx';
import { TableVersion } from '../../model/TableVersion';

export interface TableCarouselContainerProps {
  activeCardIndex: number;
  columnWidth: number;
  version?: TableVersion;
}

const carouselContainerClassesMap: Record<TableVersion, string> = {
  comparison: 'flex gap-4 duration-1000',
  tariff: 'flex flex-grow duration-1000',
};

export const TableCarouselContainer = JSX<TableCarouselContainerProps>(
  ({ children, activeCardIndex, columnWidth, version = 'comparison' }) => (
    <div className="flex flex-1 overflow-hidden">
      <div
        className={carouselContainerClassesMap[version]}
        style={{ transform: `translateX(-${activeCardIndex * columnWidth}px)` }}
      >
        {children}
      </div>
    </div>
  ),
);
