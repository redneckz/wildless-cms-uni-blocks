import { context } from './setup-fixture';

import { ProductTile } from './ProductTile';
import { Picture } from './types';

const cardWithMoney: Picture = {
  src: 'card-with-diamond.png',
  format: 'webp',
};

const letterWithMoney: Picture = {
  src: 'letter-with-money.png',
  format: 'webp',
};

const building: Picture = {
  src: 'building.png',
  format: 'webp',
};

export default {
  credit: (
    <div className="grid grid-cols-12">
      <ProductTile
        context={context}
        className="col-span-6"
        title="Акция! “Кредит На все, что хочется!”"
        description="Потребительский кредит на любые цели, без залога и поручительства"
        benefits={[
          {
            label: 'Кредитный лимит',
            description: 'до 5 млн Р',
          },
          {
            label: 'Процентная ставка',
            description: 'от 12,5%',
          },
          {
            label: 'Срок кредитования',
            description: 'до 5 лет',
          },
        ]}
        button={{
          text: 'Подробнее',
          href: '/credit-cards',
          version: 'secondary',
        }}
        image={cardWithMoney}
      />
    </div>
  ),
  pension: (
    <div className="grid grid-cols-12">
      <ProductTile
        context={context}
        className="col-span-6"
        title="Акция! “Пенсионный кредит”"
        description={'Потребительский кредит на любые цели, без залога и поручительства'}
        benefits={[
          {
            label: 'Кредитный лимит',
            description: 'до 3 млн Р',
          },
          {
            label: 'Процентная ставка',
            description: 'от 12,5%',
          },
          {
            label: 'Срок кредитования',
            description: 'до 3 лет',
          },
        ]}
        button={{
          href: 'https://rshb.ru',
          text: 'Подробнее',
          target: '_blank',
          version: 'secondary',
        }}
        image={letterWithMoney}
      />
    </div>
  ),
  'credit-card': (
    <div className="grid grid-cols-12">
      <ProductTile
        context={context}
        className="col-span-8"
        title="Кредит под залог недвижимости"
        description={'Без переоформления залогой недвижимости на банк'}
        benefits={[
          {
            label: 'Кредитный лимит',
            description: 'до 10 млн Р',
          },
          {
            label: 'Процентная ставка',
            description: 'от 21,5%',
          },
          {
            label: 'Срок кредитования',
            description: 'до 10 лет',
          },
        ]}
        button={{
          href: 'https://rshb.ru',
          text: 'Подробнее',
          target: '_blank',
          version: 'secondary',
        }}
        image={building}
      />
    </div>
  ),
  'pension-credit': (
    <div className="grid grid-cols-12">
      <ProductTile
        context={context}
        className="col-span-4"
        title="Кредит пенсионный"
        description={'Для людей в возрасте до 75 лет'}
        benefits={[
          {
            label: 'Кредитный лимит',
            description: 'до 3 млн Р',
          },
          {
            label: 'Процентная ставка',
            description: 'от 16,8%',
          },
          {
            label: 'Срок кредитования',
            description: 'до 5 лет',
          },
        ]}
        button={{
          href: 'https://rshb.ru',
          text: 'Подробнее',
          target: '_blank',
          version: 'secondary',
        }}
      />
    </div>
  ),
};
