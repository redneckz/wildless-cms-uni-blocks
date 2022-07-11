import type { TextBlockContent } from '../TextBlock/TextBlockContent';

export interface AccordionContent {
  title?: string;
  accordionItems?: AccordionItemContent[];
}

export interface AccordionItemContent {
  label?: string;
  blocks?: AccordionBlockContent[];
}

export type AccordionBlockContent = {
  type?: string;
  data?: AccordionDataContent;
};

export type AccordionDataContent = TextBlockContent;
