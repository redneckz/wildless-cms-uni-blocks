import { JSX } from '@redneckz/uni-jsx';
import { GalleryContent } from '../Gallery/GalleryContent';
import { GalleryInner } from '../Gallery/GalleryInner';
import { UniBlockProps } from '../../types';

export interface MiniGalleryProps extends GalleryContent, UniBlockProps {}

export const MiniGallery = JSX<MiniGalleryProps>((props) => (
  <GalleryInner {...props} version="mini" />
));
