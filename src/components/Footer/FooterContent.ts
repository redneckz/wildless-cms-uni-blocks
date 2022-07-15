import type { LinkProps } from '../../model/LinkProps';
import type { SitemapProps } from '../../model/SitemapProps';

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
export interface SocialMedia extends Omit<LinkProps, 'text'> {}

/**
 * @title Подвал
 * @required ["topItems"]
 */
export interface FooterContent extends SitemapProps {
  /** @title Обязательные документы */
  documents?: LinkProps[];
  /** @title Другие предприятия */
  relatedEnterprises?: LinkProps[];
  /** @title Контакты */
  contacts?: ContactInfo[];
  /** @title Социальные сети */
  socialMedia?: SocialMedia[];
}
