import type { LinkContent } from '../../model/LinkContent';

export interface AccordionContent {
  title?: string;
  accordionItems?: AccordionItemContent[];
}

export interface AccordionItemContent {
  label?: string;
  elements?: AccordionElementsContent[];
}

export type AccordionElementsContent = DocsElementContent | TextElementContent;

export interface DocsElementContent {
  name?: string;
  data?: LinkContent[];
}

export interface TextElementContent {
  name?: string;
  data?: string;
}
