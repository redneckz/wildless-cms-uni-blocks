import type { TextBlockContent } from '../TextBlock/TextBlockContent';

/** @title Содержимое блока */
export type AccordionDataContent = TextBlockContent;

/**
 * @title Тип блока
 * @enumNames ["Текстовый блок"]
 */
export type AccordionDataBlocks = 'TextBlock';

/**
 * Блок
 */
export interface AccordionBlock {
  type?: AccordionDataBlocks;
  data?: AccordionDataContent;
}

/**
 * @title Элемент списка
 */
export interface AccordionItemCommonProps {
  /** @title Название */
  label?: string;
  /** @title Блоки */
  blocks?: AccordionBlock[];
}

/**
 * @title Аккордеон
 */
export interface AccordionContent {
  /** @title Заголовок */
  title?: string;
  /** @title Список */
  accordionItems?: AccordionItemCommonProps[];
}
