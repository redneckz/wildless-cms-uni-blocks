import type { ProductBlockInnerContent } from './ProductBlockInnerContent';

interface ProductGalleryNav {
  title: string;
  desc: string;
}

export interface ProductSlideContent {
  nav: ProductGalleryNav;
  productBlock: ProductBlockInnerContent;
}

export interface ProductGalleryContent {
  duration?: number;
  slides?: ProductSlideContent[];
}
