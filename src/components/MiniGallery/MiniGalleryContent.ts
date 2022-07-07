import type { BlockDefProps } from '../../types';
import type { GalleryContent } from '../Gallery/GalleryContent';

export interface MiniGalleryContent extends GalleryContent {}

/**
 * @title Мини-галерея
 */
export interface MiniGalleryDef extends BlockDefProps {
  content?: MiniGalleryContent;
  /**
   * @title Тип
   * @default MiniGallery
   */
  type: string;
}
