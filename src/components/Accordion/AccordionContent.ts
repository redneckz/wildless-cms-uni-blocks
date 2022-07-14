import type { AccordionBlocksType } from './AccordionBlocks';
import AccordionBlocks from './AccordionBlocks';

/**
 * @hidden
 * @title Содержимое блока
 */
export type AccordionData = AccordionBlocksType;

/**
 * @hidden
 * @title Тип блока
 * @enumNames ["Заголовок", "Блок документов", Текстовый блок"]
 */
export type AccordionDataBlocks = keyof typeof AccordionBlocks;

/**
 * Блок
 */
export interface AccordionBlock {
  type?: AccordionDataBlocks;
  data?: AccordionData;
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
