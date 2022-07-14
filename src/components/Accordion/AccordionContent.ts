import type { TextBlockContent } from '../TextBlock/TextBlockContent';

/** @title Содержимое блока */
export type AccordionData = TextBlockContent;

/**
 * @title Тип блока
 * @enumNames ["Текстовый блок"]
 */
export type AccordionTypeBlock = 'TextBlock' | 'Headline' | 'PictureText';

/**
 * Блок
 */
export interface AccordionBlock {
  type?: AccordionTypeBlock;
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
