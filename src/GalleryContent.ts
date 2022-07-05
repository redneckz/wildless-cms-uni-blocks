import type { Picture } from './model/Picture';

export interface GalleryCard {
  title?: string;
  description?: string;
  image?: Picture;
  href?: string;
  items?: string[];
}

export interface GalleryContent {
  title?: string;
  description?: string;
  cards?: GalleryCard[];
}
