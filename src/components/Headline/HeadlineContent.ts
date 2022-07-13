import type { BaseTileContent } from '../BaseTile/BaseTileContent';

export interface UniBlockProps {
  className?: string;
}

export interface HeadlineContent extends BaseTileContent {
  bgColor?: 'transparent' | 'bg-white';
}
