import { JSX } from '@redneckz/uni-jsx';
import { GalleryContent } from './GalleryContent';
import { GalleryInner } from './GalleryInner';
import type { UniBlockProps } from '../../types';

export interface GalleryProps extends GalleryContent, UniBlockProps {}

export const Gallery = JSX<GalleryProps>((props) => <GalleryInner {...props} version="normal" />);
