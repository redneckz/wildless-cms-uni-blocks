import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { GalleryInner } from '../Gallery/GalleryInner';
import type { MiniGalleryContent } from './MiniGalleryContent';

export interface MiniGalleryProps extends MiniGalleryContent, UniBlockProps {}

export const MiniGallery = JSX<MiniGalleryProps>((props) => (
  <GalleryInner {...props} version="mini" />
));
