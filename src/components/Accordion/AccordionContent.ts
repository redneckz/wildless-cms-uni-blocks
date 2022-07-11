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
 * @examples [{
 *    "title": "Accordion title",
 *    "accordionItems": [
 *      {
 *        "label": "Accordion label 1",
 *        "blocks": [
 *          {
 *            "type": "TextBlock",
 *            "data": {
 *              "title": "Title",
 *              "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima odio soluta cupiditate pariatur, labore molestias quas necessitatibus nesciunt in praesentium accusamus provident sequi maiores autem. Voluptas quam neque iste?",
 *              "blockVersion": "secondary-light",
 *              "iconVersion": "small"
 *            }
 *          },
 *          {
 *            "type": "TextBlock",
 *            "data": {
 *              "title": "Title",
 *              "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima odio soluta cupiditate pariatur, labore molestias quas necessitatibus nesciunt in praesentium accusamus provident sequi maiores autem. Voluptas quam neque iste?",
 *              "blockVersion": "secondary-light",
 *              "iconVersion": "small"
 *            }
 *          }
 *        ]
 *      },
 *      {
 *        "label": "Accordion label 2",
 *        "blocks": [
 *          {
 *            "type": "TextBlock",
 *            "data": {
 *              "title": "Title",
 *              "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima odio soluta cupiditate pariatur, labore molestias quas necessitatibus nesciunt in praesentium accusamus provident sequi maiores autem. Voluptas quam neque iste?",
 *              "blockVersion": "secondary-light",
 *              "iconVersion": "small"
 *            }
 *          },
 *          {
 *            "type": "TextBlock",
 *            "data": {
 *              "title": "Title",
 *              "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima odio soluta cupiditate pariatur, labore molestias quas necessitatibus nesciunt in praesentium accusamus provident sequi maiores autem. Voluptas quam neque iste?",
 *              "blockVersion": "secondary-light",
 *              "iconVersion": "small"
 *            }
 *          }
 *        ]
 *      },
 *      {
 *        "label": "Accordion label 3",
 *        "blocks": [
 *          {
 *            "type": "TextBlock",
 *            "data": {
 *              "title": "Title",
 *              "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima odio soluta cupiditate pariatur, labore molestias quas necessitatibus nesciunt in praesentium accusamus provident sequi maiores autem. Voluptas quam neque iste?",
 *              "blockVersion": "secondary-light",
 *              "iconVersion": "small"
 *            }
 *          },
 *          {
 *            "type": "TextBlock",
 *            "data": {
 *              "title": "Title",
 *              "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima odio soluta cupiditate pariatur, labore molestias quas necessitatibus nesciunt in praesentium accusamus provident sequi maiores autem. Voluptas quam neque iste?",
 *              "blockVersion": "secondary-light",
 *              "iconVersion": "small"
 *            }
 *          }
 *        ]
 *      }
 *  }]
 */
export interface AccordionContent {
  /** @title Заголовок */
  title?: string;
  /** @title Список */
  accordionItems?: AccordionItemCommonProps[];
}
