import { JSX } from '@redneckz/uni-jsx';
import { GalleryContent } from './GalleryContent';
import { GalleryInner } from './GalleryInner';
import { UniBlockProps } from './types';

export interface MiniGalleryProps extends GalleryContent, UniBlockProps {}

export const MiniGallery = JSX<MiniGalleryProps>((props) => (
  <GalleryInner {...props} version="mini" />
));
