export interface AccordionContent {
  title?: string;
  accordionItems?: AccordionItemContent[];
}

export interface AccordionItemContent {
  label?: string;
  components?: AccordionComponentContent[];
}

export interface AccordionComponentContent {
  name?: string;
  data?: any;
}
