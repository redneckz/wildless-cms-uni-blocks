import type { HeadlineContent } from '../Headline/HeadlineContent';
import type { LinkDocsContent } from '../LinkDocs/LinkDocsContent';
import type { PictureTextContent } from '../PictureText/PictureTextContent';
import type { TextBlockContent } from '../TextBlock/TextBlockContent';

/**
 * @title Тип блока
 */
export type AccordionTypeBlock = 'Headline' | 'LinkDocs' | 'TextBlock' | 'PictureText';

/**
 * @title Заголовок
 */
export interface HeadlineAccordionBlock extends HeadlineContent {
  /** @default Headline */
  accordionBlockType: AccordionTypeBlock;
}

/**
 * @title Список документов
 */
export interface LinkDocsAccordionBlock extends LinkDocsContent {
  /** @default LinkDocs */
  accordionBlockType: AccordionTypeBlock;
}

/**
 * @title Текстовый блок
 */
export interface TextBlockAccordionBlock extends TextBlockContent {
  /** @default TextBlock */
  accordionBlockType: AccordionTypeBlock;
}

/**
 * @title Картинка с текстом
 */
export interface PictureTextAccordionBlock extends PictureTextContent {
  /** @default PictureText */
  accordionBlockType: AccordionTypeBlock;
}

/**
 * @title Выберите блок
 */
export type EmptyOption = null;

/**
 * @title Содержимое аккордеона
 */
export type AccordionBlockProps =
  | EmptyOption
  | HeadlineAccordionBlock
  | LinkDocsAccordionBlock
  | TextBlockAccordionBlock
  | PictureTextAccordionBlock;

/**
 * @title Элемент списка
 */
export interface AccordionItemCommonProps {
  /**
   * @title Название
   * @default Список
   */
  label?: string;
  /** @title Блоки */
  blocks?: AccordionBlockProps[];
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
