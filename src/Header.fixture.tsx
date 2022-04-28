import { Header } from './Header';

import './setup-fixture';

export default (
  <Header
    topItems={[
      {
        href: 'http://localhost:5000/',
        text: 'Экосистема Своё',
        items: [
          {
            href: '/credit-cards',
            text: 'Кредитные карты',
          },
          {
            href: '/',
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
        href: 'https://business.ru/',
        text: 'Бизнес клиентам',
      },
      {
        href: 'https://private.ru/',
        text: 'Частным клиентам',
      },
    ]}
  />
);
