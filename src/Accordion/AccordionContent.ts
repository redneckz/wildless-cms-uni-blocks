import { LinkContent } from '../model/LinkContent';

export interface AccordionContent {
  title?: string;
  accordionItems?: AccordionItemContent[];
}

export interface AccordionItemContent {
  label?: string;
  text?: string;
  docs?: LinkContent[];
}
