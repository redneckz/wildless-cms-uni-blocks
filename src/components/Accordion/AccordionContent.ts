import type { AccordionBlocksType } from './AccordionBlocks';

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

export type AccordionDataContent = AccordionBlocksType;
