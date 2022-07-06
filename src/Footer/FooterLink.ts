import type { LinkContent } from '../model/LinkContent';
import type { UniBlockProps } from '../types';

export interface FooterLink extends UniBlockProps {
  links?: LinkContent[];
}
