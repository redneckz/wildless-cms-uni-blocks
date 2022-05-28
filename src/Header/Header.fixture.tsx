import { context } from '../setup-fixture';
import { Header } from './Header';

export default (
  <Header
    context={context}
    location="Москва"
    topItems={[
      {
        href: '/',
        text: 'Экосистема Своё',
        items: [
          {
            href: '/credit-cards',
            text: 'Кредитные карты',
          },
          {
            href: '/debit-cards',
            text: 'Дебетовые карты',
          },
          {
            href: '/credits',
            text: 'Кредиты',
          },
          {
            href: '/deposits',
            text: 'Вклады',
          },
          {
            href: '/investment',
            text: 'Инвестиции',
          },
          {
            href: '/mortgage',
            text: 'Ипотека',
          },
          {
            href: '/insurance',
            text: 'Страхование',
          },
          {
            href: '/transfers',
            text: 'Переводы',
          },
        ],
      },
      {
        href: 'https://rshb.ru/',
        text: 'Бизнес клиентам',
        target: '_blank',
      },
      {
        href: 'https://rshb.ru/',
        text: 'Частным клиентам',
        target: '_blank',
      },
    ]}
  />
);
