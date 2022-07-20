import { context } from '../../setup-fixture';

import { ProductGallery } from './ProductGallery';
import type { Picture } from '../../model/Picture';

const moneyImage: Picture = {
  src: 'money-1.png',
  format: 'webp',
  size: {
    width: 280,
    height: 280,
  },
  alt: 'Варианты потребительского кредита',
};

const worker: Picture = {
  src: 'worker.png',
  format: 'webp',
  size: {
    width: 280,
    height: 280,
  },
};

const creditCard: Picture = {
  src: 'credit-card-1.png',
  format: 'webp',
  size: {
    width: 280,
    height: 280,
  },
};

export default (
  <div className="container grid grid-cols-12">
    <ProductGallery
      className="col-span-12"
      context={context}
      slides={[
        {
          nav: {
            title: 'Деньги на любые цели',
            desc: 'Ставка от 12,5% годовых на срок до 5 лет',
          },
          productBlock: {
            title: 'Ставка от 12,5% годовых на срок до 5 лет!»',
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
  </div>
);
