import type { TextBlockContent } from '../TextBlock/TextBlockContent';
import type { PictureTextContent } from '../PictureText/PictureTextContent';

/** @title Содержимое блока */
export type AccordionDataContent = TextBlockContent | PictureTextContent;

/**
 * @title Тип блока
 * @enumNames ["Текстовый блок" | "текст с картинкой"]
 */
export type AccordionDataBlocks = 'TextBlock' | 'PictureText';

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

export interface AccordionItemContent {
  label?: string;
  blocks?: AccordionBlockContent[];
}

export type AccordionBlockContent = {
  type?: string;
  data?: AccordionDataContent;
};
