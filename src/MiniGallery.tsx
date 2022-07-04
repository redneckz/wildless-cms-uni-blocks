import { JSX } from '@redneckz/uni-jsx';
import { GalleryContent, GalleryInner } from './GalleryInner';
import { UniBlockProps } from './types';

export interface MiniGalleryProps extends GalleryContent, UniBlockProps {}

export const MiniGallery = JSX<MiniGalleryProps>((props) => (
  <GalleryInner {...props} version="mini" />
));
