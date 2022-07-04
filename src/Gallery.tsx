import { JSX } from '@redneckz/uni-jsx';
import { GalleryContent, GalleryInner } from './GalleryInner';
import { UniBlockProps } from './types';

export interface GalleryProps extends GalleryContent, UniBlockProps {}

export const Gallery = JSX<GalleryProps>((props) => <GalleryInner {...props} version="normal" />);
