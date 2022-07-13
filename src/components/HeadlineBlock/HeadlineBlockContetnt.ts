import { BaseTileContent } from '../BaseTile/BaseTileContent';

export type HeadlineBgColor = 'transparent' | 'bg-white';

export interface HeadlineContent extends BaseTileContent {
  bgColor?: HeadlineBgColor;
}
