import { context } from '../../setup-fixture';

import { ProductGallery } from './ProductGallery';
import type { Picture } from '../../model/Picture';

const moneyImage: Picture = {
  src: 'money-1.png',
  format: 'webp',
  size: {
    width: 300,
    height: 300,
  },
};

const worker: Picture = {
  src: 'worker.png',
  format: 'webp',
  size: {
    width: 300,
    height: 300,
  },
};

const creditCard: Picture = {
  src: 'credit-card-1.png',
  format: 'webp',
  size: {
    width: 300,
    height: 300,
  },
};

export default (
  <ProductGallery
    context={context}
    slides={[
      {
        nav: {
          title: 'Деньги на любые цели',
          desc: 'Ставка от 12,5% годовых на срок до 5 лет',
        },
        productBlock: {
          title: 'Ставка от 12,5% годовых на срок до 5 лет!»',
          description:
            'Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт.',
          items: [
            'Потребительский кредит по специальной процентной ставке',
            'Получите деньги без залога и поручительства',
            'Кредитный лимит до 5 млн рублей',
          ],
          buttons: [
            {
              href: 'https://rshb.ru',
              text: 'Подробнее',
              target: '_blank',
              version: 'primary',
            },
          ],
          image: moneyImage,
        },
      },
      {
        nav: {
          title: 'Для людей в возрасте',
          desc: 'Ставка от 12,5% годовых на срок до 3 лет',
        },
        productBlock: {
          title: 'Ставка от 12,5% годовых на срок до 3 лет!»',
          description:
            'Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт.',
          items: [
            'Потребительский кредит по специальной процентной ставке',
            'Получите деньги без залога и поручительства',
            'Кредитный лимит до 5 млн рублей',
          ],
          buttons: [
            {
              href: 'https://rshb.ru',
              text: 'Подробнее',
              target: '_blank',
              version: 'primary',
            },
          ],
          image: worker,
        },
      },
      {
        nav: {
          title: 'Выгодно покупать',
          desc: 'Дополнительные бонусные баллы за покупки',
        },
        productBlock: {
          title: 'Дополнительные бонусные баллы за покупки!»',
          description:
            'Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт.',
          items: [
            'Потребительский кредит по специальной процентной ставке',
            'Получите деньги без залога и поручительства',
            'Кредитный лимит до 5 млн рублей',
          ],
          buttons: [
            {
              href: 'https://rshb.ru',
              text: 'Подробнее',
              target: '_blank',
              version: 'primary',
            },
          ],
          image: creditCard,
        },
      },
      {
        nav: {
          title: 'Карты Unionpay',
          desc: 'Кэшбэк до 20% у партнеров',
        },
        productBlock: {
          title: 'Карты Unionpay»',
          description: 'Кэшбэк до 20% у партнеров',
          items: [
            'Потребительский кредит по специальной процентной ставке',
            'Получите деньги без залога и поручительства',
            'Кредитный лимит до 5 млн рублей',
          ],
          buttons: [
            {
              href: 'https://rshb.ru',
              text: 'Подробнее',
              target: '_blank',
              version: 'primary',
            },
          ],
          image: creditCard,
        },
      },
    ]}
  />
);
