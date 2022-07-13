import type { BaseTileContent } from '../BaseTile/BaseTileContent';
import { ContentPageContext } from '../ContentPage/ContentPageContext';

export type HeadlineBgColor = 'transparent' | 'bg-white';

export interface UniBlockProps {
  className?: string;
}

export interface HeadlineContent extends BaseTileContent {
  bgColor?: HeadlineBgColor;
}
