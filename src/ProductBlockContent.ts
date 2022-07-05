import type { LinkContent } from './model/LinkContent';
import type { ProductBlockInnerContent } from './ProductBlockInnerContent';

export interface ProductBlockContent extends ProductBlockInnerContent {
  breadcrumbs?: LinkContent[];
}
