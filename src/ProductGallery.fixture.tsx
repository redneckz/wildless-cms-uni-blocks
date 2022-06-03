import { context } from './setup-fixture';

import { ProductGallery } from './ProductGallery';
import { Picture } from './types';

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

export default {
  default: (
    <ProductGallery
      context={context}
      duration={2}
      slides={[
        {
          navBtnTitle: 'Деньги на любые цели',
          navBtnDesc: 'Ставка от 12,5% годовых на срок до 5 лет',
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
        {
          navBtnTitle: 'Для людей в возрасте',
          navBtnDesc: 'Ставка от 12,5% годовых на срок до 3 лет',
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
        {
          navBtnTitle: 'Выгодно покупать',
          navBtnDesc: 'Дополнительные бонусные баллы за покупки',
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
        {
          navBtnTitle: 'Карты Unionpay',
          navBtnDesc: 'Кэшбэк до 20% у партнеров',
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
      ]}
    />
  ),
};
