import { context } from '../setup-fixture';
import { Footer } from './Footer';

export default (
  <Footer
    relatedEnterprises={[
      {
        text: 'РСХБ Страхование',
        href: 'https://rshb.ru/',
        target: '_blank',
      },
      {
        text: 'РСХБ Страхование жизни',
        href: 'https://rshb.ru/',
        target: '_blank',
      },
      {
        text: 'РСХБ Управление активами',
        href: 'https://rshb.ru/',
        target: '_blank',
      },
      {
        text: 'РСХБ Лизинг',
        href: 'https://rshb.ru/',
        target: '_blank',
      },
      {
        text: 'РСХБ Факторинг',
        href: 'https://rshb.ru/',
        target: '_blank',
      },
    ]}
    documents={[
      {
        text: 'Информация о процентных ставках по договорам банковского вклада с физическими лицами',
        href: 'https://rshb.ru/',
        target: '_blank',
      },
      {
        text: 'Раскрытие информации профессиональным участником рынка ценных бумаг',
        href: 'https://rshb.ru/',
        target: '_blank',
      },
      {
        text: 'Раскрытие информации',
        href: 'https://rshb.ru/',
        target: '_blank',
      },
      {
        text: 'Удостоверяющий центр',
        href: 'https://rshb.ru/',
        target: '_blank',
      },
      {
        text: 'Финансовая культура',
        href: 'https://rshb.ru/',
        target: '_blank',
      },
    ]}
    context={context}
  />
);
