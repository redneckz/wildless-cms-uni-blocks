import type { HeadlineContent } from '../Headline/HeadlineContent';
import type { LinkDocsContent } from '../LinkDocs/LinkDocsContent';
import type { PictureTextContent } from '../PictureText/PictureTextContent';
import type { TextBlockContent } from '../TextBlock/TextBlockContent';
import AccordionBlocks from './AccordionBlocks';

/**
 * @hidden
 * @title Содержимое блока
 */
export type AccordionData =
  | HeadlineContent
  | LinkDocsContent
  | TextBlockContent
  | PictureTextContent;

/**
 * @hidden
 * @title Тип блока
 * @enumNames ["Заголовок", "Блок документов", Текстовый блок", "Картинка с текстом"]
 */
export type AccordionTypeBlock = keyof typeof AccordionBlocks;

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
