import type { LinkContent } from '../../model/LinkContent';
import type { SitemapContent } from '../../model/SitemapContent';

/**
 * @title Тип контакта
 * @enumNames [
 *    "Телефон",
 *    "Почта"
 *  ]
 */
export type ContactType = 'tel' | 'email';

/**
 * @title Контакт
 */
export interface ContactInfo {
  /** @title Текст */
  text?: string;
  type?: ContactType;
  /** @title Описание */
  description?: string;
}

/**
 * @required ["href"]
 */
export interface SocialMedia extends Omit<LinkContent, 'text'> {}

/**
 * @title Подвал
 * @required ["topItems"]
 */
export interface FooterContent extends SitemapContent {
  /** @title Обязательные документы */
  documents?: LinkContent[];
  /** @title Другие предприятия */
  relatedEnterprises?: LinkContent[];
  /** @title Контакты */
  contacts?: ContactInfo[];
  /** @title Социальные сети */
  socialMedia?: SocialMedia[];
}
