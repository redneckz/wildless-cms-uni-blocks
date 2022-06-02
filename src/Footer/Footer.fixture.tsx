import { context } from '../setup-fixture';
import { Footer } from './Footer';

export default (
  <Footer
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
