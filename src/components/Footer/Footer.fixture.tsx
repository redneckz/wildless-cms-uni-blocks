import { context } from '../../setup-fixture';
import { Footer } from './Footer';

const DEFAULT_ORIGIN = 'https://rshb.ru/';

export default (
  <Footer
    topItems={[
      {
        href: DEFAULT_ORIGIN,
        text: 'Частным клиентам',
        target: '_blank',
        items: [
          {
            href: DEFAULT_ORIGIN,
            text: 'Кредитные карты',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Дебетовые карты',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Кредиты',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Ипотека',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Вклады и сбережения',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Инвестиции',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Страхование',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Премиальным клиентам',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Биометрическая регистрация',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Перевод денег',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Обмен денег',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Акции',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Тарифы',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Архивная информация',
          },
        ],
      },
      {
        href: DEFAULT_ORIGIN,
        text: 'Бизнес клиентам',
        target: '_blank',
        items: [
          {
            href: DEFAULT_ORIGIN,
            text: 'РКО',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Кредиты',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Депозиты',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Эквайринг',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Банковские карты',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'ВЭД',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Инвестиции',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Обмен валюты',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Страхование',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Партнёрские программы',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Онлайн-сервисы',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Акции',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Тарифы',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Архивная информация',
          },
        ],
      },
      {
        href: DEFAULT_ORIGIN,
        text: 'О банке',
        target: '_blank',
        items: [
          {
            href: DEFAULT_ORIGIN,
            text: 'О банке',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Новости',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Офисы и отделения',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Карьера в банке',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Пресс-центр',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Кредитным организациям',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Закупки',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Непрофильные/Профильные нецелевые активы',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Инсайдерам',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Противодействие коррупции',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Меры безопасности',
          },
          {
            href: DEFAULT_ORIGIN,
            text: 'Залоговое имущество',
          },
        ],
      },
    ]}
    socialMedia={[{ href: 'https://t.me' }, { href: 'https://vk.com' }, { href: 'https://ok.ru' }]}
    contacts={[
      {
        text: '+7 (495) 787-7-787',
        description: 'Для звонков из-за границы',
        type: 'tel',
      },
      {
        text: 'example@example.com',
        description: 'Для писем',
        type: 'email',
      },
      {
        text: '7787',
        description: 'Абонентам МТС, Мегафон, Билайн и Tele2',
        type: 'tel',
      },
    ]}
    relatedEnterprises={[
      {
        text: 'РСХБ Страхование',
        href: DEFAULT_ORIGIN,
        target: '_blank',
      },
      {
        text: 'РСХБ Страхование жизни',
        href: DEFAULT_ORIGIN,
        target: '_blank',
      },
      {
        text: 'РСХБ Управление активами',
        href: DEFAULT_ORIGIN,
        target: '_blank',
      },
      {
        text: 'РСХБ Лизинг',
        href: DEFAULT_ORIGIN,
        target: '_blank',
      },
      {
        text: 'РСХБ Факторинг',
        href: DEFAULT_ORIGIN,
        target: '_blank',
      },
    ]}
    documents={[
      {
        text: 'Информация о процентных ставках по договорам банковского вклада с физическими лицами',
        href: DEFAULT_ORIGIN,
        target: '_blank',
      },
      {
        text: 'Раскрытие информации профессиональным участником рынка ценных бумаг',
        href: DEFAULT_ORIGIN,
        target: '_blank',
      },
      {
        text: 'Раскрытие информации',
        href: DEFAULT_ORIGIN,
        target: '_blank',
      },
      {
        text: 'Удостоверяющий центр',
        href: DEFAULT_ORIGIN,
        target: '_blank',
      },
      {
        text: 'Финансовая культура',
        href: DEFAULT_ORIGIN,
        target: '_blank',
      },
    ]}
    context={context}
  />
);
